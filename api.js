
const loadUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

const displayUsers = (data) =>{
    const section1 = document.getElementById('section-1');
    data.map(user => {
        const p = document.createElement('p');
        p.innerText = `Name: ${user.name}, Email: ${user.email}`;
        section1.appendChild(p);
    });

}

loadUsers()