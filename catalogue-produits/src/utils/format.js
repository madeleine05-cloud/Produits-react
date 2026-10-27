
export function formaterPrix(montant) {
  return montant.toLocaleString('fr-FR') + ' FCFA';
}

export function prixRemise(prix, pourcentage) {
  return Math.round(prix - (prix * pourcentage / 100));
}
