const container = document.getElementById('container');
/
//create a red paragraph
const p = document.createElement('p');
p.textContent= "Hey I'm red!";
container.appendChild(p);

//create a blue paragraph
const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3";
container.appendChild(h3);

const pinkDiv = document.createElement('div');
pinkDiv.style.border = '2px solid black';
pinkDiv.style.backgroundColor = 'pink';
pinkDiv.style.padding = '10px';
pinkDiv.style.marginTop = '10px';

const h1Inside = document.createElement('h1');
h1Inside.textContent = "I'm in a div";

const pinside = document.createElement('p');
pInside.textContent = "ME TOO!";


pinkDik.appendChild(hiInside);
pinkDiv.appendChild(pInside);

container.appendChild(pinkDiv);
