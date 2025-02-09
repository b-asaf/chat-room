# Stage 1: Build
FROM openjdk:18-slim AS builder

# Setting the working directory inside the docker container
WORKDIR /app

# Copy all project files from current working directory (chat-room/server/java) into the container working directory
COPY . .  

# Installing Maven if missing within the Docker
RUN apt-get update && apt-get install -y maven

# Build and package the Spring Boot application -> creates the JAR file in app/target directory
# -> at the moment using MAVEN because its small project and does not require Gradle
RUN mvn clean package

# Final image - slim and fast (no need for build tool, i.e. Maven, only the JAVA runtime environment)
FROM openjdk:18-slim

# Copy the JAR file to the container image
COPY --from=builder /app/target/*.jar app.jar

# Expose BE to listen to port 3000 (same as the Express project)
EXPOSE 3000

ENTRYPOINT [ "java", "-jar", "app.jar" ]
