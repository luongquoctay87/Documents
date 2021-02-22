FROM ubuntu:16.04
MAINTAINER Vi Ngoc Hung <hungvn@vnext.com.vn>

RUN apt-get update && \
    apt-get install -y openjdk-8-jdk ca-certificates-java supervisor rsyslog make gcc ruby-full mailutils && \
    update-ca-certificates -f && \
    gem install sisimai -v 4.22.4  && \
    rm -rf /var/lib/apt/lists/*

RUN set -x && \
    cp -f /etc/services /var/spool/postfix/etc/services && \
    mkdir -p /usr/local/spiral/bounce-parser/logs && \
    mkdir -p /usr/local/spiral/email-error-pickuper/logs && \
    chmod -R og+rw /usr/local/spiral

# system env
ENV TZ Asia/Tokyo
ENV DEBIAN_FRONTEND noninteractive
# for email-error-pickuper
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
# for postfix
ENV MYDOMAIN local.rcv.spiral-platform.com

COPY ./files/etc /etc

RUN set -x && \
    postconf compatibility_level=2 && \
    postconf -e 'alias_maps= hash:/etc/aliases regexp:/etc/aliases.regex' && \
    postconf -e 'alias_database= $alias_maps' && \
    postconf -e 'mydestination = $myhostname, localhost.$mydomain, $mydomain, localhost' && \
    postconf -e 'home_mailbox= Maildir/' && \
    postalias /etc/aliases && \
    echo 'export MAIL=~/Maildir' | tee -a /etc/bash.bashrc | tee -a /etc/profile.d/mail.sh

# Start postfix service
COPY ./files/startservices.sh /startservices.sh
COPY ./files/usr/local/spiral/bounce-parser/bounce-parser.rb /usr/local/spiral/bounce-parser/bounce-parser.rb
RUN set -x && \
    chmod og+x /startservices.sh && \
    chmod og+x /usr/local/spiral/bounce-parser/bounce-parser.rb
COPY ./email-error-pickuper/build/libs/email-error-pickuper-0.0.1-SNAPSHOT.jar /usr/local/spiral/email-error-pickuper/email-error-pickuper.jar

# Start services
ENTRYPOINT [ "sh", "-c", "/startservices.sh" ]
