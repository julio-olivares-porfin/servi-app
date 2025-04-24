# 🛠️ Servi

**Servi** es un marketplace de servicios de remodelación y mejoramiento del hogar. Su propósito es conectar personas que ofrecen servicios como gasfitería, carpintería, electricidad, entre otros, con quienes necesitan resolver tareas domésticas o profesionales de forma rápida, segura y eficiente.

## ✨ Características

- Registro y autenticación de usuarios
- Creación de perfiles de prestadores de servicios
- Publicación y visualización de ofertas de servicios
- Sistema de categorías y filtrado
- Interfaz intuitiva y responsiva
- Backend robusto con base de datos relacional

## 🧰 Tecnologías utilizadas

- **Frontend**: React JS, Vite, CSS puro
- **Backend**: Node.js, Express
- **Base de datos**: PostgreSQL
- **Herramientas**: Thunderclient (testing), Git, GitHub

## 🚀 Instalación local

1. Clona este repositorio:
   ```bash
   git clone https://github.com/julio-olivares-porfin/servi.git
   cd servi
   ```

2. Instala las dependencias del frontend:
   ```bash
   cd client
   npm install
   ```

3. Instala las dependencias del backend:
   ```bash
   cd ../server
   npm install
   ```

4. Crea un archivo `.env` en la carpeta `server` con las siguientes variables de entorno:
   ```env
   DATABASE_URL=postgres://usuario:contraseña@localhost:5432/servi
   PORT=3001
   ```

5. Corre ambos servidores:
   - Backend:
     ```bash
     cd server
     npm run dev
     ```
   - Frontend (en otra terminal):
     ```bash
     cd client
     npm run dev
     ```

## 📌 Estado del proyecto

✅ Proyecto finalizado como entrega académica  
🏆 Nota obtenida: **10.0**  
💡 En evaluación para versión en producción

## 👨‍💻 Autor

Desarrollado por **Julio Olivares**  
[LinkedIn](https://www.linkedin.com/in/julio-olivares-b841571b/)  
[Instagram](https://instagram.com/julius_)
