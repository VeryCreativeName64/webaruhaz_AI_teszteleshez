import Controller from "../PUBLIC/Controller.js";
import Model from "../PUBLIC/Model.js";


function mennyisegNovelTeszt(){
    const container = document.querySelector(".container");
    const model = new Model();

    container.innerHTML = ""; 
    const cont = new Controller(container, "termek", model);

    const termek = {
        id: 1,
        nev: "Termék 2",
        ar: 1300,
        kep: "./kepek/placeholder.jpg",
        leiras: "Ez egy példa termék leírása.",
    };

    
    model.addKosar(termek);

    
    const eredeti = model.getKosarLista().find(t => t.id === termek.id);
    const eredetiMennyiseg = eredeti ? eredeti.mennyiseg : 0;

    
    model.increaseQuantity(termek.id);

    
    const aktualis = model.getKosarLista().find(t => t.id === termek.id);
    const vart = eredetiMennyiseg + 1;


    console.assert(
        aktualis.mennyiseg === vart,
        `HIBA: A termék mennyisége nem ${vart}, hanem ${aktualis.mennyiseg}`
    );
    console.log("kapott:", (aktualis.mennyiseg), "várt:", vart)
    console.log("mennyisegNovelTeszt lefutott");
}


mennyisegNovelTeszt()