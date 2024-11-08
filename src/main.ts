fetch('http://localhost:8080/users')
 .then(response => response.json() as Promise<User[]>)
 .then(users => {
    const userListElement = document.getElementById('user-list');
    if (userListElement) {
      users.forEach(user => {
        const listItemElement = document.createElement('li');
        listItemElement.textContent = `${user.id} - ${user.email}`;
        userListElement.appendChild(listItemElement);
      });
    } else {
      console.error('Error: Unable to find element with ID "user-list"');
    }
  })
 .catch(error => console.error('Error:', error));