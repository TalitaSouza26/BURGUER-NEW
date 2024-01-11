const modalAberto = document.querySelector(".abrirModal-js")
    const modalFechado = document.querySelector('.fecharModal-js')

    const modal = document.querySelector('.modal')
    const body = document.querySelector('body')

    function abrirModal(){
      modal.classList.add('ativo')
      body.classList.add('background')
    }

    function fecharModal(){
      modal.classList.remove('ativo')
      body.classList.remove('background')
    }

    modalAberto.addEventListener('click', abrirModal)
    modalFechado.addEventListener('click', fecharModal) 