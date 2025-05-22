/*Kosár osztály annyi táblázatsort jelenit-e meg, ahány eleme van a listánknak? Az oldalon a név helyesen jelenik-e meg?*/

import Kosar from "../PUBLIC/Kosar.js";

function kosarMegjelenitTeszt() {
  const szElem = document.createElement("div");
  const lista = [
    {
      id: 0,
      nev: "Termék 1",
      ar: 1000,
      kep: "./kepek/placeholder.jpg",
      mennyiseg: 1,
      leiras: "Ez egy példa termék leírása.",
    },

    {
      id: 1,
      nev: "Termék 2",
      ar: 1300,
      kep: "./kepek/placeholder.jpg",
      mennyiseg: 1,
      leiras: "Ez egy példa termék leírása.",
    },
  ];
  const tesztKosar = new Kosar(lista, szElem);
  const sorLista = szElem.querySelectorAll("tr");
  console.log(sorLista);
  console.assert(
    sorLista.length === lista.length + 1,
    "Hiba, nem stimmel a tr tagek száma"
  );
  console.log("kosarMegjelenitTeszt lefutott");

  /* az első nem fejléces tr sor td tagjében jó név szerepel-e? */
  const tdNev = szElem.querySelector(
    "table tbody tr:nth-child(1) td:nth-child(2)"
  );
  console.log(tdNev, tdNev.innerHTML);
  console.assert(
    tdNev.innerHTML === lista[0].nev,
    "Hiba, nem megfelelő név jelenik meg"
  );
}

function kosarMennyisegNovelTeszt(){
  const szElem = document.createElement("div");
  const lista = [
    {
      id: 0,
      nev: "Termék 1",
      ar: 1000,
      kep: "./kepek/placeholder.jpg",
      mennyiseg: 1,
      leiras: "Ez egy példa termék leírása.",
    },

    {
      id: 1,
      nev: "Termék 2",
      ar: 1300,
      kep: "./kepek/placeholder.jpg",
      mennyiseg: 1,
      leiras: "Ez egy példa termék leírása.",
    },
  ];
  const tesztKosar = new Kosar(lista, szElem);
  const sorLista = szElem.querySelectorAll("tr");
}
//kosarMegjelenitTeszt();
