import Model from "../PUBLIC/Model.js";

function addKosarTeszt_AzAdottTermekMegNemSzerepelAKosarban() {
  const modell = new Model();
  const termek = {
    id: 1,
    nev: "Termék 2",
    ar: 1300,
    kep: "./kepek/placeholder.jpg",
    leiras: "Ez egy példa termék leírása.",
  };
  modell.addKosar(termek);
  termek.mennyiseg = 1;
  const kosarbanLevoTermek = modell.getKosarLista()[0];
  console.assert(
    JSON.stringify(termek) === JSON.stringify(kosarbanLevoTermek),
    termek,
    kosarbanLevoTermek,
    "hiba az addKosarTeszt_AzAdottTermekMegNemSzerepelAKosarban-ben"
  );
  console.log("addKosarTeszt_AzAdottTermekMegNemSzerepelAKosarban lefutott");
}

function addKosarTeszt_AzAdottTermekMarSzerepelAKosarban() {
  const modell = new Model();
  const termek = {
    id: 1,
    nev: "Termék 2",
    ar: 1300,
    kep: "./kepek/placeholder.jpg",
    leiras: "Ez egy példa termék leírása.",
  };
  modell.addKosar(termek);
  modell.addKosar(termek);
  termek.mennyiseg = 2;
  const kosarbanLevoTermek = modell.getKosarLista()[0];
  console.assert(
    modell.getKosarLista().length == 1,
    "a kosárba többször is bekerült"
  );
  console.assert(
    JSON.stringify(termek) === JSON.stringify(kosarbanLevoTermek),
    termek,
    kosarbanLevoTermek,
    "hiba az addKosarTeszt_AzAdottTermekMarSzerepelAKosarban-ben"
  );
  console.log("addKosarTeszt_AzAdottTermekMarSzerepelAKosarban lefutott");
}

function removeKosarItemTeszt() {
  const modell = new Model();
  const termek = {
    id: 1,
    nev: "Termék 2",
    ar: 1300,
    kep: "./kepek/placeholder.jpg",
    leiras: "Ez egy példa termék leírása.",
  };
  modell.addKosar(termek);
  modell.removeKosarItem(1);
  console.assert(
    modell.getKosarLista().length === 0,
    "hiba a removeKosarItemTeszt-ben"
  );
  console.log("removeKosarItemTeszt lefutott");
}

function increaseQuantityTeszt() {
  const model = new Model();

  const termek =   {
    id: 0,
    nev: "Termék 1",
    ar: 1000,
    kep: "./kepek/placeholder.jpg",
    leiras: "Ez egy példa termék leírása.",
  }

  model.addKosar(termek);
  
  model.increaseQuantity(0); 
  

  const mennyisege = model.getKosarLista().find((t) => t.id === 0)?.mennyisege;

  console.assert(
    mennyisege === 2,
    `❌ Hibás mennyiség! Várt: 2, Kapott: ${mennyisege}`
  );
}

function decreaseQuantityTeszt() {
  const model = new Model();

  const termek =   {
    id: 0,
    nev: "Termék 1",
    ar: 1000,
    kep: "./kepek/placeholder.jpg",
    leiras: "Ez egy példa termék leírása.",
  }

  model.addKosar(termek);
  model.addKosar(termek);
  model.decreaseQuantity(0); 
  

  const mennyisege = model.getKosarLista().find((t) => t.id === 0)?.mennyisege;

  console.assert(
    mennyisege === 1,
    `❌ Hibás mennyiség! Várt: 2, Kapott: ${mennyisege}`
  );
}

//addKosarTeszt_AzAdottTermekMegNemSzerepelAKosarban()
//addKosarTeszt_AzAdottTermekMarSzerepelAKosarban()
//removeKosarItemTeszt()
increaseQuantityTeszt();
decreaseQuantityTeszt();