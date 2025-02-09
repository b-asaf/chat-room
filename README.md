A simple chat-room app that is built in a few technologies and utilizes socket.io.

_There is no persistence._

Server:

1. nodeJS with Express framework
2. C# (TBD)
3. Java (TBD)

Client:

1. React
2. Vue

Consider:

1. NextJS
2. [Astro](https://astro.build/)
3. [HTMX](https://htmx.org/)
4. [Solidjs](https://www.solidjs.com/)

To run the application, in the root folder `chat-room` type:

- **SERVER**
  - _Express_ `npm run start:express`
  - _JAVA_ - The Java project is written with Sprint Boot tool that is build on-top of Sprint framework and Maven build tool inside a Docker:
    - `npm run build:java` - Build the JAVA project inside a Docker
    - `npm run start:java` - Build, configure and run the service as a container andStart the BE project
- **Client**
  - _React_ `npm run start:react`
  - _Vue_ `npm run start:vue`
