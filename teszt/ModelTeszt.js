import Model from "../PUBLIC/Model.js";

function addKosarTeszt_AzAdottTermekMegNemSzerepelAKosarban(){
    /*
    kell egy termék
    példányosítani kell a modelt
    meg kell hívni a model metódusát
    meg kell nézni, mi lett a kosár tartalma
    */
   const modell=new Model();
   const termek={
    id: 1,
    nev: "Termék 2",
    ar: 1300,
    kep: "./kepek/placeholder.jpg",
    leiras: "Ez egy példa termék leírása.",
   }
    modell.addKosar(termek)
    termek.mennyiseg=1;
    const kosarbanLevoTermek=modell.getKosarLista()[0]
    console.assert(JSON.stringify(termek)===JSON.stringify(kosarbanLevoTermek), termek,kosarbanLevoTermek, "hiba az addKosarTeszt_AzAdottTermekMegNemSzerepelAKosarban-ben")
    console.log("addKosarTeszt_AzAdottTermekMegNemSzerepelAKosarban lefutott")
    
}

function addKosarTeszt_AzAdottTermekMarSzerepelAKosarban(){
    const modell=new Model();
    const termek={
     id: 1,
     nev: "Termék 2",
     ar: 1300,
     kep: "./kepek/placeholder.jpg",
     leiras: "Ez egy példa termék leírása.",
    }
    modell.addKosar(termek)
    modell.addKosar(termek)
    termek.mennyiseg=2;
    const kosarbanLevoTermek=modell.getKosarLista()[0]
    console.assert(JSON.stringify(termek)===JSON.stringify(kosarbanLevoTermek), termek,kosarbanLevoTermek, "hiba az addKosarTeszt_AzAdottTermekMarSzerepelAKosarban-ben")
    console.log("addKosarTeszt_AzAdottTermekMarSzerepelAKosarban lefutott")
}
//addKosarTeszt_AzAdottTermekMegNemSzerepelAKosarban()
addKosarTeszt_AzAdottTermekMarSzerepelAKosarban()
