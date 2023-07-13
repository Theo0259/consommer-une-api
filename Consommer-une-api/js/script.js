let nb = 12;
let url = 'https://reqres.in/api/users?per_page=+nb'

fetch('https://reqres.in/api/users?per_page=' + nb, {
  headers: {
    'Content-Type': 'application/json',
  }
})
  .then(response => response.json())
  .then(data => {
    const rootDiv = document.getElementById('root');

    data.data.forEach(user => {
      const userInfoDiv = document.createElement('div');
      userInfoDiv.classList.add("card");
      userInfoDiv.innerHTML = `
        <p class ="name">${user.first_name} ${ user.last_name}</p>
        <img src="${user.avatar}" alt="Avatar">
        <p class="email">${user.email}</p>
      `;

      rootDiv.appendChild(userInfoDiv);
    });
  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors de la récupération des données:', error);
  });


