# Todo Frontend

Aplicación frontend de gestión de tareas (ToDo) construida con **React + TypeScript + Vite + Tailwind + Shadcn**.  
Este proyecto sirve como laboratorio personal para **practicar manejo de estados, hooks en React y tests automatizados con Cypress**.

---

## 🧰 Tecnologías

- React  
- TypeScript  
- Vite  
- Tailwind CSS  
- Shadcn UI Components  
- Cypress (para testing automatizado)

---

## 🌿 Versiones / Ramas

Este repositorio cuenta con tres ramas principales que representan distintas etapas del proyecto:

1. **main**  
   - Backend simulado con `localStorage`  
   - Funcionalidad básica de crear, editar, eliminar y marcar tareas como completadas  

2. **testeo**  
   - Basada en `main`  
   - Primeros tests automatizados con **Cypress**  
   - Próximo objetivo: agregar tests que interactúen con una base de datos real  

3. **todo**  
   - Integración con API externa creada en [Todo API](https://github.com/alexidev23/todo-api)  
   - Práctica de consumo de API, manejo de estados y hooks avanzados  

> Cada rama representa una versión independiente del proyecto, permitiendo comparar técnicas y enfoques.

---

## 🚀 Instalación

1. Clonar el repositorio  
   ```bash
   git clone https://github.com/alexidev23/todo-frontend.git
   cd todo-frontend
   ```

2. Instalar dependencias  
   ```bash
   pnpm install
   ```

3. Ejecutar en modo desarrollo  
   ```bash
   pnpm dev
   ```

4. Construir para producción  
   ```bash
   pnpm build
   ```

---

## 🎯 Uso

- Crear, editar y eliminar tareas  
- Marcar tareas como completadas  
- Filtrar tareas según estado (pendientes / completadas)  
- En la rama `todo`, las tareas se guardan y se leen desde la API real  

---

## 🧪 Testing con Cypress

1. Instalar Cypress (si no está incluido en dependencias)  
   ```bash
   pnpm add -D cypress
   ```

2. Ejecutar tests  
   ```bash
   npx cypress open
   ```  

> Los tests se encuentran en la rama `testeo` y sirven para practicar testing automatizado de componentes y funcionalidades.

---

## 🧑‍💻 Autor

**Alexis Escobar**  
Desarrollador FrontEnd Junior apasionado por el aprendizaje y la mejora continua.  
📬 LinkedIn: [https://www.linkedin.com/in/alexis-escobar-95b491184/](https://www.linkedin.com/in/alexis-escobar-95b491184/)  
🔗 Portafolio: [https://github.com/alexidev23](https://github.com/alexidev23)

---

## 📌 Contacto / Soporte

¿Encontraste un bug o querés sugerir mejoras?  
Abrí un issue en este repositorio o contactame directamente.