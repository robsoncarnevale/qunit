/* Async - 
    
*/

QUnit.module("Async parte 1");

QUnit.test("Async setTimeout", function(assert){
    let done = assert.async(3);
    window.c = 0;

    setTimeout(function(){
        assert.ok(window.c == 0, "Callback 1: ");
        window.c++;
        done(); //callback 1
        setTimeout(function(){
            assert.ok(window.c === "1", "Callback 2: ");
            window.c++;
            done(); //callback 2
            setTimeout(function(){
                assert.ok(window.c == 2, "Callback 3: ");
                window.c++;
                done(); //callback 3
            }, 500);
        }, 500);
    }, 500);
});


