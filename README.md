#![alt text](public/img/android-chrome-256x256.png)
#Mangaka Studio  

¡Bueno, hola! Este repositorio contiene el código y el script para el desplegar [Mangaka Studio](https://Mangaka.Studio)  al igual que algunos dato de la BD.

## Instalación

Si acabas de descargar el código, ¡Muchisimas gracias!

Para que funcione, sigue estos pasos:

**Descargar las dependencias de Composer**

Asegúrate de que tienes [Composer Instalado](https://getcomposer.org/download/) y ejecuta:

```
composer install
```


**Inicie el servidor web incorporado**

Puedes usar Nginx o Apache, pero el servidor web local de Symfony funciona aún mejor.

Para instalar el servidor web local de Symfony, sigue
"Descargando el cliente Symfony" instrucciones encontradas
aquí: https://symfony.com/download - sólo tienes que hacer esto una vez en tu sistema.

Luego, para iniciar el servidor web, abrir una terminal, entrar en el proyecto, y ejecutar:

```
symfony serve
```
 (Si es la primera vez que usas este comando, es posible que veas un error que necesites ejecutar primero `symfony server:ca:install`).


Ahora comprueba el sitio en `https://localhost:8000`


