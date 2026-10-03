# Emblemas y tema claro

Integrados los cinco emblemas aprobados con contorno plata. SVG conservados para ampliación e impresión. WebP de 384, 768 y 1536 px para la web; miniatura de marca 192 px. PNG para favicon y manifest. Los paquetes y originales de trabajo permanecen locales fuera del contenido servido.

Tema claro: fondo #edf2f5 y texto #152d39; secundarios #425765. Tema oscuro conservado. Selector nativo accesible, preferencia del sistema y elección persistente; sin almacenamiento funciona en la visita; sin JS hay CSS para la preferencia del sistema.

Validación local: build, sintaxis JS, diff, 16 escenarios de sistema/almacenamiento, persistencia tras recarga y teclado Enter. Navegador a 320, 701, 768 y 1280 px, sin desbordamiento tras ajustar Hakodate. Contraste calculado del texto visible: mínimo 5.64:1 claro y 7.32:1 oscuro; sin pares por debajo del umbral aplicable. Cambio de panel mitológico funcional. Revisadas vistas clara/oscura.

Revisión: atendido el peso de los SVG usando WebP responsive en la web. Cabecera adaptable hasta 900 px y contenedor cuadrado para la portada. El supuesto acceso prematuro a theme-color fue falso: meta precede al script; añadida guarda por robustez. Revisión final local completada: cero hallazgos accionables pendientes. Dos avisos descartados con evidencia: no hay solapamiento texto/emblema a 701, 768, 900, 1024 y 1280 px (rangos de texto contra límites de imagen); PNG es un formato de favicon compatible, y el SVG antiguo se conserva en el repositorio, sin necesidad de declararlo para clientes supuestamente incapaces de leer PNG. Los cambios anteriores de robustez están aplicados. El informe final no fue limpio automáticamente: estos dos avisos se rechazaron tras verificarlos.
