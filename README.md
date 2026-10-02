# tears-mysthrala.github.io · Mysthrala

Landing page profesional y personal de **Kalista (Tears Mysthrala)**, que aúna su faceta como **empresaria** (fundadora y consultora principal en **Mysthrala Kurogane Defense Labs - MKDL**) y **desarrolladora / investigadora de sistemas** (ciberseguridad industrial OT/ICS, DFIR, análisis de memoria con *Oroitz*, arquitecturas tolerantes a fallos en Elixir/OTP y hardening en Linux/PowerShell).

El sitio está diseñado para servirse a través de **GitHub Pages** y enrutarse posteriormente a **`mysthrala.com`** mediante **Cloudflare**.

---

## 🏛️ Estructura del Proyecto

```text
tears-mysthrala.github.io/
├── index.html               # Landing page principal semántica y accesible (WCAG)
├── CNAME                    # Configuración de dominio personalizado (mysthrala.com)
├── robots.txt               # Directivas de indexación limpia para buscadores
├── site.webmanifest         # Metadatos PWA y manifiesto de aplicación web
├── _headers                 # Cabeceras de seguridad HTTP (CSP, HSTS, X-Frame-Options)
├── assets/
│   ├── css/
│   │   └── style.css        # Hoja de estilos moderna, tema oscuro técnico y responsive
│   ├── js/
│   │   └── main.js          # JavaScript vanilla ligero (menú móvil, copia rápida)
│   └── images/
│       ├── favicon.svg      # Emblema vectorial SVG de Mysthrala / MKDL
│       └── og-card.svg      # Tarjeta Open Graph para previsualizaciones sociales
└── README.md                # Documentación del proyecto y guía de Cloudflare
```

---

## 🎯 Principios de Diseño e Ingeniería

- **Zero Bloat & Local-First**: Sin frameworks pesados ni dependencias de npm. Carga instantánea, código auditable y ligero.
- **Privacidad Estricta**: 0 cookies de terceros, 0 scripts de rastreo ni analíticas invasivas.
- **Doble Enfoque Visual**:
  - **Empresarial (MKDL)**: Auditoría industrial, segmentación de redes OT (Purdue model), gobierno NIS2 y resiliencia de negocio.
  - **Developer & Builder**: Análisis forense DFIR (*Oroitz* / Volatility 3), sistemas concurrentes con Elixir/OTP y entornos seguros en Linux y Windows.

---

## 💻 Prueba y Desarrollo Local

Puedes previsualizar el sitio de inmediato con cualquier servidor estático:

```bash
# Con Python 3:
python3 -m http.server 8080

# Luego abre en tu navegador:
# http://localhost:8080
```

---

## 🌐 Guía Paso a Paso: Conectar con `mysthrala.com` a través de Cloudflare

Para que la web de GitHub Pages responda en tu dominio `https://mysthrala.com` utilizando tu cuenta de Cloudflare, sigue estos pasos:

### 1. Preparación en GitHub (Ya realizado en este repositorio)
1. El archivo [`CNAME`](CNAME) contiene ya la línea:
   ```text
   mysthrala.com
   ```
2. En GitHub, en los ajustes del repositorio (**Settings** > **Pages**):
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / `/ (root)`
   - **Custom domain**: Debe figurar `mysthrala.com`. (GitHub realizará una comprobación de DNS).

---

### 2. Configurar los Registros DNS en Cloudflare

Accede al panel de control de Cloudflare para el dominio `mysthrala.com` > **DNS** > **Records**:

#### A. Registros para el dominio raíz (`@` / `mysthrala.com`)
Añade 4 registros tipo **A** apuntando a las IPs de los servidores de GitHub Pages:

| Tipo | Nombre | Contenido / IPv4 | Proxy Status (Nube) | TTL |
| :--- | :--- | :--- | :--- | :--- |
| **A** | `@` | `185.199.108.153` | ☁️ Solo DNS (*DNS Only*) al verificar | Auto |
| **A** | `@` | `185.199.109.153` | ☁️ Solo DNS (*DNS Only*) al verificar | Auto |
| **A** | `@` | `185.199.110.153` | ☁️ Solo DNS (*DNS Only*) al verificar | Auto |
| **A** | `@` | `185.199.111.153` | ☁️ Solo DNS (*DNS Only*) al verificar | Auto |

> [!NOTE]
> *(Opcional con IPv6)* También puedes añadir los registros **AAAA**:
> - `2606:50c0:8000::153`
> - `2606:50c0:8001::153`
> - `2606:50c0:8002::153`
> - `2606:50c0:8003::153`

#### B. Registro para el subdominio `www`
Añade un registro **CNAME**:

| Tipo | Nombre | Contenido | Proxy Status | TTL |
| :--- | :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `tears-mysthrala.github.io` | ☁️ Solo DNS (*DNS Only*) | Auto |

> [!IMPORTANT]
> **Respeto a ProtonMail**: No toques ni elimines los registros `MX` (`mail.protonmail.ch`, `mailsec.protonmail.ch`) ni los registros `TXT` de verificación SPF/DKIM/DMARC ya configurados en tu Cloudflare. El correo seguirá funcionando de forma 100% independiente.

---

### 3. Verificación del Certificado SSL / TLS

1. **Fase Inicial (Verificación)**:
   - Mantén los registros de GitHub Pages en Cloudflare en **"DNS Only" (nube gris)** durante unos minutos.
   - Ve a **GitHub** > **Settings** > **Pages** y espera a que el check de DNS se ponga en verde: *"DNS check successful"*.
   - Marca la casilla **"Enforce HTTPS"** en GitHub Pages.

2. **Activar el Proxy de Cloudflare (Opcional pero Recomendado)**:
   - Una vez que GitHub ha emitido el certificado y el sitio carga bien, puedes cambiar los registros en Cloudflare a **"Proxied" (nube naranja)** para beneficiarte de la protección DDoS, CDN, Edge Caching y WAF de Cloudflare.
   - **CRUCIAL**: En Cloudflare > **SSL/TLS** > **Overview**, configura el modo de cifrado en **Full** o **Full (Strict)**. Nunca en *Flexible*, ya que provocaría bucles de redirección (*ERR_TOO_MANY_REDIRECTS*).
   - En **SSL/TLS** > **Edge Certificates**, activa **Always Use HTTPS** y **Automatic HTTPS Rewrites**.

---

### 4. Redirección de `www.mysthrala.com` a `mysthrala.com`

Para que cualquier visita a `www.mysthrala.com` se redirija limpiamente a tu dominio canónico `https://mysthrala.com`:
- En Cloudflare ve a **Rules** > **Redirect Rules** (o **Page Rules**).
- Crea una regla:
  - Si la URL entrante es `www.mysthrala.com/*`
  - Redirigir (301 Permanent) a `https://mysthrala.com/$1`

---

## 📄 Licencia

El contenido, textos y elementos de marca corresponden a **Kalista (Tears Mysthrala)** / **Mysthrala Kurogane Defense Labs**.
El código estructural HTML/CSS/JS de la plantilla es abierto y libre bajo la licencia [MIT](LICENSE).
