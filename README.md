# AuthModule - Système d'Authentification

Système d'authentification complet construire avec **NestJS** (backend) et **Next.js** (frontend), containerisé avec Docker.

## 🏗️ Architecture

Le module suit une architecture hexagonale/clean code avec :

- **Use Cases** : logique métier isolée (RegisterUserUseCase, LoginUserUseCase)
- **Value Objects** : validation des données (LoginCredentialVo, RegisterCredentialVo)
- **Factories** : création des objets de valeur (LoginCredentialFactory, RegisterCredentialFactory)
- **DTOs** : contrats d'échange (LoginCredentialsDTO, RegisterUserCredentialsDTO)
- **Gestion spécialisée** : hachage de mots de passe et gestion de sessions

## 🚀 Stack Technique

- **Backend** : NestJS
- **Frontend** : Next.js
- **Base de données** : Mock (données en mémoire)
- **Containerisation** : Docker & Docker Compose
- **Authentification** : JWT (SessionManagement)
- **Sécurité** : Hachage bcrypt (PasswordManagement)

## 📋 Prérequis

- Docker & Docker Compose
- Node.js 18+ (développement local)
- npm ou yarn

## 🐳 Démarrage Rapide

### Avec Docker Compose

```bash
# Démarrer tous les services
docker-compose up -d

# Accéder à l'application
# Frontend : http://localhost:3000
# Backend API : http://localhost:3001
```

### Développement Local

#### Backend (NestJS)

```bash
cd backend
npm install
npm run start:dev
# API disponible sur http://localhost:3001
```

#### Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
# Application disponible sur http://localhost:3000
```

## 📦 Structure du Projet

```
.
├── backend/
│   ├── src/
│   │   ├── auth/
│   │   │   ├── use-cases/
│   │   │   │   ├── register-user.use-case.ts
│   │   │   │   └── login-user.use-case.ts
│   │   │   ├── value-objects/
│   │   │   │   ├── login-credential.vo.ts
│   │   │   │   └── register-credential.vo.ts
│   │   │   ├── factories/
│   │   │   │   ├── login-credential.factory.ts
│   │   │   │   └── register-credential.factory.ts
│   │   │   ├── dtos/
│   │   │   │   ├── login-credentials.dto.ts
│   │   │   │   └── register-user-credentials.dto.ts
│   │   │   ├── services/
│   │   │   │   ├── password-management.service.ts
│   │   │   │   └── session-management.service.ts
│   │   │   ├── models/
│   │   │   │   └── user.model.ts
│   │   │   └── auth.controller.ts
│   │   └── main.ts
│   ├── docker/
│   │   └── Dockerfile
│   ├── docker-compose.yml
│   └── package.json
├── frontend/
│   ├── app/
│   │   ├── login/
│   │   ├── register/
│   │   └── layout.tsx
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   │   └── api-client.ts
│   ├── Dockerfile
│   └── package.json
└── docker-compose.yml
```

## 🔐 Endpoints API

### Inscription

```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "username": "john_doe",
  "firstname": "John",
  "lastname": "Doe",
  "password": "SecurePassword123!"
}

Response:
{
  "id": "uuid",
  "email": "user@example.com",
  "username": "john_doe",
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

### Connexion

```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePassword123!"
}

Response:
{
  "id": "uuid",
  "email": "user@example.com",
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

## 🎯 Fonctionnalités Principales

- ✅ Enregistrement utilisateur avec validation
- ✅ Connexion avec hachage de mot de passe sécurisé (bcrypt)
- ✅ Génération de JWT pour les sessions
- ✅ Données mockées (stockage en mémoire)
- ✅ Architecture clean code avec séparation des responsabilités
- ✅ Containerisation complète

## 🔑 Variables d'Environnement

### Backend (.env)

```env
PORT=3001
JWT_SECRET=your_secret_key_here
BCRYPT_ROUNDS=10
NODE_ENV=development
```

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 🛠️ Développement

### Ajouter une Nouvelle Fonctionnalité

1. **Créer le DTO** dans `dtos/`
2. **Créer le Value Object** dans `value-objects/` avec la validation
3. **Créer la Factory** dans `factories/`
4. **Implémenter l'Use Case** dans `use-cases/`
5. **Ajouter l'endpoint** dans `auth.controller.ts`

### Tests

```bash
# Backend
cd backend
npm run test
npm run test:cov

# Frontend
cd frontend
npm run test
```

## 📝 Logs

Visualiser les logs en temps réel :

```bash
docker-compose logs -f backend
docker-compose logs -f frontend
```

## 🐛 Dépannage

### Les services ne démarrent pas

```bash
# Nettoyer les conteneurs
docker-compose down -v

# Reconstruire et redémarrer
docker-compose up -d --build
```

### Erreur de connexion CORS

Vérifier que `NEXT_PUBLIC_API_URL` pointe vers le bon endpoint dans le frontend.

### Token JWT invalide

Vérifier que `JWT_SECRET` est défini dans les variables d'environnement du backend.

## 📚 Ressources

- [NestJS Documentation](https://docs.nestjs.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [JWT.io](https://jwt.io)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)

## 📄 Licence

code privé

---

**Note** : Les données utilisateur sont actuellement stockées en mémoire. Pour la production.