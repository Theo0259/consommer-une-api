document.addEventListener('DOMContentLoaded', () => {
  const descDiv = document.getElementById('desc');
  descDiv.classList.add('hidden');
  descDiv.style.pointerEvents = 'none';

  // Ajoutez un écouteur d'événement de clic au niveau du document
  document.addEventListener('click', (event) => {
    // Vérifiez si le clic s'est produit en dehors de la div "card" et de la div "desc"
    if (!event.target.closest('.card') && !event.target.closest('#desc')) {
      // Masquez la div "desc" en ajoutant la classe "hidden"
      descDiv.classList.add('hidden');
      descDiv.style.pointerEvents = 'none';
    }
  });
});

async function fetchData() {
  try {
    const nb = 12;
    const url = `https://reqres.in/api/users?per_page=${nb}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Une erreur s\'est produite lors de la récupération des données.');
    }

    const data = await response.json();
    const rootDiv = document.getElementById('root');

    data.data.forEach(user => {
      const userInfoDiv = document.createElement('div');
      userInfoDiv.classList.add('card');
      userInfoDiv.innerHTML = `
        <p class="name">${user.first_name} ${user.last_name}</p>
        <img src="${user.avatar}" alt="Avatar">
        <p class="email">${user.email}</p>
      `;

      userInfoDiv.addEventListener('click', () => {
        const descDiv = document.getElementById('desc');
        descDiv.innerHTML = `
          <h2>${user.first_name} ${user.last_name}</h2>
          <img src="${user.avatar}" alt="Avatar">
          <p class="email">${user.email}</p>
          <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        `;

        // Supprimer la classe "hidden" de la div avec l'ID "desc"
        descDiv.classList.remove('hidden');
        descDiv.style.pointerEvents = 'auto';
      });

      rootDiv.appendChild(userInfoDiv);
    });
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des données:', error);
  }
}

fetchData();

  
