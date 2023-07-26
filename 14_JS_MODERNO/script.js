// 1 - var, let const

var x = 10 
var y = 15

if (y > 10) {
    var x = 5
    //console.log(x)
}

//console.log(x)

let a = 10 
let b = 15

if (b > 10) {
    let a = 5
    //console.log(a)
}

//console.log(a)


// 2 - arrow function

const sum = function sum(a, b) {
    return a+b
}

const arrowSum = (a, b) => {
    return a + b
}

//console.log(sum(5,5))
//console.log(arrowSum(5,5))

const user = {
    name: "Theo",
    sayUserName(){
        var self =  this
        setTimeout(function (){
            //console.log(self)
            //console.log("username:" + self.name)
        }, 500)
    },
    sayUserNameArrow(){
        setTimeout(()=>{
            //console.log(this)
           // console.log("username:" + this.name)
        }, 700)
    }
}

user.sayUserName()
user.sayUserNameArrow()

// 3 - Filter

const arr = [1,2,3,4,5]

const number = arr.filter((n)=>{
    if (n >= 3){
        return n 
    }
})

//console.log(number)

// 4 -map

const produtos = [
    {name:'Camisa', price:10.99, category: 'roupas'},
    {name:'Chaleira', price:12.99, category: 'eletro'},
    {name:'dogao', price:7.50, category: 'comida'},
    {name:'calça', price:2, category: 'roupas'},
    {name:'tenis', price:10.99, category: 'roupas'},
]

produtos.map((produto)=>{
    if(produto.category === 'roupas'){
        produto.promocao = true
    }
})

//console.log(produtos)
//5 - Templates literals
const userName = "Eduardo"
const age = 23
//console.log(`Olá ${userName}, você tem ${age} anos`)

//6 -- Destructuring
const fruits = ["maça", "Laranja", "Mamão"]

const [f1, f2, f3] = fruits

//console.log(f1)
//console.log(f2)

const productDetails = {
    nome: "Mouse",
    price: 25,
    category: "Computer",
    color: "Cinza"
}

const {nome, price, category, color} = productDetails

//console.log(nome)
//console.log(price)


// 7- Spread Operator
const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1, ...a2]
//console.log(a3)

// 8 -Classes
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount){
        return this.price*((100-discount)/100)
    }
}

const shirt = new Product("Camisa", 20)
//console.log(shirt.name)

//console.log(shirt.productWithDiscount(50))


// 9 - Herança
class ProductWithAttributes extends Product{
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors(){
  //      console.log("As cores são:")
        this.colors.forEach((color) => {
//            console.log(color)            
        });
    }
}

const hat = new ProductWithAttributes("chapeu", 26, ["preto", 'azul','branco'])

//console.log(hat.name)
//console.log(hat.productWithDiscount(50))
hat.showColors()