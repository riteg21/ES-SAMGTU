DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'es') THEN
        CREATE DATABASE es WITH OWNER esapp;
    END IF;
END $$;

DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'esapp') THEN
        CREATE ROLE esapp WITH LOGIN PASSWORD 'espassword';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.role_table_grants 
                    WHERE grantee = 'esapp' AND table_schema = 'public' AND privilege_type = 'CREATE') THEN
        GRANT CREATE ON SCHEMA public TO esapp;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.role_table_grants 
                    WHERE grantee = 'esapp' AND table_schema = 'public' AND privilege_type = 'ALL') THEN
        GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO esapp;
    END IF;
END $$;