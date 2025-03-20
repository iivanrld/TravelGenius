@@ -1,142 +1,12 @@
 TripGenius – Aplicación de Gestión de Viajes con IA
 # React + Vite
 
 This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
 
 Descripción del Proyecto
 Currently, two official plugins are available:
 
 TripGenius es una aplicación multiplataforma diseñada para ayudar a los viajeros a planificar y gestionar sus viajes de manera eficiente. A través de un chatbot con inteligencia artificial, la aplicación proporciona recomendaciones personalizadas sobre destinos, rutas, actividades y alojamientos, integrando información en tiempo real desde plataformas como Booking y Skyscanner.
 Además, TripGenius permite a los usuarios revisar viajes anteriores, gestionar un álbum de fotos por países y realizar un seguimiento detallado de su presupuesto de viaje.
 - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
 - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
 
 ## Expanding the ESLint configuration
 
 Funcionalidades Principales
 
 🗺️ Planificación de Viajes con IA
 
 Chatbot basado en inteligencia artificial para ayudar en la planificación del viaje.
 Sugerencias de destinos, actividades y rutas personalizadas según intereses (cultura, gastronomía, naturaleza, etc.).
 Integración con APIs de terceros para obtener información en tiempo real sobre vuelos, hoteles y transporte.
 
 📍 Gestión de Rutas y Viajes Pasados
 
 Posibilidad de seleccionar, guardar y personalizar rutas.
 Acceso al historial de viajes anteriores con detalles sobre gastos y actividades realizadas.
 
 📸 Álbum de Fotos por Destinos
 
 Organización de fotos de viajes por países y ciudades.
 Opción de compartir álbumes con amigos y familiares desde la aplicación.
 
 💰 Seguimiento de Presupuesto y Gastos
 
 Herramienta para calcular el presupuesto del viaje.
 Registro automático de gastos a medida que se añaden vuelos, hoteles y otras actividades.
 Alertas si el usuario excede el presupuesto establecido.
 
 👥 Interacción Social y Compartir Planes
 
 Función para compartir planes de viaje con familiares y amigos.
 Posibilidad de compartir el itinerario y los detalles del presupuesto para recibir comentarios.
 
 Tecnologías Utilizadas    Categoría	Tecnología
 Lenguajes de Programación =>	Python, JavaScript
 Frontend =>	Flutter / React Native
 Backend =>	Firebase / Node.js
 Base de Datos =>	Firebase Firestore
 IA / Chatbot =>	GPT-4 / Dialogflow
 APIs de Datos =>	Google Maps API, Booking API, Skyscanner API, Amadeus API
 Almacenamiento de Imágenes => Firebase Storage
 
 Plan de Desarrollo
 
 📌 Fase 1: Investigación y Prototipado (Semana 1-2)
 
 Definir el alcance del proyecto.
 Seleccionar y probar APIs externas.
 Diseñar los prototipos de la interfaz de usuario.
 
 🚀 Fase 2: Desarrollo del MVP – Producto Mínimo Viable (Semana 3-8)
 
 Implementación del chatbot con IA.
 Desarrollo del módulo de planificación de rutas.
 Creación del sistema de gestión de presupuestos y gastos.
 Integración de APIs de vuelos y hoteles.
 
 ✨ Fase 3: Optimización y Funcionalidades Adicionales (Semana 9-12)
 
 Implementación del álbum de fotos por destinos.
 Incorporación del historial de viajes y gastos.
 Desarrollo de la función para compartir planes de viaje.
 
 🔍 Fase 4: Pruebas y Ajustes Finales (Semana 13-14)
 
 Realización de pruebas de usuario.
 Corrección de errores y optimización del rendimiento.
 Ajustes en la experiencia de usuario según el feedback recibido.
 
 📂 Estructura del Proyecto
 
 TripGenius/
 
 │── frontend/            # Código fuente del frontend (Flutter / React Native)
 
 │── backend/             # Código fuente del backend (Node.js / Firebase)
 
 │── database/            # Configuración de Firebase Firestore
 
 │── assets/              # Recursos gráficos e imágenes
 
 │── docs/                # Documentación del proyecto
 
 │── README.md            # Documentación principal
 
 │── .gitignore           # Archivos a excluir del control de versiones
 
 │── package.json         # Dependencias del backend
 
 │── pubspec.yaml         # Dependencias de Flutter (si aplica)
 
 
 🚀 Cómo Ejecutar el Proyecto
 
 Requisitos
 
 Node.js y npm instalados.
 Flutter o React Native configurado.
 Cuenta de Firebase para gestionar autenticación y base de datos.
 
 Pasos para Iniciar
 Clonar el repositorio:
 git clone https://github.com/tu-usuario/TripGenius.git
 
 cd TripGenius
 
 Instalar dependencias del backend:
 cd backend
 
 npm install
 
 Iniciar el backend:
 npm start
 
 Configurar el frontend:
 Si usas Flutter:
 cd frontend
 
 flutter pub get
 
 flutter run
 
 Si usas React Native:
 cd frontend
 
 npm install
 
 npm start
 
 
 📄 Licencia
 Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
 
 ✨ Contribuciones
 ¡Las contribuciones son bienvenidas! Si deseas colaborar en el desarrollo de TripGenius, abre un issue o envía un pull request.
 
 TripGenius – Tu compañero inteligente para planificar viajes. 🌍✈️
 If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
