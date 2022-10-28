
function AfficherpanierAchat(){
    var commandeProduitsTblBody=document.getElementById("commandeProduitsTblBody");

    //Suppression de Rangées précédentes de la table de commandes
    while(commandeProduitsTblBody.rows.length>0) {
        commandeProduitsTblBody.deleteRow(0);
    }

    //Variable pour le prix total du Panier
    var panier_total_prix=0;

    //Itération pour la liste des objects
    for(var produit in PanierAchat){

        //Nouvelle Rangée
        var row=commandeProduitsTblBody.insertRow();

        //Créer 4 cellulles
        var cellid=row.insertCell(0)
        var cellNom = row.insertCell(1);
        var cellDescription = row.insertCell(2);
        var cellPrix = row.insertCell(3);
        cellPrix.align="right";

        //Remplir cellulle avec les valeurs de la commande actuelle.
        cellid.innerHTML = PanierAchat[id].id;
        cellNom.innerHTML = PanierAchat[produit].Nom;
        cellDescription.innerHTML = PanierAchat[produit].Description;
        cellPrix.innerHTML = PanierAchat[produit].Prix;
        panier_total_prix+=PanierAchat[produit].Prix;
    }

    //Remplir coût du Panier
    document.getElementById("panier_total").innerHTML=panier_total_prix;
}


function AjouterPanier(id,nom,description,prix){
    
    //Objet JavaScript contenant les propriétés:Nom,Description and Prix
 
    var uniqueProduit = {};
 
    //Remplissage de la Commande object avec données
    uniqueProduit.Id=id;
    uniqueProduit.Nom=nom;
    uniqueProduit.Description=description;
    uniqueProduit.Prix=prix;
 
    //Ajouter les nouvelles commandes au Panier.
    PanierAchat.push(uniqueProduit);
 
    //Aficher sur l'écran
    AfficherpanierAchat();
 
 }
 
 function RetirerPanier(id,nom,description,prix){

    //Objet JavaScript contenant les propriétés:id,Nom,Description and Prix
 
    var uniqueProduit = {};
 
    //Remplissage de la Commande object avec données
    uniqueProduit.Id=id;
    uniqueProduit.Nom=nom;
    uniqueProduit.Description=description;
    uniqueProduit.Prix=prix;
 
    //Ajouter les nouvelles commandes au Panier.
    PanierAchat.pop(uniqueProduit);
 
    //Aficher sur l'écran
    AfficherpanierAchat();
 
 }