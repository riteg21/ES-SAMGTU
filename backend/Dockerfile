FROM openjdk:17-slim AS build
WORKDIR /app

COPY gradle ./gradle
COPY gradlew build.gradle settings.gradle ./
RUN chmod +x ./gradlew
COPY src ./src

RUN ./gradlew clean build -x test --no-daemon

FROM eclipse-temurin:17-jdk
WORKDIR /app

COPY --from=build /app/build/libs/*.jar backend_es.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "backend_es.jar"]