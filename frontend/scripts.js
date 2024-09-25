var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}
async function test(){
    const response = await fetch('http://localhost:3000');
    const data = await response.json();
    console.log(data);
}

function send_comment(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const object = {};
    data.forEach((value, key) => object[key] = value);
    console.log(JSON.stringify(object));
    fetch('http://localhost:3000/comment',
        {method: "POST",body:JSON.stringify(object),headers:{
            "Content-Type": "application/json"
        }})
    .then(()=>{console.log("gata nene")});
  }

const ids = [
    'div-link-gryffindor', 
    'div-link-ravenclaw', 
    'div-link-slytherin', 
    'div-link-hufflepuff'
];

const links = {
    'div-link-gryffindor': 'https://harrypotter.fandom.com/wiki/Gryffindor',
    'div-link-ravenclaw': 'https://harrypotter.fandom.com/wiki/Ravenclaw',
    'div-link-slytherin': 'https://harrypotter.fandom.com/wiki/Slytherin',
    'div-link-hufflepuff': 'https://harrypotter.fandom.com/wiki/Hufflepuff'
};

ids.forEach(id => {
    document.getElementById(id).addEventListener('click', () => { 
        window.location.href = links[id];
    });
});

function makeCursorPointer(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.cursor = 'pointer';
    }
}

ids.forEach(makeCursorPointer);


