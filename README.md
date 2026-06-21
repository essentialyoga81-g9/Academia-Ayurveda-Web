# 🪷 Academia Ayurveda

Plataforma web educativa para la formación en Ayurveda y bienestar holístico.
Sitio estático construido con **HTML, CSS y JavaScript limpios** (sin frameworks),
listo para publicar en **GitHub** y desplegar en **Vercel**.

---

## ✨ Características

- Diseño Ayurveda moderno con paleta natural (verde, dorado, beige, terracota).
- Sistema de navegación con menú responsive para móvil.
- Página principal + páginas internas (cursos, sobre nosotros, recursos, contacto).
- Totalmente responsive (mobile-first) y accesible.
- Sin dependencias ni proceso de build.

---

## 📁 Estructura del proyecto

```
Academia-Ayurveda-Web/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos y paleta Ayurveda
├── js/
│   └── main.js         # JavaScript (menú móvil, formulario, etc.)
├── images/             # Recursos gráficos + favicon
├── pdf/                # Documentos descargables
├── pages/              # Páginas internas
│   ├── cursos.html
│   ├── sobre.html
│   ├── recursos.html
│   └── contacto.html
├── vercel.json         # Configuración de despliegue
├── .gitignore
└── README.md
```

---

## 🎨 Paleta de colores

| Color       | Hex       | Uso                         |
|-------------|-----------|-----------------------------|
| Verde       | `#3e5b43` | Color principal             |
| Dorado      | `#c9a14a` | Acentos y llamados a acción |
| Beige       | `#f4ece0` | Fondos                      |
| Terracota   | `#c06a4d` | Detalles y resaltados       |

---

## 🚀 Desarrollo local

No requiere instalación. Abre `index.html` en tu navegador, o usa un servidor estático:

```bash
# Opción 1: Python
python -m http.server 3000

# Opción 2: Node (npx)
npx serve .
```

Luego visita `http://localhost:3000`.

---

## ▲ Despliegue en Vercel

### Opción A — Desde la interfaz web
1. Sube el proyecto a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com) selecciona **Add New → Project**.
3. Importa el repositorio. Vercel detecta el sitio estático automáticamente.
4. Framework Preset: **Other**. Sin comando de build ni carpeta de salida.
5. Pulsa **Deploy**.

### Opción B — Desde la CLI
```bash
npm i -g vercel
vercel        # despliegue de previsualización
vercel --prod # despliegue a producción
```

---

## 📝 Personalización rápida

- **Colores:** edita las variables en `css/styles.css` (sección `:root`).
- **Contenido:** modifica los archivos `.html`.
- **PDF / imágenes:** reemplaza los archivos en `pdf/` e `images/`.

---

## 📄 Licencia

MIT — uso libre con atribución.
