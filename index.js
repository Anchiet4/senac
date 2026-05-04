let indiceAtual = 0;

function mudarImagem(direcao) {
  const trilho = document.getElementById('trilho');
  const totalImagens = document.querySelectorAll('.carrossel-trilho img').length;

  indiceAtual += direcao;

  if (indiceAtual >= totalImagens) {
    indiceAtual = 0;
  }
 
  if (indiceAtual < 0) {
    indiceAtual = totalImagens - 1;
  }

  const deslocamento = -indiceAtual * 100;
  trilho.style.transform = `translateX(${deslocamento}%)`;
}