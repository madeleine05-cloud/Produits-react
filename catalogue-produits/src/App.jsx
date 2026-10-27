import { produits } from "./data/produits";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const tries = [...produits].sort((a, b) => a.prix - b.prix);
  const nbPromos = produits.filter((p) => p.promo > 0).length;
  const moinsCher = tries[0];

  const categories = [...new Set(produits.map((p) => p.categorie))];

  return (
    <main className="page">
      <h1>Catalogue de produits</h1>

      <div className="stats">
        <p><strong>{produits.length}</strong> produits</p>
        <p><strong>{nbPromos}</strong> en promotion</p>
        <p>Le moins cher : <strong>{moinsCher.nom}</strong></p>
        <p>Catégories : {categories.join(" · ")}</p>
      </div>

      <section className="grille">
        {tries.map((p) => (
          <ProductCard
            key={p.id}
            nom={p.nom}
            categorie={p.categorie}
            prix={p.prix}
            stock={p.stock}
            promo={p.promo}
            vedette={p.id === moinsCher.id}
          />
        ))}
      </section>
    </main>
  );
}

export default App;