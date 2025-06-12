# Imagen base oficial de Node.js (usa la versión que uses tú)
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias (usa npm o yarn)
RUN npm install --production

# Copiar el resto del código
COPY . .

# Exponer el puerto (ajústalo si tu app usa otro)
EXPOSE 3000

# Comando para iniciar la app
CMD ["node", "index.js"]
