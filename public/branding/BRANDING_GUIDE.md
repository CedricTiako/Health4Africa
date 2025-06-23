# 🌍 DigiHealth4Africa - Branding Guide

## 🎨 Palette de Couleurs

### Couleurs Principales
- **Bleu Foncé**: `#1B1464` (Primary)
- **Or**: `#F4A300` (Secondary)
- **Vert**: `#2E8B57` (Accent)

### Couleurs de Support
- **Bleu Nuit**: `#0A0A2A` (Dark)
- **Blanc Cassé**: `#F8F5F0` (Light)
- **Rouge Terre**: `#B22222`
- **Brun Terre**: `#8B4513`
- **Or Clair**: `#FFD700`

## 🌈 Dégradés

```css
/* Primary Gradient */
background: linear-gradient(135deg, #1B1464 0%, #4A3A8C 100%);

/* Secondary Gradient */
background: linear-gradient(135deg, #F4A300 0%, #FFD700 100%);

/* Accent Gradient */
background: linear-gradient(135deg, #2E8B57 0%, #3CB371 100%);
```

## 🎭 Motifs Africains

### 1. Kente (african-pattern-1)
Motif géométrique inspiré des tissus Kente ghanéens.
```css
.african-pattern-1 {
  background-color: var(--color-primary);
  background-image: 
    linear-gradient(90deg, var(--color-secondary) 1px, transparent 1px),
    linear-gradient(0deg, var(--color-secondary) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-secondary) 1px, transparent 1px),
    linear-gradient(0deg, var(--color-secondary) 1px, transparent 1px);
  background-size: 20px 20px, 20px 20px, 40px 40px, 40px 40px;
}
```

### 2. Bogolan (african-pattern-2)
Motif inspiré des teintures traditionnelles maliennes.
```css
.african-pattern-2 {
  background-color: var(--color-light);
  background-image: 
    linear-gradient(45deg, var(--color-dark) 25%, transparent 25%),
    linear-gradient(-45deg, var(--color-dark) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--color-dark) 75%),
    linear-gradient(-45deg, transparent 75%, var(--color-dark) 75%);
  background-size: 40px 40px;
}
```

### 3. Adinkra (african-pattern-3)
Motif inspiré des symboles Adinkra d'Afrique de l'Ouest.
```css
.african-pattern-3 {
  background-color: var(--color-light);
  background-image: 
    radial-gradient(circle at 30% 30%, var(--color-primary) 2px, transparent 2px),
    radial-gradient(circle at 70% 70%, var(--color-secondary) 2px, transparent 2px),
    radial-gradient(circle at 30% 70%, var(--color-accent) 2px, transparent 2px),
    radial-gradient(circle at 70% 30%, var(--color-red) 2px, transparent 2px);
  background-size: 80px 80px;
}
```

## 🖋️ Typographie

### Police Principale
- **Inter** (Sans-serif)
- Utilisation : Corps de texte, boutons, navigation

### Police d'Accent
- **Space Grotesk** (Sans-serif)
- Utilisation : Titres, éléments importants

## 🎨 Composants UI

### Boutons
```html
<button class="btn-african px-6 py-3 rounded-lg font-medium">
  En savoir plus
</button>
```

### Cartes
```html
<div class="card-african rounded-xl p-6 bg-white">
  <h3 class="text-xl font-bold mb-2">Titre de la carte</h3>
  <p>Contenu de la carte avec une touche africaine moderne.</p>
</div>
```

## 🌓 Mode Sombre

Le site supporte automatiquement le mode sombre avec des couleurs adaptées pour une expérience confortable en toutes circonstances.

## 📱 Responsive Design

Tous les éléments sont conçus pour s'adapter parfaitement à tous les appareils, des mobiles aux grands écrans.

## 📦 Assets

Les ressources graphiques sont disponibles dans le dossier `public/branding/assets/` :
- Logos (SVG, PNG)
- Motifs réutilisables (SVG)
- Icônes personnalisées

## 🔗 Liens Utiles
- [Adobe Color - Palette](https://color.adobe.com/fr/create/color-wheel)
- [Google Fonts](https://fonts.google.com/)
- [Hero Patterns](https://heropatterns.com/)

---
*Dernière mise à jour : Juin 2024*
