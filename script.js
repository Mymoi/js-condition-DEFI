// Exercice DEFI : cours Initiation Javascript - Condition 

// Déclaration des variables avec les données du formulaire
const el = document.getElementById('register-form')
el.addEventListener('submit', (event) =>{
  event.preventDefault()

  let civility = event.target.female.checked ? 'female' : 'male'
  let name = event.target.name.value
  let category = event.target.category.value
  let newsletter = event.target.newsletter.checked //? 'Merci de vous être abonné à notre newsletter' : 'Inscrivez-vous vitre à notre newsletter'

  let myCivility = civility ? "Madame" : "Monsieur"
  let myName = name.toUpperCase()
  let myCategory
  let myNewsletter

  switch (category) {
    case "cold-starter":
      myCategory = "Entrée froide";
      break;

    case "soup":
      myCategory = "Soupe";
      break;

    case "main-course":
        myCategory = "Plat";
        break;
    
    case "fruit-dessert":
      myCategory = "Dessert (fruit)";
      break;

    case "chocolate-dessert":
      myCategory = "Dessert (chocolat)";
      break;

    default:
      myCategory = "Aucune catégorie";
      break;
  } 


  if (newsletter) {
    myNewsletter = "Merci de vous être abonné à notre newsletter"
    alert(`Bonjour ${myCivility} ${myName}. ${myNewsletter}, \n elle permettra de vous envoyer de délicieuses recettes de votre catégorie préférée, ${myCategory} `)
    }
    else {
    myNewsletter = "Inscrivez-vous vitre à notre newsletter"
    alert(`Bonjour ${myCivility} ${myName}. ${myNewsletter}, \n elle permettra de vous envoyer de délicieuses recettes de votre catégorie préférée, ${myCategory} `)
    }
 })


