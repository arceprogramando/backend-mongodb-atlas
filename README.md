# Primera Practica Integradora
## _Felipe Antonio Aleman Arce_
### Ejercicio 6 entregable , Primera Practica Integradora (Finalizada)
[![Coderhouse](https://res.cloudinary.com/hdsqazxtw/image/upload/v1570710978/coderhouse.jpg)](https://github.com/arceprogramando)

Estoy haciendo esto para poder tener un ejemplo de como hacer un readme a la hora de mostrar un proyecto

- Nuevas funcionalidades de los lenguajes ECMAScritpt✔️
- Manejo de archivos en JavaScript✔️
- Servidor con Express ✔️
- Router y Multer✔️
- Motores de plantillas✔️
- ✨ Primera practica integradora ((>‿◠)✌)✨

## Desafio Entregable
#  Primera practica integradora
### Desarrollar un servidor basado en express donde podamos hacer consultas a nuestro archivo de productos tengamos nuestras rutas
### Y manejemos nuestro multer para subir imagenenes desde handlebars, poder integrar socket.io , multer, mongodb, mongoose , mongoatlas
### Express Handlebars ,Router , Clases para trabajar con mongoose 


- Se instalarán las dependencias a partir del comando npm install ✔️
- Se echará a andar el servidor✔️
- Se creara las Rutas correspondientes
- Se revisará que el archivo YA CUENTE CON AL MENOS DIEZ PRODUCTOS CREADOS al - momento de su entrega, es importante para que los tutores no tengan que crear los productos por sí mismos, y así agilizar el proceso de tu evaluación.✔️
- Se corroborará que el servidor esté corriendo en el puerto 8080.✔️
- Se mandará a llamar desde el navegador a la url http://localhost:8080/products sin query, eso debe devolver todos los 10 productos.✔️
- Se mandará a llamar desde el navegador a la url http://localhost:8080/products?limit=5 , eso debe devolver sólo los primeros 5 de los 10 productos.✔️
- Se mandará a llamar desde el navegador a la url http://localhost:8080/products/2, eso debe devolver sólo el producto con id=2.✔️
- Se mandará a llamar desde el navegador a la url http://localhost:8080/products/34123123, al no existir el id del producto, debe devolver un objeto con un error indicando que el producto no existe.✔️
- Se generara la creacion del upload de multer para subir imagenes✔️
- Configurar nuestro proyecto para que trabaje con Handlebars y websocket.✔️
- Configurar el servidor para integrar el motor de plantillas Handlebars e instalar un servidor de socket.io al mismo.✔️
- Crear una vista “home.handlebars” la cual contenga una lista de todos los productos agregados hasta el momento ✔️
- demás, crear una vista “realTimeProducts.handlebars”, la cual vivirá en el endpoint “/realtimeproducts” en nuestro views router, ésta contendrá la misma lista de productos, sin embargo, ésta trabajará con websockets. ✔️
- Uso de sweetalert✔️
- Si se desea hacer la conexión de socket emits con HTTP, deberás buscar la forma de utilizar el servidor io de Sockets dentro de la petición POST. ¿Cómo utilizarás un emit dentro del POST?(sin terminar)
- (Nos encontramos Aca)

- Continuar sobre el proyecto que has trabajado para tu ecommerce y configurar los siguientes elementos:
- Agregar el modelo de persistencia de Mongo y mongoose a tu proyecto. ✔️
- Crear una base de datos llamada “ecommerce” dentro de tu Atlas, crear sus colecciones “carts”, “messages”, “products” y sus respectivos schemas. (falta crear schemas de message y carts) ✔️
- Separar los Managers de fileSystem de los managers de MongoDb en una sola carpeta “dao”. Dentro de dao, agregar también una carpeta “models” donde vivirán los esquemas de MongoDB. La estructura deberá ser igual a la vista en esta clase
Contener todos los Managers (FileSystem y DB) en una carpeta llamada “Dao” ✔️
- Reajustar los servicios con el fin de que puedan funcionar con Mongoose en lugar de FileSystem ✔️
- NO ELIMINAR FileSystem de tu proyecto. ✔️
- Implementar una vista nueva en handlebars llamada chat.handlebars, la cual permita implementar un chat como el visto en clase. Los mensajes deberán guardarse en una colección “messages” en mongo (no es necesario implementarlo en FileSystem). El formato es:  {user:correoDelUsuario, message: mensaje del usuario}✔️
- Corroborar la integridad del proyecto para que todo funcione como lo ha hecho hasta ahora.✔️

> Espero que Los ejercicios se encuentren
> resueltos de buena forma y espero 
> que lo haya solucionado de forma optima


## Herramientas
Mi repositorio publico es  [arceprogramando][arceprogramando]
en github.

Para realizar este Ejercicio

- [Coderhouse]  - Se vieron las clases de coderhouse Correspondientes!
- [node.js] - Se uso Node Js
- [Express] - Se uso la libreria Express de Node
- [Multer] - Se instalo multer para poder manejar archivo de imagen
- [Nodemon] - Se instalo globalmente Nodemon Se instalo como paquete de desarrollo 
- [express-handlebars] - Se instalo el motor de plantillas express-handlebars
- [socket.io] - Se instalo socket.io para trabajar con websocket dentro de nuestro servidor
- [sweetalert2] - Importo desde de su CDN link 
- [mongoose] - Utilizo mongoose para trabajar las rutas de mi mongo atlas , y pasar mi filesistem a una base de datos
- [eslint] - Estoy usando eslint como dependencia de desarrollo
- [cors] - Para que funcione como middleware que especifica los origenes permitidos, como servicios externos(no se tanto su funcionamiento)
- [bootstrap] - Para poder hacer mi representacion en handlebars un poco mas atractiva
- [cross-env] - Para ejecutar scripts que establecen y utilizan variables de entorno en diferentes plataformas
- [dotenv] - para cargar variables de entorno desde archivos de configuración locales.

## Installation

Express and nodemon requires [Node.js](https://nodejs.org/) to run.

Primero instalamos de [Node.js](https://nodejs.org/)  su pagina oficial.

Inicializamos el proyecto 

```sh
npm i

```

Para hacer el proyecto fui por los siguientes pasos 


Primero instale de [Nodemon](https://nodemon.io) 
Yo lo instale como dependencia de desarrollo

```sh
npm install nodemon -D

```

### Todos los paquetes en 1 
```sh
npm install cors dotenv express express-handlebars express-routemap mongoose multer socket.io

npm install crossenv nodemon -D

npm init @eslint/config

```

### Fin de todos los paquetes en 1 

Segundo instale [eslint](https://eslint.org) 
para una mejor escritura de mi codigo siguiendo la practica de el modelo de airbnb tambien se instalo como dependencia de desarrollo

```sh
npm init @eslint/config

```


Tercero instalamos [express](http://expressjs.com)

```sh
npm install express

```
Cuarto agregamos a nuestro package.json


```sh
"type": "module",

```

Quinto instalamos [multer](https://www.npmjs.com/package/multer)

```sh
npm install multer

```
Sexto instalamos [socket.io](https://socket.io) para manejar los websocket entre cliente-servidor(aun no le se tanto)


Septimo instalamos [express-hamdlebars](https://www.npmjs.com/package/express-handlebars)

```sh
npm install express-handlebars

```

Octavo instalamos mongoose 

```sh
npm install mongoose

```

Noveno instalamos [cross-env](https://www.npmjs.com/package/cross-env) ejecutar scripts que establecen y utilizan variables de entorno en diferentes plataformas


```sh
npm install cross-env

```

Decimo instalamos [dotenv](https://www.npmjs.com/package/dotenv) para cargar variables de entorno desde archivos de configuración locales.


```sh
npm install dotenv

```

Onceavo instalamos [express-routemap](https://www.npmjs.com/package/express-routemap) para poder mapear nuestro conjunto de rutas a utilizar o en uso


```sh
npm install express-routemap

```



```
http://localhost:8080/
http://localhost:8080/products
[http://localhost:8080/products?limit=n]
http://localhost:8080/products/:id
```



  [Coderhouse]: <https://plataforma.coderhouse.com/cursos/43335/programacion-backend>
  [arceprogramando]: <https://github.com/arceprogramando>
  [node.js]: <http://nodejs.org>
  [express]: <http://expressjs.com>
  [Nodemon]: <https://nodemon.io>
  [Multer]:<https://www.npmjs.com/package/multer>
  [express-handlebars]:<https://www.npmjs.com/package/express-handlebars>
  [socket.io]:<https://socket.io/docs/v4/>
  [sweetalert2]:<https://sweetalert2.github.io/v10.html>
  [mongoose]:<https://www.npmjs.com/package/mongoose>
  [eslint]:<https://eslint.org>
  [cors]:<https://www.npmjs.com/package/cors>
  [dotenv]:<https://www.npmjs.com/package/dotenv>
  [cross-env]:<https://www.npmjs.com/package/cross-env>
  [express-routemap]:<https://www.npmjs.com/package/express-routemap>
  [bootstrap]:<https://getbootstrap.com>