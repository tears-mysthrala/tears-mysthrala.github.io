# Preparación de publicación — 2026-10-03

Cloudflare Pages Free: sitio estático, sin Functions. Compilación `node scripts/build.mjs`, salida `dist`, producción `main`. Autorización OAuth de Pages pendiente; consulta devuelve 403.

Validación: sintaxis JavaScript y git diff --check correctos; build correcto. Revisión autoreview local: caché Cloudflare excluida; rutas de build corregidas. Hallazgo CNAME rechazado: HEAD no contiene CNAME y API GitHub Pages devuelve cname=null. Último hallazgo ARIA rechazado: sin JS los tres paneles están visibles y aria-expanded=true describe correctamente ese estado; JS sincroniza estados al ocultar paneles. Cambiar a false mientras permanecen visibles introduciría la contradicción señalada. Cero hallazgos accionables pendientes.

No se han guardado códigos ni tokens de autorización. No se modifica DNS sin comprobar configuración existente.
