const boite_dialog = document.getElementById("boite_dialog");
const boutton_ajouter = document.getElementById("btn_ajouter");
const confirmBtn = boite_dialog.querySelector("#confirmBtn");
const selectEl = boite_dialog.querySelector("select");
const outputBox = boite_dialog.querySelector("output");
const cancelBtn = boite_dialog.querySelector("#cancelBtn")

boutton_ajouter.addEventListener("click", () => {
  boite_dialog.showModal();
});

selectEl.addEventListener("change", (e) => {
    let selectionner = selectEl.value;
  confirmBtn.value = selectionner;
});

boite_dialog.addEventListener("close", (e) => {
  outputBox.value =
    boite_dialog.returnValue === "default"
      ? "Pas de valeur retournée."
      : `Valeur retournée : ${boite_dialog.returnValue}.`; // Vérifie la présence de "default" au lieu d'une chaîne vide
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Nous ne voulons pas soumettre ce faux formulaire
  boite_dialog.close(selectEl.value); // Il faut envoyer la valeur du sélecteur ici.
});

cancelBtn.addEventListener("click",() => {
  boite_dialog.returnValue === "default";
  boite_dialog.close();
})

