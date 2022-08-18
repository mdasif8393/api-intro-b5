
const loadPosts = () =>{
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(data => showPosts(data));
}

loadPosts()

const showPosts = (data) =>{
    const section = document.getElementById('post-section');
    for(const post of data){
        console.log(post);

        const div = document.createElement('div');
        div.classList.add('div-decoration');
        div.innerHTML = `
        <h3>Title: ${post.title}</h3>
        <p>Body: ${post.body}</p>
        `
        section.appendChild(div)
    }
}