# liveco

> Projet de _live coding_ pour apprendre les bases de **React** : les composants, les `props` et la réutilisabilité.

Construit avec **React 19**, **TypeScript** et **Vite**.

---

## 🎯 Objectif pédagogique

Ce dépôt sert de support à une session de formation. Il illustre pas à pas :

- la création d'un **composant fonctionnel** (`Hello`) ;
- le passage de données via les **`props`** ;
- les **props optionnelles** (`age?`) et les **props booléennes** (`isTrainer`) ;
- la **réutilisation** d'un même composant avec des valeurs différentes ;
- deux façons de lire les props : la **notation pointée** vs. la **déstructuration**.

---

## 🧩 Les deux versions du composant `Hello`

| Fichier | Approche | Extrait |
| --- | --- | --- |
| `src/components/Hello.tsx` | Notation pointée | `props.name`, `props.isTrainer` |
| `src/components/Hello.destructure.tsx` | Déstructuration | `function Hello({ name, isTrainer, age })` |

Le contrat de props est identique dans les deux cas :

```ts
interface HelloProps {
  name: string;
  isTrainer: boolean;
  age?: number; // le "?" rend la prop optionnelle
}
```

### Utilisation dans `App.tsx`

```tsx
<Hello name="Anthony" age={34} isTrainer />
<Hello name="Geoffroy" isTrainer={false} />
<Hello name="Nicolas" isTrainer={false} />
<Hello name="toto" isTrainer={false} />
```

> `isTrainer` (sans valeur) est un raccourci pour `isTrainer={true}`.

---

## 🚀 Démarrage

Prérequis : **Node.js 20+** et **npm**.

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement (avec HMR)
npm run dev
```

L'application est disponible sur <http://localhost:5173>.

---

## 📜 Scripts disponibles

| Commande | Description |
| --- | --- |
| `npm run dev` | Serveur de développement Vite avec rechargement à chaud |
| `npm run build` | Vérification des types (`tsc -b`) puis build de production |
| `npm run preview` | Prévisualise le build de production en local |
| `npm run lint` | Analyse le code avec ESLint |

---

## 📁 Structure du projet

```
liveco/
├── public/              # Assets statiques servis tels quels
├── src/
│   ├── assets/          # Images importées dans le code
│   ├── components/
│   │   ├── Hello.tsx                  # Version "notation pointée"
│   │   └── Hello.destructure.tsx      # Version "déstructuration"
│   ├── App.tsx          # Compose plusieurs <Hello />
│   ├── main.tsx         # Point d'entrée React (createRoot)
│   ├── App.css
│   └── index.css
├── index.html
├── vite.config.ts
└── tsconfig*.json
```

---

## 🛠️ Stack technique

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) + [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)
- [ESLint](https://eslint.org/) avec `typescript-eslint` et les règles React Hooks
