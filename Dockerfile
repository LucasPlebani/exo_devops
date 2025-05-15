# Image de base
FROM node:17

# Dossier de travail dans le conteneur
WORKDIR /app

# Copier les fichiers
COPY package*.json ./
RUN npm install
COPY . .

# Exposer le port de l'app
EXPOSE 3000

# Commande de lancement
CMD ["npm", "start"]
