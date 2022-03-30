const button = document.querySelector("button");
const prezdivka = document.querySelector("h2");

const samohlasky = ["a", "e", "i", "o", "u"];
const souhlasky = [
  "h",
  "k",
  "r",
  "d",
  "t",
  "n",
  "j",
  "c",
  "b",
  "f",
  "l",
  "m",
  "p",
  "s",
  "v",
  "z",
];
const cisla = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

button.onclick = () => {
  let nahodne_cislo = Math.floor(Math.random() * 16);
  const pismeno1 = souhlasky[nahodne_cislo];
  nahodne_cislo = Math.floor(Math.random() * 5);
  const pismeno2 = samohlasky[nahodne_cislo];
  nahodne_cislo = Math.floor(Math.random() * 16);
  const pismeno3 = souhlasky[nahodne_cislo];
  nahodne_cislo = Math.floor(Math.random() * 5);
  const pismeno4 = samohlasky[nahodne_cislo];
  nahodne_cislo = Math.floor(Math.random() * 16);
  const pismeno5 = souhlasky[nahodne_cislo];
  nahodne_cislo = Math.floor(Math.random() * 9);
  const cislo1 = cisla[nahodne_cislo];
  nahodne_cislo = Math.floor(Math.random() * 9);
  const cislo2 = cisla[nahodne_cislo];
  nahodne_cislo = Math.floor(Math.random() * 9);
  const cislo3 = cisla[nahodne_cislo];
  
  prezdivka.textContent = pismeno1.toUpperCase()+pismeno2+pismeno3+pismeno4+pismeno5+"_"+cislo1+cislo2+cislo3;
};
