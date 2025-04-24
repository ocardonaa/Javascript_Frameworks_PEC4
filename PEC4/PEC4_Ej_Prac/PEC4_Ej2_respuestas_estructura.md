## 1. ¿Qué comando debes utilizar para crear un nuevo proyecto Angular
utilizando Angular CLI denominado ecommerce? (A las preguntas que te haga
Angular CLI puedes contestar utilizando las opciones por defecto).
    `ng new ecommerce --no-strict --standalone=false`
Y si quisieramos lanzarlo hariamos
    `ng serve`

La estructura del proyecto es la siguiente:
- En la carpeta raiz están los distintos ficheros de configuración de Angular, donde se instalan sus dependencias en `package.json` y se establece el como funcionará typescript. También se configura el server en el que está y el propio Angular. `angular.json` configura el espacio de trabajo para que sea específicamente Angular, `tsconfig.json` configura TS para que sea para Angular, `tsconfig.app.json` extiende las funcionalidades de `tsconfig.json` centrandose en settings específicos de la aplicación, `tsconfig.spec.json` está pensado específicamente para los tests, `server.ts` sirve como punto de entrada para renderizar el servidor desde el servidor, `.editorconfig` sirve para mantener la consistencia en el estilo del código a través de distintos IDEs.
- En el mismo directorio raíz tenemos `node_modules`, carpeta autogenerada por node en el momento en el que se ha creado el proyecto
- Y luego la carpeta `src`, la cual tiene una hoja de estilos para modificar el sitio web con CSS (`styles.css`), `index.html` que es el documento HTML donde todo esto se ve reflejado, `main.ts` el cual es el punto de entrada para la web y `main.server.ts` que es lo mismo que `main.ts` pero desde el lado del servidor.
- El directorio assets guarda datos estáticos del proyecto para ser copiados cuando se hace build.
- El directorio app donde están los source files. Aqui se incluye todo: servicios, componentes, tests, modulos... Estos contendran la información para los components (`app.component.ts` como código, `app.component.html` para mostrarlo en la web, `app.component.css` para darle estilo, `app.component.spec.ts` para testearlo) Y para los módulos (`app.module.ts` como punto de entrada en la app, `app.module.server.ts` para el servidor) y el fichero de configuración de rutas: `app-routing.module.ts`.

## 2. Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:
- app.module.ts - @NgModule (declarations, imports, providers, bootstrap): `declarations` lista los componentes, pipes y directivas, `imports` lista los otros modulos necesitados para el modulo actual, `providers` lista los servicios que deberian proveer a nivel de aplicación y `bootstrap` que especifica que el componente deberia ser en la raíz del componente de la aplicación.
- app.component.ts - @Component (selector, templateUrl, styleUrls): `selector` especifica que CSS identifique la directiva en un template y por tanto haga trigger en la instanciación de la directiva, `templateUrl` especifica la URL de el template externo a HTML para el componente, `styleUrls` es un array de URLs a CSS externos que son aplicados a un componente

El decorador `@Component` define los metadatos para la clase que se usa para crear un Angular component, mientras que `@NgModule` se usa para definir un modulo, que es una forma de encapsular y organizar código relacionado entre si.

## 3. ¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls? ¿Es recomendable hacer esto?
- Es posible, pero no se recomienda ya que precisamente `templateUrl` especifica la template para poder referenciarlo. En caso que sea muy complejo el proyecto, no especificarlo puede causar problemas para extender el proyecto y puede generar bugs por problemas de comprovación de sintaxis y el usarlo favorece a la sencillez y modularidad. Para los estilos si que se recomienda usar `styleUrls` ya que si un componente tiene muchas hojas de estilo estaria bien encapsularlas en un mismo array, pero si vas con un mismo CSS no seria tan fundamental.