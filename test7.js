/* ONly 
    ele ignora todos os testes e só faz o teste que estivar com only,
    caso tenha mais de um marcado como only ele para na primeira marcação
*/

QUnit.module("Modulo de Vendas");

QUnit.test("Teste dentro do modulo de Vendas 1-1", function(assert){
    assert.ok(true, "Resultado teste vendas 1-1: ");
})

QUnit.module("Modulo de Produtos");

QUnit.only("Teste dentro do modulo de Produtos 1-1", function(assert){
    assert.ok(true, "Resultado teste produto 1-1: ");
})
