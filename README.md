# Kalista / Mysthrala

Web personal de Unai Kalista Urzainqui Pérez. La presentación parte del nombre que eligió, inspirado en Kalista de League of Legends, y de su relación con las comunidades. También incluye su vínculo con el agua, danza vasca, euskera, aprendizaje del japonés, artes marciales y los nombres mitológicos que dio a sus servidores y a su coche. Hakodate aparece como el lugar al que quiere mudarse. MKDL y Kurogane Hub tienen un espacio secundario. MKDL enlaza a su web y Kurogane Hub a `https://hub.mkdl.jp/`; el único enlace al GitHub personal está en contacto.

## Desarrollo local

Sin compilación ni dependencias:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Abrir http://127.0.0.1:8080. HTML en `index.html`, estilos en `assets/css/style.css` e interacción en `assets/js/main.js`.

## Diseño y contenido

Paisaje nocturno, tipografía serif, tonos tinta, lavanda y coral. La ilustración original se generó con IA y se guarda en `assets/images/mythic-night-water-v2.webp`; la versión JPEG sirve para metadatos sociales. Es una interpretación artística, no una representación documental de Hakodate ni una obra histórica japonesa. [Prompt y procedencia](docs/workflows/site-redesign/illustration-water-v2.md).

Benten, Akkorokamui y Raijū se exploran con botones nativos, ratón o teclado. Las tres historias están presentes en el HTML y se pueden leer sin JavaScript. Sin fuentes, rastreo ni scripts externos. Estilos responsive, foco visible y respeto a movimiento reducido.

Los detalles biográficos proceden de la usuaria. El relato personal se distingue del resumen del personaje; la sección desplegable de Camavor enlaza a la biografía y a la sinopsis de Ruination publicadas por Riot. Las referencias mitológicas tienen enlaces de consulta en la página; Akkorokamui se identifica como parte del folclore ainu.

## Publicación

Preparado para Cloudflare Pages con integración Git: rama de producción `main`, comando de compilación `node scripts/build.mjs` y directorio de salida `dist`. El script publica únicamente archivos de la web y genera el sitemap; no publica las notas de trabajo ni los metadatos del repositorio. La conexión de la cuenta y el primer despliegue están pendientes de validación. `CNAME.example` es un ejemplo. El dominio canónico es `https://mysthrala.com/`.

`_headers` solo se aplica en servicios compatibles; GitHub Pages no lo interpreta. Las cabeceras deben comprobarse en el servidor real. Los SVG anteriores se conservan aunque ya no aparezcan en la página.

## Licencia

Código bajo [MIT](LICENSE). La identidad y las marcas no conceden derechos de representación.
