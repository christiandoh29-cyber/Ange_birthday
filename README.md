# Birthday Love Story

Une expérience web émotionnelle et cinématique pour l'anniversaire de votre épouse, inspirée par les présentations premium d'Apple.

## 🎯 Objectif

Créer une expérience web émotionnelle et cinématique pour l'anniversaire de votre épouse. Le projet ressemble à une présentation Apple premium avec animations fluides, slides fullscreen, storytelling romantique, musique douce et transitions élégantes.

## 🛠️ Stack Technique

- **Frontend**: React.js avec Vite
- **Animations**: Framer Motion et GSAP
- **Slider**: Swiper.js
- **Styling**: SCSS
- **Déploiement**: GitHub Pages

## 📁 Structure du Projet

```
src/
├── components/
│   ├── LoadingScreen.jsx
│   ├── HeroSection.jsx
│   ├── StoryTimeline.jsx
│   ├── GallerySection.jsx
│   ├── SpecialMessage.jsx
│   ├── RelationshipCounter.jsx
│   ├── FinalSection.jsx
│   └── MusicPlayer.jsx
├── pages/
├── assets/
│   ├── images/
│   ├── music/
│   └── videos/
├── styles/
├── data/
│   └── content.json
└── App.jsx
```

## 🚀 Installation et Développement

1. Clonez le dépôt :
```bash
git clone <repository-url>
cd birthday-love-story
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez votre navigateur à l'adresse indiquée (généralement http://localhost:5173)

## 📦 Construction pour la Production

Pour créer une version optimisée pour la production :
```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/`.

## 🌐 Déploiement sur GitHub Pages

1. Assurez-vous d'avoir configuré correctement le champ `homepage` dans le fichier `package.json` :
```json
"homepage": "https://yourusername.github.io/birthday-love-story"
```

2. Déployez sur GitHub Pages :
```bash
npm run deploy
```

## 🎨 Personnalisation

Toutes les données (textes, images, dates) sont configurables dans le fichier `src/data/content.json` :

```json
{
  "slides": [
    {
      "image": "/assets/images/photo1.webp",
      "title": "Le commencement",
      "description": "Le jour où tout a changé..."
    }
  ],
  "specialMessage": [
    "Merci d’être entrée dans ma vie...",
    "Tu rends chaque jour plus beau...",
    "Je t'aime plus que hier et moins que demain."
  ],
  "relationshipStartDate": "2020-05-15"
}
```

## ✨ Fonctionnalités

- Écran de chargement cinématique
- Section héros fullscreen avec titre animé
- Timeline interactive avec effet Ken Burns
- Galerie moderne style masonry
- Lettre d'amour animée qui s'écrit progressivement
- Compteur dynamique du temps passé ensemble
- Fin émotionnelle avec confettis et animations
- Lecteur de musique avec contrôle play/pause et volume
- Design responsive mobile-first
- Animations fluides et premium inspirées d'Apple

## 🎨 Thème et Couleurs

- **Arrière-plan**: #050505 (presque noir)
- **Primaire**: #d4af37 (or luxueux)
- **Secondaire**: #f7d9e3 (rose pâle)
- **Texte**: #f5f5f5 (blanc cassé)
- **Accent**: #8b5cf6 (violet)

## 📱 Responsive Design

Le site est conçu en mobile-first avec :
- Sections fullscreen
- Typographie responsive
- Support du swipe tactile
- Adaptation des grilles et espacements

## 🎵 Audio

- Musique douce en boucle
- Contrôle play/pause
- Réglage du volume
- Fade-in audio

## 🚀 Performance

- Chargement paresseux des images
- Optimisation des assets
- Utilisation du format WebP pour les images
- Animations fluides à 60fps

---

Créez avec ❤️ pour rendre chaque anniversaire inoubliable.