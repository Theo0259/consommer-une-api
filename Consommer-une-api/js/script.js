// const descDiv = document.getElementById("desc");
// descDiv.classList.add("hidden");
// descDiv.style.pointerEvents = "none";

// const handleClickOutside = (event) => {
//   if (!event.target.closest(".card") && event.target !== descDiv) {
//     closeDescDiv();
//   }
// };

// const closeDescDiv = () => {
//   descDiv.classList.add("hidden");
//   descDiv.style.pointerEvents = "none";
// };

// const openDescDiv = (user) => {
//   descDiv.innerHTML = `
//     <h2>${user.first_name} ${user.last_name}</h2>
//     <img src="${user.avatar}" alt="Avatar">
//     <p class="email">${user.email}</p>
//     <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//   `;

//   descDiv.classList.remove("hidden");
//   descDiv.style.pointerEvents = "auto";
// };

// document.addEventListener("click", handleClickOutside);

// async function fetchData() {
//   try {
//     const nb = 12;
//     const url = `https://reqres.in/api/users?per_page=${nb}`;
//     const response = await fetch(url, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(
//         "Une erreur s'est produite lors de la récupération des données."
//       );
//     }

//     const data = await response.json();
//     const rootDiv = document.getElementById("root");

//     data.data.forEach((user) => {
//       const userInfoDiv = document.createElement("div");
//       userInfoDiv.classList.add("card");
//       userInfoDiv.innerHTML = `
//         <p class="name">${user.first_name} ${user.last_name}</p>
//         <img src="${user.avatar}" alt="Avatar">
//         <p class="email">${user.email}</p>
//       `;

//       userInfoDiv.addEventListener("click", () => {
//         openDescDiv(user);
//       });

//       rootDiv.appendChild(userInfoDiv);
//     });
//   } catch (error) {
//     console.error(
//       "Une erreur s'est produite lors de la récupération des données:",
//       error
//     );
//   }
// }

// fetchData();

// Obtention de la référence à l'élément de description dans le HTML
const descDiv = document.getElementById("desc");
descDiv.classList.add("hidden");
descDiv.style.pointerEvents = "none";

// Fonction pour gérer la fermeture de la boîte de description
const closeDescDiv = () => {
  descDiv.classList.add("hidden");
  descDiv.style.pointerEvents = "none";
};

// Fonction pour afficher la boîte de description avec les détails de l'utilisateur
const openDescDiv = (user) => {
  descDiv.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img src="${user.avatar}" alt="Avatar">
    <p class="email">${user.email}</p>
    <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  `;

  descDiv.classList.remove("hidden");
  descDiv.style.pointerEvents = "auto";
};

// Gestionnaire d'événement pour fermer la boîte de description en cliquant à l'extérieur
const handleClickOutside = (event) => {
  if (!event.target.closest(".card") && event.target !== descDiv) {
    closeDescDiv();
  }
};

document.addEventListener("click", handleClickOutside);

// Fonction pour récupérer les données de l'API et afficher les cartes utilisateur
async function fetchData() {
  try {
    const nb = 12; // Nombre d'utilisateurs à récupérer
    const url = `https://reqres.in/api/users?per_page=${nb}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        "Une erreur s'est produite lors de la récupération des données."
      );
    }

    const data = await response.json();
    const rootDiv = document.getElementById("root");

    // Parcours des données des utilisateurs et création des cartes
    data.data.forEach((user) => {
      const userInfoDiv = document.createElement("div");
      userInfoDiv.classList.add("card");
      userInfoDiv.innerHTML = `
        <p class="name">${user.first_name} ${user.last_name}</p>
        <img src="${user.avatar}" alt="Avatar">
        <p class="email">${user.email}</p>
      `;

      // Ajout d'un gestionnaire d'événement pour afficher la description au clic
      userInfoDiv.addEventListener("click", () => {
        openDescDiv(user);
      });

      rootDiv.appendChild(userInfoDiv);
    });
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la récupération des données:",
      error
    );
  }
}

// Appel de la fonction fetchData pour démarrer le processus
fetchData();
