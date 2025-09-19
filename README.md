# Challenge DUX - Sistema de Gestión de Usuarios

## 📋 Descripción del Proyecto

Sistema de gestión de usuarios desarrollado con Next.js 14, PrimeReact y PrimeFlex. El proyecto implementa un CRUD completo con funcionalidades de búsqueda, filtrado, paginación y diseño responsive.

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **PrimeReact 10.9.7** - Biblioteca de componentes UI
- **PrimeFlex 4.0.0** - Sistema de utilidades CSS
- **PrimeIcons 7.0.0** - Iconografía

### Estilos y UI
- **PrimeFlex** 
- **CSS Modules** - Estilos modulares

### Herramientas de Desarrollo
- **ESLint** - Linting de código
- **PostCSS** - Procesamiento de CSS

## 🏗️ Arquitectura del Proyecto

## 📂 Arquitectura del proyecto

El proyecto está estructurado **por tipo y por feature**, lo que permite mantener el código ordenado y fácilmente escalable.  

> 💡 Nota: En proyectos más grandes suelo utilizar **Screaming Architecture**, pero para esta prueba opté por esta estructura para optimizar tiempos y mantener claridad.

## 🚀 Características Implementadas

### Funcionalidades Core
- ✅ **CRUD de Usuarios** - Crear, leer, actualizar y eliminar
- ✅ **Búsqueda en Tiempo Real** - Con debounce de 300ms
- ✅ **Filtrado por Estado** - Dropdown con opciones predefinidas
- ✅ **Paginación** - Con opciones de filas por página
- ✅ **Ordenamiento** - Por diferentes campos
- ✅ **Confirmación de Eliminación** - Dialog de confirmación

### UI/UX
- ✅ **Toast Notifications** - Feedback visual para acciones
- ✅ **Loading States** - Skeletons y estados de carga
- ✅ **Error Handling** - Manejo de errores con UI

### Performance
- ✅ **Server Actions** - Mutaciones del lado del servidor
- ✅ **Caching** - Cache de consultas con Next.js
- ✅ **Suspense Boundaries** - Carga progresiva
- ✅ **Debounced Search** - Optimización de búsquedas


## 🚀 Comandos de Desarrollo

```bash
# Acceder a la carpeta client
cd client

# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm run start

# Linting
npm run lint
```



## 🔮 Posibles Mejoras

- **Mejorar el Responsive Design** - Optimizar la experiencia en dispositivos móviles y tablets
- **Actualizar Estado Local** - Implementar actualización del estado local de usuarios al eliminar, agregar o editar un usuario (actualmente todo está del lado del cliente y se hace un revalidate path desde el server, cada vez que sucede una de estas acciones)


**Desarrollado con ❤️**
