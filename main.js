import { PRODUCTS } from "./data/products.js";
PRODUCTS.forEach(p => console.log(p));

PRODUCTS.forEach((p) => console.log(p.name));




import { isExpired } from "./utils/date.js";

const expired = PRODUCTS.filter(p => isExpired(p.expiryDate));
console.log("Produits expirés :", expired);

const total = PRODUCTS.reduce(
  (somme, p) => somme + p.price * p.quantity,
  0
);
console.log("Valeur totale du stock :", total, "MAD");


const promo = PRODUCTS.filter(p => p.tags.includes("promo"));
console.log("Produits en promo :", promo.map(p => p.name));

const sorted = [...PRODUCTS].sort((a, b) => a.price - b.price);
console.log("Tri par prix croissant :", sorted.map(p => p.name));


const delay = (ms) => new Promise(res => setTimeout(res, ms));

const addProduct = async (list, newP) => {
  await delay(300);
  const id = Math.max(...list.map(p => p.id)) + 1;
  return [...list, { id, ...newP }];
};

const newList = await addProduct(PRODUCTS, {
  name: "Savon",
  category: "Hygiène",
  price: 5,
  quantity: 10,
  expiryDate: "2026-01-01",
  tags: ["hygiene"]
});

console.log("Après ajout :", newList.length, "produits");