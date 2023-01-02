/* Equal and NotEqual

//Teste de igual e diferente

*/

QUnit.test("Equal and NotEqual", function(assert){
    let a = 1;
    let b = "1";
    //quando temos string ele faz a junção dos numeros e não a soma.
    console.log("O número é: "+ a+b);

    assert.equal(a, b, "Os números são iguais.");
    assert.notEqual(a, b , "Os números não são diferentes.");

    //para ser um teste mais acertivo devemos utilizar strictEqual e notStrictEqual

    assert.strictEqual(a, b, "Teste identico" );
    assert.notStrictEqual(a, b, "Teste não identico");
})