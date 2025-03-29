interface FrameworkExample {
    title: string;
    description: string;
    withFramework: string;
    withoutFramework: string;
  }
  
  interface FrameworkExamples {
    [key: string]: FrameworkExample;
  }
  
  export const frameworkComparisons: FrameworkExamples = {
    example1: {
      title: "Routing et Navigation",
      description: "Comparaison entre la gestion des routes avec et sans framework",
      withFramework: `// Avec Next.js
// app/blog/[slug]/page.tsx
export default function BlogPost({ params }) {
  return <h1>Article: {params.slug}</h1>
}

// Navigation automatique
<Link href="/blog/mon-article">
  Lire l'article
</Link>`,
      withoutFramework: `// Sans framework
// Création manuelle du routeur
const router = {
  routes: {},
  add(path, handler) {
    this.routes[path] = handler;
  },
  handle(path) {
    const handler = this.routes[path];
    if (handler) handler();
  }
};

// Gestion manuelle des paramètres
const path = window.location.pathname;
const slug = path.split('/')[2];
document.querySelector('#content').innerHTML = \`
  <h1>Article: \${slug}</h1>
\`;`
    },
    example2: {
      title: "Rendu côté serveur",
      description: "Comparaison du rendu côté serveur avec et sans framework",
      withFramework: `// Avec Next.js
// app/products/page.tsx
export default async function Products() {
  const products = await fetch('https://api.example.com/products')
    .then(r => r.json());
  
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}€</p>
        </div>
      ))}
    </div>
  );
}`,
      withoutFramework: `// Sans framework
// Backend Express
app.get('/products', async (req, res) => {
  const products = await db.products.find();
  res.send(\`
    <!DOCTYPE html>
    <html>
      <body>
        <div id="products">
          \${products.map(p => \`
            <div>
              <h2>\${p.name}</h2>
              <p>\${p.price}€</p>
            </div>
          \`).join('')}
        </div>
      </body>
    </html>
  \`);
});`
    },
    example3: {
      title: "Optimisation des performances",
      description: "Comparaison des optimisations de performance avec et sans framework",
      withFramework: `// Avec Next.js
// Optimisations automatiques
import Image from 'next/image'

export default function Gallery() {
  return (
    <Image
      src="/photo.jpg"
      alt="Photo"
      width={800}
      height={600}
      placeholder="blur"
      quality={75}
      priority={true}
    />
  )
}`,
      withoutFramework: `// Sans framework
// Optimisations manuelles
const img = document.createElement('img');
img.src = '/photo.jpg';
img.alt = 'Photo';
img.width = 800;
img.height = 600;

// Optimisation manuelle des images
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
ctx.drawImage(img, 0, 0, 800, 600);
const optimizedSrc = canvas.toDataURL('image/jpeg', 0.75);`
    },
    example4: {
      title: "Gestion des états et des données",
      description: "Comparaison de la gestion des états et des données avec et sans framework",
      withFramework: `// Avec Next.js
// app/cart/page.tsx
'use client';
import { useState } from 'react';

export default function Cart() {
  const [items, setItems] = useState([]);
  
  const addItem = (product) => {
    setItems(prev => [...prev, product]);
  };
  
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price}€</p>
        </div>
      ))}
    </div>
  );
}`,
      withoutFramework: `// Sans framework
// Gestion manuelle de l'état
let cartItems = [];

function addToCart(product) {
  cartItems.push(product);
  updateCartUI();
}

function updateCartUI() {
  const cartEl = document.querySelector('#cart');
  cartEl.innerHTML = cartItems.map(item => \`
    <div>
      <h3>\${item.name}</h3>
      <p>\${item.price}€</p>
    </div>
  \`).join('');
}`
    }
  };
  
  export default frameworkComparisons;