FROM denoland/deno:ubuntu-1.37.2
EXPOSE 8000
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8
RUN apt update
RUN DEBIAN_FRONTEND=noninteractive apt install -y git

WORKDIR /workspaces/Hue-Browser-Controller

COPY ./ ./

RUN deno cache server.js
CMD ["run", "-A", "server.js"]