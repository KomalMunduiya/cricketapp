FROM java:8-jre
WORKDIR /src
ENV MYSQL_DATABASE=cplayer
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=root
ENV MYSQL_URL=jdbc:mysql://localhost:3306/cplayer
ADD ./target/Cplayer-0.0.1-SNAPSHOT.jar /src/Cplayer-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","Cplayer-0.0.1-SNAPSHOT.jar"]
