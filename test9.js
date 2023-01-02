/* Async - Parte 2
    
*/

QUnit.module("Async parte 2");

QUnit.test("Async ajax", function(assert){
    let hasJQuery = window.JSON ? true : false;
    //assert.ok(hasJQuery, "Tem LIB Jquery");

    if (hasJQuery) {
        let done = assert.async(1);
        let cepOK = {"status":200,
                    "code":"06233-030",
                    "state":"SP",
                    "ok": true,
                    "statusText": "ok",
                    "city":"Osasco",
                    "district":"Piratininga",
                    "address":"Rua Paula Rodrigues"};
    
        $.ajax({
            url: "https://cdn.apicep.com/file/apicep/06233-030.json",
            type: "GET",
            dataType: "json",
            success: function(data){
                assert.deepEqual(data, cepOK, "CEP encontrado");
            },
            error: function(err){
                assert.throws(function(){
                    throw "Erro";
                }, cepOK, JSON.stringify(err));
            },
            complete: function(){
                done();
            }
        })
    }
});


