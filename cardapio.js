let p = document.querySelector('.cliquecardapio')
let input = document.querySelector('input')
let msg = document.querySelector('.mensagem')

const burguer = [

    { name: 'X-Bacon', price: 34.00, vegan: false, src: './css/Assets/X-bacon.jpg', descricao: 'bacon, pão, queijo, alface, tomate, ovo, batata palha, maionese, catchup' },
    { name: 'X-Bahia', price: 30.00, vegan: false, src: './css/Assets/X-Bahia.jpg', descricao: 'bacon, pão, queijo, alface, tomate, ovo, batata palha, maionese, catchup' },
    { name: 'X-Barriga', price: 34, vegan: false, src: './css/Assets/X-Barriga.jpg', descricao: 'bacon, pão, queijo, alface, tomate, ovo, batata palha, maionese, catchup' },
    { name: 'X-Guloso', price: 50, vegan: false, src: './css/Assets/X-Guloso.jpg', descricao: 'bacon, pão, queijo, alface, tomate, ovo, batata palha, maionese, catchup' },
    { name: 'X-Ervas', price: 55, vegan: true, src: './css/Assets/X-Ervas.jpg', descricao: 'bacon, pão, queijo, alface, tomate, ovo, batata palha, maionese, catchup' },
    { name: 'X-folhas', price: 30, vegan: true, src: './css/Assets/X-folhas.jpg', descricao: 'bacon, pão, queijo, alface, tomate, ovo, batata palha, maionese, catchup' },
    { name: 'X-vegetariano', price: 35, vegan: true, src: './css/Assets/X-vegetariano.jpg', descricao: 'bacon, pão, queijo, alface, tomate, ovo, batata palha, maionese, catchup' },
    { name: 'X-abacate', price: 37, vegan: true, src: './css/Assets/X-abacate.png', descricao: 'bacon, pão, queijo, alface, tomate, ovo, batata palha, maionese, catchup' },
    { name: 'X-GranBaião', price: 25, vegan: false, src: './css/Assets/X-GranBaião.jpg', descricao: 'bacon, pão, queijo, alface, tomate, ovo, batata palha, maionese, catchup' },
    { name: 'X-Tasty', price: 65, vegan: false, src: './css/Assets/X-Tasty.jpg', descricao: 'bacon, pão, queijo, alface, tomate, ovo, batata palha, maionese, catchup' },
    { name: 'X-love', price: 60, vegan: false, src: './css/Assets/X-love.jpg', descricao: 'bacon, pão, queijo, alface, tomate, ovo, batata palha, maionese, catchup'},
    { name: 'X-Madruga', price: 60, vegan: false, src: './css/Assets/X-Madruga.jpg', descricao: 'bacon, pão, queijo, alface, tomate, ovo, batata palha, maionese, catchup'},
    { name: 'X-Grão', price: 45, vegan: true, src: './css/Assets/X-Grão.jpg', descricao: 'bacon, pão, queijo, alface, tomate, ovo, batata palha, maionese, catchup' },
    { name: 'X-Monstro', price: 25, vegan: false, src: './css/Assets/X-Monstro.jpg', descricao: 'bacon, pão, queijo, alface, tomate, ovo, batata palha, maionese, catchup' },
    { name: 'X-Combo Feliz', price: 25, vegan: false, src: './css/Assets/X-Combo2.jpg', descricao: 'bacon, pão, queijo, alface, tomate, ovo, batata palha, maionese, catchup' },
    { name: 'X-Combo Alegre', price: 25, vegan: false, src: './css/Assets/X-Combo1.jpg', descricao: 'bacon, pão, queijo, alface, tomate, ovo, batata palha, maionese, catchup' },
    { name: 'X-Combo Festa', price: 25, vegan: false, src: './css/Assets/X-Combo3.jpg', descricao: 'bacon, pão, queijo, alface, tomate, ovo, batata palha, maionese, catchup' },
    { name: 'X-Combo Up', price: 25, vegan: false, src: './css/Assets/X-combo4.jpg', descricao: 'bacon, pão, queijo, alface, tomate, ovo, batata palha, maionese, catchup' },
    { name: 'X-Combo Crazy', price: 25, vegan: false, src: './css/Assets/X-combo5.jpg', descricao: 'bacon, pão, queijo, alface, tomate, ovo, batata palha, maionese, catchup' },
    { name: 'X-Combo Hard', price: 25, vegan: false, src: './css/Assets/X-combo6.jpg', descricao: 'bacon, pão, queijo, alface, tomate, ovo, batata palha, maionese, catchup' },
]


function btnn() {
    let hamburguerEncontrado = false;
    const listaCardapio = document.getElementById('listaCardapio');

    burguer.forEach(burguer => {
        if (input.value.toLowerCase() === burguer.name.toLowerCase()) {
            listaCardapio.innerHTML = ''; 
            const novoElemento = document.createElement('li');
            novoElemento.classList.add('boxburguers');

            novoElemento.innerHTML = `
                <a href="" class="linkProduto">
                    <img src="${burguer.src}" alt="" class="imgProduto">
                    <p class="descrition">${burguer.name}</p>
                    <p class="price">${burguer.price.toFixed(2)}</p>
                </a>
            `;

            listaCardapio.appendChild(novoElemento);

            hamburguerEncontrado = true;
        }
    });
    

    if (!hamburguerEncontrado) {
        msg.innerText = 'Hamburguer não encontrado, tente novamente';
    }
    input.addEventListener('input', function() {
        msg.innerText = '' 
    });
}
