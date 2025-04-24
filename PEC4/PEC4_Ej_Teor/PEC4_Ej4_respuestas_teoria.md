## 1. Explica qué son y cuándo se deberían utilizar las siguientes variables locales de la directiva estructural NgFor:
- index: el elemento en el que está del array.
- even: cuando el elemento tiene un indice par es true.
- odd: cuando el elemento tiene un indice inpar es true.
- first: cuando es el primer elemento del array es true.
- last: cuando es el último elemento del array es true.

## 2. ¿Para qué sirve la opción trackBy de la directiva estructural NgFor? Pon ejemplos de uso.
Sirve para cuando cambia la referencia de un elemento pero quieres seguir usando ese mismo elemento, para por ejemplo, no copiar una lista entera de datos otra vez. Un ejemplo seria en caso que hicieras una llamada a un servidor y te devolviera un json con datos, en caso que no hubiera cambiado mucho ese json (porque por ejemplo, solo has añadido una pequeña cosa al final), usariamos trackBy para mantener los datos de modo que identificaria los repetidos y añadiria los nuevos, para asi no volver a recorrer todo el NgFor.

## 3. ¿Es posible ejecutar dos directivas estructurales simultáneamente? Explica la razón tanto si es si posible como si no lo es.
No se puede porque cada directiva requiere un ng-template individual para funcionar y asi se evitan problemas de renderizado (ya que no sabria que directiva va primero, por eso podrian haber conflictos). Para poder usar varias se recomienda anidar.