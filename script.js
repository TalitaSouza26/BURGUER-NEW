const menuOptions = [

  { name: 'X-Bacon', price: 34, vegan: false, src: './css/Assets/X-bacon.jpg' },
  { name: 'X-Bahia', price: 30, vegan: false, src: './css/Assets/X-Bahia.jpg' },
  { name: 'X-Barriga', price: 34, vegan: false, src: './css/Assets/X-Barriga.jpg' },
  { name: 'X-Guloso', price: 50, vegan: false, src: './css/Assets/X-Guloso.jpg' },
  { name: 'X-Ervas', price: 55, vegan: true, src: './css/Assets/X-Ervas.jpg' },
  { name: 'X-folhas', price: 30, vegan: true, src: './css/Assets/X-folhas.jpg' },
  { name: 'X-vegetariano', price: 35, vegan: false, src: './css/Assets/X-vegetariano.jpg' },
  { name: 'X-abacate', price: 37, vegan: true, src: './css/Assets/X-abacate.png' },
  { name: 'X-GranBaião', price: 25, vegan: false, src: './css/Assets/X-GranBaião.jpg' },
  { name: 'X-Tasty', price: 65, vegan: false, src: './css/Assets/X-Tasty.jpg' },
  { name: 'X-love', price: 60, vegan: false, src: './css/Assets/X-love.jpg' },
  { name: 'X-Madruga', price: 60, vegan: false, src: './css/Assets/X-Madruga.jpg' },
  { name: 'X-Grão', price: 45, vegan: true, src: './css/Assets/X-Grão.jpg' },
  { name: 'X-Monstro', price: 25, vegan: false, src: './css/Assets/X-Monstro.jpg' },
  { name: 'X-Combo Feliz', price: 25, vegan: false, combo: true, src: './css/Assets/X-Combo2.jpg' },
  { name: 'X-Combo Alegre', price: 25, vegan: false, combo: true, src: './css/Assets/X-Combo1.jpg' },
  { name: 'X-Combo Festa', price: 25, vegan: false, combo: true, src: './css/Assets/X-Combo3.jpg' },
  { name: 'X-Combo Up', price: 25, vegan: false, combo: true, src: './css/Assets/X-combo4.jpg' },
  { name: 'X-Combo Crazy', price: 25, vegan: false, combo: true, src: './css/Assets/X-combo5.jpg' },
  { name: 'X-Combo Hard', price: 25, vegan: false, combo: true, src: './css/Assets/X-combo6.jpg' },

]



const list = document.querySelector(".burguers");
const buttonShowAll = document.querySelector('.show-all');
const buttonAll = document.querySelector('#mostrar')
const filterAll = document.querySelector('#filter')
const veganFilter = document.querySelector('#VeganFilter')
const oterAll = document.querySelector('#oterCardapio')



function mostrarAll() {
  let myli = '';

  menuOptions.forEach((product) => {
    myli += `
      <li class="boxburguers">
        <a href="" class="linkProduto">
          <img src=${product.src} alt="" class="imgProduto">
          <p class="descrition">
            ${product.name}
          </p>
          <p class="price">
            R$ ${product.price}.00
          </p>
        </a>
      </li>`;
  });


  list.innerHTML = myli;

}


function mapAllItems() {
  const newprice = menuOptions.map((product) => ({
    ...product,
    price: Math.floor(product.price * 0.9),
  }));

  let lista = '';

  newprice.forEach((product) => {
    lista += `
      <li class="boxburguers">
        <a href="" class="linkProduto">
          <img src=${product.src} alt="" class="imgProduto">
          <p class="descrition">
            ${product.name}
          </p>
          <p class="price">
            R$ ${product.price}.00
          </p>
        </a>
      </li>`;
  });

  list.innerHTML = lista;

}


function filterAllitems() {
  const combos = menuOptions.filter((product) => product.combo);

  let lista = '';

  combos.forEach((product) => {
    lista += `
      <li class="boxburguers">
        <a href="" class="linkProduto">
          <img src=${product.src} alt="" class="imgProduto">
          <p class="descrition">
            ${product.name}
          </p>
          <p class="price">
            R$ ${product.price}.00
          </p>
        </a>
      </li>`;
  });

  list.innerHTML = lista;
}

function filterVeganItems() {
  const veganF = menuOptions.filter((product) => product.vegan);

  let lista = '';

  veganF.forEach((product) => {
    lista += `
      <li class="boxburguers">
        <a href="" class="linkProduto">
          <img src=${product.src} alt="" class="imgProduto">
          <p class="descrition">
            ${product.name}
          </p>
          <p class="price">
            R$ ${product.price}.00
          </p>
        </a>
      </li>`;
  });

  list.innerHTML = lista;
}




buttonAll.addEventListener('click', mostrarAll)
buttonShowAll.addEventListener('click', mapAllItems);
filterAll.addEventListener('click', filterAllitems)
veganFilter.addEventListener('click', filterVeganItems)
oterAll.addEventListener('click', mostrarAll  )