function criaCartao(categoria, pergunta, resposta) {
  const container = document.getElementById('container');
  const cartao = document.createElement('article');
  cartao.className = 'cartao';

  cartao.innerHTML = `
    <div class="cartao__conteudo">
      <div class="cartao__conteudo__pergunta">
        <h3>${categoria}</h3>
        <p>${pergunta}</p>
      </div>
      <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
      </div>
    </div>
  `;

  cartao.addEventListener('click', () => {
    cartao.classList.toggle('active');
  });

  container.appendChild(cartao);
}
