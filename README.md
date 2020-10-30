# aspnetcore + quazar + identity

## ClientApp packages

-   vue-oidc-client

## Server package

-   VueCliMiddleware (https://github.com/EEParker/aspnetcore-vueclimiddleware)

Setting up for HTTPS
For consistent schemas & for hot reload to not break while using https you will need to setup your vue app, before enabling the https flag.

Get the mkcert tool following the installation instructions on their github repository or their releases
Install root CA mkcert -install
Generate the certificates mkcert localhost 127.0.0.1 <local ipv4> ::1
