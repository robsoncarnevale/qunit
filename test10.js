/* Assert - Expect
    
*/

QUnit.module("Assert Expect");

QUnit.test("Async Assert Expect", function(assert){
    assert.expect(2); // verifica a quantidade de testes feitos
    let done = assert.async(2);

    setTimeout(function() {
        assert.ok(true, "Teste 1 OK");
        done();
    })

    setTimeout(function() {
        assert.ok(true, "Teste 2s OK");
        done();
    })
});


