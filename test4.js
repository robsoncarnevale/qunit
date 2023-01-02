/* Equal and NotEqual

//Teste de igual de vetores e objetos

*/

QUnit.test("Equal and NotEqual", function(assert){
    let v1 = ["um", "dois", "tres"];
    let v2 = ["um", "dois"];
    let o1 = {ob: 1, od: 2};
    let o2 = {ob: 1, od: 2};

    assert.deepEqual(v1, v2, "Igualdade de vetores.");
    assert.notDeepEqual(v1, v2 , "Diferença de vetores.");

    assert.deepEqual(o1, o2, "Igualdade de objetos.");
    assert.notDeepEqual(o1, o2 , "Diferença de objetos.");

})