# Curso JavaScript

## 1. Instalar mkdocs-page-pdf

1. Desinstalar el plugin antiguo en caso que exista:
   + pip uninstall mkdocs-page-pdf
2. Instalar la versión moderna con Playwright:
   + pip install mkdocs-page-pdf==0.4.0
3. Instalar Playwright y descargar Chromium:
   + pip install playwright
   + playwright install chromium
4. Configurar mkdocs.yml
   ```yaml
      plugins:
        - search
        # ... resto de plugins ...
        - page-to-pdf:              # debe ir el ÚLTIMO
              disableOnServe: false
              printBackground: true
              displayHeaderFooter: false
              scale: 1.0
              margin:
                top: "40px"
                bottom: "40px"
                left: "20px"
                right: "20px"
   ```
5. Verificar que Playwright funciona antes de hacer build
      ```bash
         python -c "from playwright.sync_api import sync_playwright; p = sync_playwright().start(); b = p.chromium.launch(); print('OK'); b.close(); p.stop()"
      ```
6. Se debe ver `OK`. Si da error, ejecutar:
      ```bash
         playwright install-deps chromium
      ```
7. Mostrar los **admonitios plegables** en el pdf:
   + Crear fichero css en `docs/css/extra.css`:
      ```css
         @media print {
            details,
            details[open] {
                display: block !important;
            }

            details > * {
                display: block !important;
                visibility: visible !important;
                height: auto !important;
                max-height: none !important;
                overflow: visible !important;
                opacity: 1 !important;
            }

            /* Ocultar la flecha toggle en el PDF */
            details > summary::marker,
            details > summary::-webkit-details-marker {
                display: none !important;
            }
        }
      ```
    + Referenciar CSS en `mkdocs.yml`:
      ```yaml
         extra_css:
           - css/extra.css
      ```
    + Crear fichero javascript en `docs/javascripts/pdf_expand.js`:
      ```javascript
         // Expandir todos los <details> solo al imprimir/generar PDF
        window.addEventListener('beforeprint', function () {
            document.querySelectorAll('details').forEach(function (el) {
                el.setAttribute('open', true);
                el._wasOpen = el.hasAttribute('open'); // guardar estado original
            });
        });

        // Restaurar el estado original después de imprimir
        window.addEventListener('afterprint', function () {
            document.querySelectorAll('details').forEach(function (el) {
                if (!el._wasOpen) {
                el.removeAttribute('open');
                }
            });
        });
      ```
    + Referenciar el script en `mkdocs.yml`:
      ```yaml
         extra_javascript:
           - javascripts/pdf_expand.js
      ```
8.  Hacer **build** para generar los pdf
      ```bash
         mkdocs build
      ```
9.  Hacer **mkdocs serve** para levantar el proyecto
      ```bash
         mkdocs serve
      ```
    
