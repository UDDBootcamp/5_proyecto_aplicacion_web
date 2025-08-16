# 5 proyecto - Aplicación Web

## Descripción

- El **5 proyecto**, es una aplicación web desarrollada con React que consume datos de la API pública **rickandmortyapi.com**. La app permite explorar personajes de la serie de forma dinámica y visual.

**Url de la API**

```
https://rickandmortyapi.com
```

**Repositorio Git**

```
https://github.com/UDDBootcamp/5_proyecto_aplicacion_web
```

**Url Render**

```
https://five-proyecto-aplicacion-web.onrender.com
```

## Uso del proyecto

-  **Home:** Al iniciar la app, se muestra la Home con una lista con algunos personajes.

-  **Detalle:** Al hacer clic en una tarjeta, se navega a la página de Detalle, que muestra información como nombre, estado, género, especie, origen, ubicación, cantidad de episodios.

- **Buscar:** Desde la página de Búsqueda, puedes ingresar el estado (vivo, muerto o desconocido) y el nombre de un personaje para encontrarlo rápidamente.

- Si ocurre un error en la carga de datos desde la API, se muestra un mensaje específico informando del problema. En caso de errores durante la renderización del componente, se activa un Error Boundary que presenta un mensaje alternativo.

# Instalación

## React Vite

```
npm create vite@latest 5_proyecto -- --template react
cd 5_proyecto
npm install
npm run dev
```

## React Router

Biblioteca de enrutamiento para aplicaciones React que permite la navegación entre diferentes vistas o componentes sin necesidad de recargar la página completa.

```
npm install react-router-dom
```

## Bootstrap

Framework CSS de código abierto que facilita el desarrollo front-end de sitios web responsivos y atractivos
para el diseño y estilizado de componentes.

```
npm install bootstrap@5.3.7
```

```
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

## Axios

Biblioteca de JavaScript, basada en promesas, que se utiliza para realizar peticiones HTTP, tanto desde el navegador como desde Node.js

```
npm install axios
```

## Error Boundaries

Componente de React que actúa como un escudo protector para la aplicación. Captura errores de JavaScript que ocurren en sus componentes hijos durante la renderización.

## Autor

❤️ Este código fue desarrollado en un **90% por Marco Rubio Bustos, 10% por el apoyo de AI**.
