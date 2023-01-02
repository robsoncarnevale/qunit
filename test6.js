/* Skip 
Deixara o retorno do teste aparecendo, mas ele pula o mesmo.
*/

QUnit.module("Modulo de Vendas");

QUnit.test("Teste dentro do modulo de Vendas 1-1", function(assert){
    assert.ok(true, "Resultado teste 1-1: ");
})

QUnit.skip("Teste dentro do modulo de Vendas 1-2", function(assert){
    assert.ok(true, "Resultado teste 1-2: ");
})

QUnit.module("Modulo de Produtos");

QUnit.test("Teste dentro do modulo de Produtos 1-1", function(assert){
    assert.ok(true, "Resultado teste 1-1: ");
})
