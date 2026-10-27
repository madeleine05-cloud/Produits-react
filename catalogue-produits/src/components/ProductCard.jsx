import { formaterPrix, prixRemise } from "../utils/format";

function ProductCard({ nom, categorie, prix, stock, promo = 0, vedette = false }) {
  const enPromo = promo > 0;
  const rupture = stock === 0;
  const stockFaible = stock >= 1 && stock <= 5;

  return (
    <article className={vedette ? "card vedette" : "card"}>
      <span className="badge-cat">{categorie}</span>
      <h3>{nom}</h3>

      <div className="prix">
        {enPromo ? (
          <>
            <del className="ancien-prix">{formaterPrix(prix)}</del>
            <div className="prix-ligne">
              <strong>{formaterPrix(prixRemise(prix, promo))}</strong>
              <span className="badge-promo">-{promo} %</span>
            </div>
          </>
        ) : (
          <strong>{formaterPrix(prix)}</strong>
        )}
      </div>

      {rupture && <p className="stock rupture">Rupture de stock</p>}
      {stockFaible && <p className="stock faible">Plus que {stock} en stock</p>}

      <button disabled={rupture}>Ajouter au panier</button>
    </article>
  );
}

export default ProductCard;