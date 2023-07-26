const firstName = "Eduardo"
const anotherName = 1
const x = true

function greeting(name :String){
    console.log(`Olá ${name}`);
    
}

greeting(firstName)
//errados nao compila com tsc
//greeting(anotherName)
//greeting(x)
