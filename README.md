# README.md
## Login UOC
ocardonaa

## Nombre y apellidos
Oriol Cardona Alsina

## Dificultades y ejercicios realizados en esta PEC

Ej 1: realmente ninguna dificultad, he seguido los pasos para instalar y visto la información al hacer `ng --help`.

Ej 2: tuve que investigar más sobre los contenidos que autogenera ng new para conocer los ficheros del proyecto e investigar más sobre los decoradores.

Ej 3: el capítulo 2 del libro online de O'Reilly me ayudó en su gran mayoria a realizar esta tarea, no hubo nada que me bloqueara en especial

Ej 4: he estado consultando el capítulo 3 del libro de O'Reilly. El ejercicio más dificil fue el último, pero investigando más por foros de StackOverflow descubrí porque no se pueden usar varias directivas estructurales a la vez en Angular.

Ej 5: para este ejercicio seguí informandome gracias al libro de O'Reilly acerca de las directivas ngClass y ngIf. Lo único que fue algo más complejo que el resto del ejercicio fue separar las clases del precio y todo el articulo en general para que solo el precio saliera en color gris. Ya que poner las clases en una misma directiva convertia todo el texto a gris, pero solo queremos el precio. En una primera instancia pensé que poniendo el nombre de la clase en el archivo CSS lo solventaria (`.price .available-price` y `.price .unavailable-price`) pero al final decidí separarlo en 2 directivas, una que haria todo el marco rojo en el div container de todo el articulo (la `[ngClass="articleClasses"`) y otro que solo iria al precio (`[ngClass]="priceClasses"`).

Ej 6: me ha costado mucho entender la diferencia entre Native y Emulated en los tipos de encapsulación. Lo he entendido pero haciendo el ejercicio 7 podré acabar de entenderlo y en caso que no esté relacionado, revisaré más foros. El último ejercicio, el 5 me ha parecido largo por toda la redacción pero necesario para comprender el comporamiento de un componente.

Ej 7: información sobre los 5 apartados:
    1.- Este lo combine con parte del apartado 3 para poder usar la directiva `ngFor` de modo que creara con un bucle cada article. Luego creo el vector de articles que recorro en la propia directiva, que está creado en su archivo de components (`article-list.components.ts`).
    2.- En este apartado traslade la lógica de los archivos HTML y CSS, ya que en un principio no lo creé con las especificaciones del Angular CLI pero si entiendo lo que se busca. De modo que añadiendo template y styles en `article-list.components.ts`, ya se puede obtener.
    3.- En esta sección, hice que `article-list.components.ts` cree el vector de Articles, y a `article-item.components.ts` se le pasan los 3 elementos. Luego `article-item.components.ts` recibe el input con @Input y el propio modelo ya puede renderizar los 3 artículos.
    Para `ArticleQuantityChange`, cree primero la interfaz donde el modelo, que en un principio no supe muy bien donde situarla pero la dejé ahi. Importé Article para poder usarlo y le añadí las unidades como la cantidad de unidades del producto. Luego usando Output y EventEmitter creé el evento para poder gestionarlo (haciendo las importaciones necesarias y los bindings tanto en `article-list.components.ts` como en `article-item.components.ts`) y para ambos hice los métodos tanto para enviar datos desde `article-item.components.ts` (`emitData()`) como para recibirlos (`onRecievedData()`) empleando la interfaz para ello. Tras esto no supe muy bien como llamar al método, asi que cada actualización de la cantidad hecha por los botones - o +, este se llamaria.
    4.- Para este apartado en un principio pensé en modificar el modelo para tener un ID, pero luego observé que la llamada del emit ya trae el artículo que se está modificando, por lo que descarté la idea. Para ello eliminé los métodos de incrementar o decrementar preexistentes tanto en `article-item.components.ts` como en su respectivo HTML. En el HTML le pasé un parametro a emit (que seria -1 o 1 en función de la cantidad que se quiera reducir o incrementar el número de productos). La llamada hecha con emit desde `article-item.components.ts` ya lleva la actualización de la cantidad que recibe `article-list.components.ts`, por lo que en el método de `onRecievedData()` solo nos aseguramos que la cantidad nunca sea negativa. Luego borré el resto de elementos que formaban parte de la lógica de incrementar o decrementar.
    5.- Para este apartado añadí una nueva estrategia de `changeDetection` a `article-item.components.ts`. Para ello usé `ChangeDetectionStrategy.OnPush`, ya que me permite actualizar solo los hijos que han recibido algun cambio (y ese cambio se da cuando ha habido una entrada de valor, es decir pulsar un botón y que por tanto el `quantityInCart` cambia)