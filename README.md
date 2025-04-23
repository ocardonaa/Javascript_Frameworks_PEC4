# README.md
## Login UOC
ocardonaa

## Nombre y apellidos
Oriol Cardona Alsina

## Dificultades y ejercicios realizados en esta PEC

Ej1: realmente ninguna dificultad, he seguido los pasos para instalar y visto la información al hacer `ng --help`.

Ej2: tuve que investigar más sobre los contenidos que autogenera ng new para conocer los ficheros del proyecto e investigar más sobre los decoradores.

Ej 3: el capítulo 2 del libro online de O'Reilly me ayudó en su gran mayoria a realizar esta tarea, no hubo nada que me bloqueara en especial

Ej 4: he estado consultando el capítulo 3 del libro de O'Reilly. El ejercicio más dificil fue el último, pero investigando más por foros de StackOverflow descubrí porque no se pueden usar varias directivas estructurales a la vez en Angular.

Ej 5: para este ejercicio seguí informandome gracias al libro de O'Reilly acerca de las directivas ngClass y ngIf. Lo único que fue algo más complejo que el resto del ejercicio fue separar las clases del precio y todo el articulo en general para que solo el precio saliera en color gris. Ya que poner las clases en una misma directiva convertia todo el texto a gris, pero solo queremos el precio. En una primera instancia pensé que poniendo el nombre de la clase en el archivo CSS lo solventaria (`.price .available-price` y `.price .unavailable-price`) pero al final decidí separarlo en 2 directivas, una que haria todo el marco rojo en el div container de todo el articulo (la `[ngClass="articleClasses"`) y otro que solo iria al precio (`[ngClass]="priceClasses"`).

Ej 6: me ha costado mucho entender la diferencia entre Native y Emulated en los tipos de encapsulación. Lo he entendido pero haciendo el ejercicio 7 podré acabar de entenderlo y en caso que no esté relacionado, revisaré más foros. El último ejercicio, el 5 me ha parecido largo por toda la redacción pero necesario para comprender el comporamiento de un componente.