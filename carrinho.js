

const produtos = [
    {id: 1, preco: 10.00, quantidade: 2},
    {id: 2, preco: 10.00, quantidade: 2},
    {id: 3, preco: 10.00, quantidade: 2},
    {id: 4, preco: 10.00, quantidade: 2},
];

produtos.forEach(produto => {
    produto.subtotal = produto.preco * produto.quantidade;
});
console.log('Todos os produtos: ');
console.table(produtos);

const produtosSelecionados = produtos.filter(produto => produto.quantidade > 0);

console.log('Produtos selecionados: ');
console.table(produtosSelecionados);

const valorFinal = produtos.reduce(((total, produto) => total + produto.subtotal), 0);

console.log(`Valor final do carrinho: R$  + ${valorFinal.toFixed(2)}`);