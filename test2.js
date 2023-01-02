/* Assert Ok and NotOk

//Teste de veracidade booleano

*/

QUnit.test("OK and NotOK", function(assert){
    var hasJquery = window.JQuery ? true : false;
    assert.ok(hasJquery, "Teste Ok");
    assert.notOk(hasJquery, "Teste NotOk");
})