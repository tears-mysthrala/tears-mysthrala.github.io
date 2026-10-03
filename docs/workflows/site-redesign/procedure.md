# Verificación de la web personal

1. Comprobar `git status --short` y preservar cambios ajenos.
2. Servir con `python -m http.server 8080 --bind 127.0.0.1`.
3. Revisar en la vista previa de T3 a 1280, 390 y 320 píxeles: presentación, desbordamiento, enlaces internos y recursos.
4. Ejecutar `node --check assets/js/main.js` y `git diff --check`.
5. Distinguir validación local de publicación. Verificar dominio y cabeceras en el servicio real antes de afirmar su activación.
