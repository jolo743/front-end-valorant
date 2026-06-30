# 🎮 FRONT END Valorant

## 📝 Descripción del proyecto

**TechSolutions** quiere ampliar su catálogo de servicios digitales con una API pública que centralice información del videojuego *Valorant*. Este proyecto implementa:

- Un **frontend** en HTML5, CSS3 y JavaScript Vanilla (con **Axios**) que documenta los endpoints, muestra ejemplos de uso y permite al usuario final probar el CRUD de forma interactiva desde el navegador.

La aplicación sigue una estrategia **Mobile First**, con HTML semántico, animaciones suaves y feedback visual en cada acción.

---

## 🛠️ Tecnologías utilizadas

### Backend
- **Python 3.11+**
- **FastAPI** — framework web asíncrono, generación automática de OpenAPI
- **SQLAlchemy** — ORM para acceso a datos
- **SQLite** — base de datos local (fichero `valorant.db`)
- **Pydantic** — validación de esquemas de entrada/salida
- **Uvicorn** — servidor ASGI

### Frontend
- **HTML5** semántico
- **CSS3** con variables, animaciones y media queries (Mobile First)
- **JavaScript Vanilla** (módulos ES6)
- **Axios** — cliente HTTP para consumir la API

### Diseño
- **Stitch by Google** — wireframes, mockups y prototipos de alta fidelidad

### Control de versiones
- **Git** + **GitHub** con **Gitflow** (`main`, `develop`, `feature/*`, `release/*`, `hotfix/*`)

---

## 🚀 Instalación en local

### 1. Clonar el repositorio

```bash
git clone https://github.com/jolo743/API-REST-valorant.git
cd API-REST-valorant
```

### 2. Levantar el backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate          # En Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env               # Editar variables si es necesario
uvicorn app.main:app --reload
```

El backend quedará disponible en `http://localhost:8000`.
- Swagger UI → `http://localhost:8000/docs`
- ReDoc → `http://localhost:8000/redoc`

### 3. Levantar el frontend

El frontend es 100% estático. Basta con servirlo:

```bash
cd ../frontend
# Opción A: con Python
python -m http.server 5500
# Opción B: con Node (si tienes npx)
npx serve .
```

Abrir `http://localhost:5500` en el navegador.

---

## ⚙️ Configuración del entorno

Variables de entorno del backend (definidas en `backend/.env`, copia a partir de `backend/.env.example`):

| Variable         | Descripción                                              | Ejemplo                                      |
|------------------|----------------------------------------------------------|----------------------------------------------|
| `APP_NAME`       | Nombre de la aplicación                                  | `Valorant API`                               |
| `APP_ENV`        | Entorno de ejecución                                     | `development` / `production`                 |
| `APP_PORT`       | Puerto del servidor                                      | `8000`                                       |
| `DATABASE_URL`   | Cadena de conexión a la BD                               | `sqlite:///./valorant.db`                    |
| `CORS_ORIGINS`   | Orígenes permitidos para el frontend (separados por `,`) | `http://localhost:5500,http://127.0.0.1:5500` |

> ⚠️ El fichero `.env` está incluido en `.gitignore` y **no** debe subirse al repositorio.

---

## 💡 Ejemplos de uso

### Listar todos los agentes

```http
GET /api/agents
```

```json
{
  "total": 12,
  "skip": 0,
  "limit": 10,
  "items": [
    {
      "id": 1,
      "name": "Jett",
      "role": "Duelist",
      "origin": "South Korea",
      "abilities": "Tailwind, Updraft, Cloudburst, Blade Storm",
      "biography": "Jett is an agile duelist...",
      "image_url": "https://...",
      "is_playable": true
    }
  ]
}
```

### Filtrar por rol y paginar

```http
GET /api/agents?role=Duelist&skip=0&limit=5
```

### Obtener un agente por ID

```http
GET /api/agents/1
```

### Crear un nuevo agente

```http
POST /api/agents
Content-Type: application/json

{
  "name": "Jett",
  "role": "Duelist",
  "origin": "South Korea",
  "abilities": "Tailwind, Updraft, Cloudburst, Blade Storm",
  "biography": "Jett is an agile duelist...",
  "image_url": "https://example.com/jett.png",
  "is_playable": true
}
```

### Actualizar un agente

```http
PUT /api/agents/1
Content-Type: application/json

{
  "biography": "Jett is an agile and evasive duelist from South Korea."
}
```

### Eliminar un agente

```http
DELETE /api/agents/1
```

---

## 🖼️ Capturas de pantalla

> *Pendiente de añadir.* Aquí se incluirán capturas de la web responsive y de la documentación Swagger una vez desarrollada la UI.

- 📌 *Home / landing*
- 📌 *Documentación de la API*
- 📌 *Demo CRUD interactivo*
- 📌 *Swagger UI*

---

## 📚 Documentación de endpoints

| Método | Endpoint                  | Descripción                          | Código éxito |
|--------|---------------------------|--------------------------------------|--------------|
| GET    | `/api/agents`             | Lista todos los agentes              | `200`        |
| GET    | `/api/agents/{id}`        | Obtiene un agente por su ID          | `200` / `404`|
| GET    | `/api/agents/search`      | Búsqueda por nombre y filtros        | `200`        |
| POST   | `/api/agents`             | Crea un nuevo agente                 | `201`        |
| PUT    | `/api/agents/{id}`        | Actualiza un agente existente        | `200` / `404`|
| DELETE | `/api/agents/{id}`        | Elimina un agente                    | `204` / `404`|

### Parámetros de filtrado y paginación

| Parámetro | Tipo    | Default | Descripción                                |
|-----------|---------|---------|--------------------------------------------|
| `name`    | string  | —       | Búsqueda parcial por nombre                |
| `role`    | string  | —       | Filtro exacto por rol                      |
| `skip`    | integer | `0`     | Número de registros a saltar               |
| `limit`   | integer | `10`    | Máximo de registros a devolver (máx. 100)  |

> La referencia completa de cada endpoint (esquemas, ejemplos y respuestas de error) está disponible en Swagger UI (`/docs`) y ReDoc (`/redoc`) al levantar el backend.

