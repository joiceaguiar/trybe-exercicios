const chessPiece = 'BISPO';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei = Apenas uma casa em qualquer direção.');
    break;
  case 'rainha':
    console.log('Rainha = Diagonal, horizontal e vertical.');
    break;
  case 'bispo':
    console.log('Bispo = Diagonal.');
    break;
  case 'rorre':
    console.log('Torre = Horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo = "L" pode pular sobre as peças.');
    break;
  case 'peão':
    console.log('Peão = Apenas uma casa para frente, no primeiro movimento podem ser duas casas.');
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
}
