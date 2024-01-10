let p = document.querySelector('.cliquecardapio')
let input = document.querySelector('input')

const contatos = [

    { name: 'X-Bacon', price: 34.00, vegan: false, src: './css/Assets/X-bacon.jpg', descricao: 'bacon, pão, queijo, alface, tomate, ovo, batata palha, maionese, catchup' },
    { name: 'X-Bahia', price: 30.00, vegan: false, src: './css/Assets/X-Bahia.jpg' },
    { name: 'X-Barriga', price: 34, vegan: false, src: './css/Assets/X-Barriga.jpg' },
    { name: 'X-Guloso', price: 50, vegan: false, src: './css/Assets/X-Guloso.jpg' },
    { name: 'X-Ervas', price: 55, vegan: true, src: './css/Assets/X-Ervas.jpg' },
    { name: 'X-folhas', price: 30, vegan: true, src: './css/Assets/X-folhas.jpg' },
    { name: 'X-vegetariano', price: 35, vegan: true, src: './css/Assets/X-vegetariano.jpg' },
    { name: 'X-abacate', price: 37, vegan: true, src: './css/Assets/X-abacate.png' },
    { name: 'X-GranBaião', price: 25, vegan: false, src: './css/Assets/X-GranBaião.jpg' },
    { name: 'X-Tasty', price: 65, vegan: false, src: './css/Assets/X-Tasty.jpg' },
    { name: 'X-love', price: 60, vegan: false, src: './css/Assets/X-love.jpg'},
    { name: 'X-Madruga', price: 60, vegan: false, src: './css/Assets/X-Madruga.jpg'},
    { name: 'X-Grão', price: 45, vegan: true, src: './css/Assets/X-Grão.jpg' },
    { name: 'X-Monstro', price: 25, vegan: false, src: './css/Assets/X-Monstro.jpg' },
    { name: 'X-Combo Feliz', price: 25, vegan: false, src: './css/Assets/X-Combo2.jpg' },
    { name: 'X-Combo Alegre', price: 25, vegan: false, src: './css/Assets/X-Combo1.jpg' },
    { name: 'X-Combo Festa', price: 25, vegan: false, src: './css/Assets/X-Combo3.jpg' },
    { name: 'X-Combo Up', price: 25, vegan: false, src: './css/Assets/X-combo4.jpg' },
    { name: 'X-Combo Crazy', price: 25, vegan: false, src: './css/Assets/X-combo5.jpg' },
    { name: 'X-Combo Hard', price: 25, vegan: false, src: './css/Assets/X-combo6.jpg' },
]

function btnn() {
    let contatoEncontrado = false;

    contatos.forEach(contato => {
        if (input.value.toLowerCase() === contato.name.toLowerCase()) {
            p.innerHTML = `Hamburguer encontrado: Nome - ${contato.name}, Preço - ${contato.price},- ${contato.src}, descricao - ${contato.descricao}`;
            contatoEncontrado = true;
        }
    });

    if (!contatoEncontrado) {
        p.innerText = 'Hamburguer não encontrado, tente novamente';
    }

}
  