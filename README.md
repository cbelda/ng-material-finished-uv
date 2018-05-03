# Ng Material Finished



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

Proyecto de Angular finalizado para el seminario del día 19/04/2018 en el master de [**Tecnologías Web, Computación en la Nube y Aplicaciones Móviles**](https://www.uv.es/uvweb/master-ingenieria-servicios-aplicaciones-web/es/master-universitario-tecnologias-web-computacion-nube-aplicaciones-moviles-1285882930977.html) (TWCAM) de la **Universitat de València**.

![](https://upload.wikimedia.org/wikipedia/en/c/c1/University_of_Valencia_seal.png)

Este proyecto se basa en atacar a los puntos de una API creada con NEST, la cual a su vez guarda los datos manejados en una base de datos PostgreSQL levantada en un contenedor de Docker.

## 1. Preparar entorno (API + DB)

**Clonar el repositorio de la API de NEST:**

`$ git clone https://github.com/jsrubio/todo-nestjs.git`

**Ejecutar el script del repositorio:**

`$ cd todo-nestjs && ./run.sh`

**Este script hace lo siguiente:**

````bash
# Levanta el contenedor de la base de datos en el 27017:
$ docker run --name mongo -d -p 27017:27017 mongo`

# Crea un "config.json" a partir de un ejemplo:
$ cp config.json.example config.json

# Levanta la API en el 3000:
$ yarn start
````

## 2. Servir aplicación de Angular

**Ejecutar el comando "server" del Angular CLI en el directorio principal del proyecto**:

````bash
$ cd ng-material-finished-uv && \
    ng serve
````
