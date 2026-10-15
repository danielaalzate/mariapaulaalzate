# Tienda y navegación

## Direction contract

THESIS: Una entrada a Tienda con los tres caminos pedidos: obras de la artista, objetos con arte y obra por encargo. No sustituir el catálogo ni las páginas de series.

OWN-WORLD: Heredar el papel, tinta, azul y rojo del sitio y sus familias Archivo, DM Sans y DM Mono. Usar fotografías y obras existentes, sin generar imágenes ni alterar piezas.

STORY: Elegir categoría; explorar las obras por serie o abrir el catálogo completo; consultar con la artista desde los enlaces existentes.

FIRST VIEWPORT: Título Tienda, introducción breve, tres entradas fotográficas con títulos y acciones. En móvil una columna, con imágenes de altura moderada. La cabecera tiene Inicio, Tienda y Menú.

FORM: Extensión precisamente delimitada por la solicitud, sin cambio de identidad ni ronda de conceptos. Navegación lateral consistente, con subcategorías desplegables y diálogo nativo para controlar el foco.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Restricciones y procedencia

Las fotografías usadas ya están en assets y pertenecen al contenido suministrado para esta web. Se conservan precios, fichas y disponibilidad. Sombrillas y pañoletas están anunciadas como próximas, no como productos disponibles. Luces del alma sigue fuera del índice de series por instrucción expresa del usuario.

## Verificación del sistema existente

Revisión de código del 24 de septiembre de 2026: `assets/shop-entry.css` importa `assets/brand-tokens.css` y conserva Archivo para títulos, DM Sans para lectura y DM Mono para navegación y acciones. Papel (#f6f1e8), tinta (#242328), azul (#17638b), rojo (#b63848) y líneas coinciden con los tokens y con `BIOGRAPHY-DESIGN.md`; `assets/site-nav.css` repite esos valores sin introducir otra familia. Veredicto: extensión coherente con la identidad existente. La escala y el tracking de los títulos son ajustes de esta superficie; el leve zoom al pasar el cursor es una diferencia respecto de la biografía y se desactiva con movimiento reducido.

`tienda.html` ofrece las tres categorías solicitadas; `obras.html` conserva el acceso al catálogo y presenta diez series con imagen, más Expansiones como consulta. `assets/site-nav.js` centraliza el menú mediante un diálogo nativo con subcategorías. La tienda pasa de tres columnas a una a 760 px; el menú cambia a una columna a 600 px. Estas constataciones de código no sustituyen la verificación visual y de interacción.

Procedencia de los recursos reutilizados: `assets/tienda/obras/obra-17-v2.png` es La magia del corazón, ya referenciada en `outside-the-box.html` y `biografia.html`; `assets/objetos/productos-junto-al-agua.jpeg` procede del contenido de objetos de `index.html`; `assets/maria-paula-alzate.jpeg` es el retrato acreditado a Diego Zamora en `index.html` y `biografia.html`. Los tres constan en `C:/Users/retro/.codex/skills/maria-paula-alzate-brand/references/assets.json`, cuyo campo `source` remite a los originales del proyecto. Ese inventario también registra la firma `assets/marca/firma-alzate-recortada.png` y los diez banners usados por `obras.html`: Albores, Ancestros, Humanidad compartida, Women (v2), Outside the Box, Folklore (v2), Metamorfosis, Textiles, Fragmentos y Kintsugi. Se documenta su procedencia local; no se infieren licencias ni créditos adicionales. Esta extensión reutiliza los archivos, sin generar ni editar imágenes.

La ausencia previa de `DESIGN.md` es una brecha documental, no una nueva dirección visual. Esta verificación cierra la documentación de la extensión conservando los archivos de sistema; no crea `DESIGN.md`, sidecar ni tokens, y no corrige deriva anterior.
