/* Callback */

QUnit.begin(function(details){
    console.log("Inicio: ", details);
})

QUnit.done(function(details){
    console.log("Fim: ", details);
})

QUnit.testStart(function(details){
    console.log("Inicia teste: ", details);
})

QUnit.testDone(function(details){
    console.log("Inicia teste: ", details);
})

QUnit.moduleStart(function(details){
    console.log("Inicia modulo: ", details);
})

QUnit.moduleDone(function(details){
    console.log("Fim de modulo: ", details);
})

QUnit.module("Modulo de Vendas", {
    before: function(assert){
        assert.ok(true, "Antes de executar o módulo - before");
    },
    beforeEach: function(assert){
        assert.ok(true, "Antes de executar o módulo - beforeEach");
    },
    afterEach: function(assert){
        assert.ok(true, "Depois de executar o módulo - afterEach");
    },
    after: function(assert){
        assert.ok(true, "Depois de executar o módulo - after");
    }
});

QUnit.test("teste 1 dentro do modulo vendas", function(assert){
    assert.ok(true, "Resultado teste 1: ");
})

QUnit.test("teste 2 dentro do modulo vendas", function(assert){
    assert.notOk(false, "Resultado teste 2: ");
})


QUnit.module("Modulo de Produtos");

QUnit.test("teste 1 dentro do modulo produtos", function(assert){
    assert.ok(false, "Resultado teste 1: ");
})

QUnit.test("teste 2 dentro do modulo produtos", function(assert){
    assert.notOk(false, "Resultado teste 2: ");
})