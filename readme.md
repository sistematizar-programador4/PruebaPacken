React Native app prueba Packen [![APK](https://1.bp.blogspot.com/-HZGGTdD2niI/U2KlyCpOVnI/AAAAAAAABzI/bavDJBFSo-Q/s1600/apk-icon.jpg)](https://github.com/sindresorhus/awesome#readme)
====
Este repositorio contiene la prueba dejada el dia viernes 07 de febrero del año 2020, el enunciado y puntos ha desarrollar de la prueba es:
Tiendas “El Baratón” necesita un e-commerce para expandir sus servicios, para eso don Pepe (propietario de la tienda) ha provisto de los siguientes requerimientos: 
* La tienda debe mostrar categorías las cuales están conformadas por subniveles, éstos subniveles a su vez pueden tener más subniveles anidados, se debe hacer un menú donde aparezcan categorías y subniveles de forma anidada (Hecho). Ejemplo
  * Categoría licores
    * subnivel vinos: 
    * subnivel vinos tintos 
    * subnivel vinos blancos 
* Los productos tienen un identificador principal y un identificador de subnivel, esto quiere decir que un producto sólo debe ser mostrado en su subnivel correspondiente (Hecho). 
* Los productos deben filtrarse por: disponibilidad, rango de precios, cantidad en stock (Pendiente).
* Los productos deben poder ordenarse por precio, disponibilidad y cantidad (Hecho).
* Se debe crear un carrito de compras donde los usuarios puedan agregar, editar cantidad y eliminar un producto (Hecho).
* Los productos deben permanecer en el carrito si el usuario cierra y abre la página solo deben ser borrados si el usuario realiza la compra (Hecho).
* Un subnivel final es aquel que no tiene más subniveles, en éste caso debe aparecer una caja de texto que permita realizar búsquedas de productos por nombre en dichos subniveles (Hecho).
* Además, el ecommerce debe ser responsive (Hecho)

## Setup
Este proyecto fue desarrollado guiandose de la documentacion oficial de [React Native](https://facebook.github.io/react-native/).

## Scripts Disponibles
Antes de ejecutar cualquiera de los siguientes scripts, se debe ejecutar `npm install` para descargar todas las dependencias del proyecto.

### `npm start`
Inicia la app in modo de desarrollo, si se esta usando expo esto abrira un codigo qr para verlo con la [Expo app](https://expo.io) en tu telefono celular.
Runs your app in development mode.

Algunas veces tu necesitaras restaurar o limpiar la cache de tu app, para esto solo bastara ejecutar el script pasandole la bandera `--reset-cache`:
```
npm start -- --reset-cache
```

#### `npm test`

Ejecuta las diferentes pruebas guardadas en la carpeta test con [jest](https://github.com/facebook/jest) test runner.

#### `npm run ios`

Similar a `npm start`, pero este buscara un sistema iOS (ya sea fisico o simulador) para ejecutar la app, es necesario tener un Mac para esta funcion.

#### `npm run android`

Similar a `npm start`, pero este buscara un dispositivo android o un emulador de este, es requerido para su debido funcionamiento tener instalado las Android Build Tools (para saber mas detalles de todo lo referente al setup de la app ver la [documentacion de react native](https://facebook.github.io/react-native/docs/getting-started.html)). Es recomendado instalar Genymotion como emulador de Android. una vez todo este instalado estara finalizada la configuracion para la compilacion del ambiente nativo en android.

## Editar el nombre a mostrar de la app

Puedes editar las configuraciones basicas de la app (como el nombre a mostrar) editando el archivo `app.json` encontrado en la carpeta raiz del proyecto.

## Escritura y ejecución de los Tests

Las pruebas de este proyecto utiizan [jest](https://facebook.github.io/jest/) para la ejecución y escritura de las pruebas, ademas de eso al utilizar redux para el manejo de estado en las pruebas tambien se utilizan modulos como `redux-mock-store`. 

## Guia de uso rapido de la app. 

La app muestra desde que es abierto el primer nivel de categorias teniendo, al picar en cada uno de los iconos se podra avanzar a los diferentes sub-niveles de la categoria, cuando un sub-nivel no tiene mas sub-niveles el icono cambiara a una lupa donde se podra apreciar los productos de ese sub-nivel

## Servicio Location.

La app cuenta con un servicio hecho para los dispositivos android, actualmente el servicio y la logica esta desarrollada, pero el llamado no se encuentra hecho, puesto que es necesario realizar un requestPermission para el permiso _ACCESS_ _FINE_ _LOCATION_, para apreciar el desarollo del servicio se pueden ver los archivos que se encuentran en la ruta `./android/app/src/main/java/com/awesomeproject/`

## Troubleshooting
### No se encuentra un dispositivo android o un emulador

Este error es bastante comun, es debido a cache creada cuando se compila la app nativa, basta solo con entrar a la carpeta `./android` y ejecutar: `./gradlew clean`


