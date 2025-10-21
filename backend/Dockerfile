FROM openjdk:17-alpine AS build
WORKDIR /app

COPY build.gradle settings.gradle gradlew ./
COPY gradle ./gradle
COPY src ./src

RUN ./gradlew clean build -x test

FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

COPY --from=build /app/build/libs/*.jar backend_es.jar
EXPOSE 8080
ENTRYPOINT [ "java", "-jar", "backend_es.jar" ]