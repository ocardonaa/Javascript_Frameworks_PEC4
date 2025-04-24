## 1. ¿Cuáles son los style encapsulation de los componentes? Pon un ejemplo de uso de cada uno de ellos.
- ViewEncapsulation.Emulated: es el tipo por defecto. Modifica los selectores de CSS para incluir atributos únicos, haciendo que lo estilos aplicados a 1 componente no afecten a otros. Un ejemplo seria el componente que hemos creado ya que por defecto lo añade este tipo de encapsulación.
- ViewEncapsulation.Native: utiliza Shadow DOM lo que significa que su scope es el componente. Este crea un shadow root alrededor de el template del componente, lo que se usa como límite para que no tenga scope global la hoja de estilos. Podriamos seguir usando nuestro ejemplo, pero añadiendo la clausula `encapsulation: ViewEncapsulation.ShadowDom`. Para ello creariamos un shadow root y solo afectaria si está alrededor de su template.
- ViewEncapsulation.None: no hay nada de encapsulación. Podria ser útil en caso que queramos acceder desde un elemento padre a un elemento hijo o queremos que los estilos de un componente se repitan.

## 2. ¿Qué es el shadow DOM?
Es una herramienta utilizada para evitar que otros estilos y programas dentro de los componentes tengan conflictos con otros componentes en la página.

## 3. ¿Qué es el changeDetection?
Es un atributo en el componente que nos permite modificar manualmente como se refresca la UI cuando suceden cambios en la página.

## 4. ¿Qué diferencias existen entre las estrategias Default y OnPush? ¿Cuándo debes usar una y otra? Ventajas e inconvenientes.
OnPush solo realiza cambios cuando detecta que una input property ha cambiado, que se ha triggereado un evento o un servicio observable es usado en el template con async pipe, mientras que Default va a estar atento a cualquier cambio.
Default asegura que cualquier cambio la página esté al dia de modo que en caso de tener muchos tipos de inputs o distintos eventos esto seria recomendable. Pero en caso de tener tipos muy especificos de eventos o pocos de estos, OnPush seria más recomendable por ser más eficiente.

## 5. Explica con detalle el ciclo de vida de los componentes. Haz hincapié en cuándo se disparan los hooks OnChanges, OnInit, AfterViewInit y OnDestroy, puesto que son los más utilizados
Primero llamamos al constructor para todos los componentes. 
Luego llamamos a OnChanges, el cual se llama tras el constructor y cada vez que un input es modificado por una directiva. 
Luego llamamos a OnInit el cual se llama solo una vez para inicializar los valores o otros elementos específicos del componente o la directiva. 
Tras esto llamamos a DoCheck el cual revisa los bindings y cambios y si Angular deberia hacer algo al respecto. 
AfterContentInit se llama en caso que haya projection cases durante la inicialización. AfterContentChecked se lanza cada vez que el changeDetection de angular se ejecuta, en caso de inicialización se trigerea después del anterior paso pero si hay changeDetection.Default o OnPush también se puede activar. 
El hook AfterViewInit se activa después que todos los componentes hijos hayan sido usados en el template y hayan acabado la inicialización. Si ya están renderizados puede no ejecturase pero durante la primera inicialización este hook se llama siempre. 
AfterViewChecked se lanza cada vez que los componentes hijos han sido revisados y actualizados. 
Y por último OnDestroy solo se llama si el componente será eliminado de la UI.