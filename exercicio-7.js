var {produtos}= require("./produtos")

console.log(produtos)

var gastos=0
var totalVendas=0
var totalGasto=0
var lucro=0
var vendas=0
var lucroIndi=0

for(let index=0; index<produtos.length; index=index+1){
    console.log("index:",index)   

    totalGasto=totalGasto+produtos[index].valorCompra * produtos[index].quantidade

    totalVendas=totalVendas+produtos[index].valorVenda * produtos[index].quantidade

    lucro=totalVendas - totalGasto

    gastos=produtos[index].valorCompra * produtos[index].quantidade

    vendas=produtos[index].valorVenda * produtos[index].quantidade

    lucroIndi=vendas - gastos

    console.log("O mercado gastou com",produtos[index].nome,gastos,"R$")

    console.log("O mercado ganhou com",produtos[index].nome,vendas,"R$")

    console.log("O valor de lucro do ",produtos[index].nome,"foi de: ",lucroIndi,"R$")

}

console.log("O valor total gasto pelo mercado, com todos os produtos foi de: ",totalGasto,"R$")

console.log("O valor total de vendas do mercado foi de: ",totalVendas,"R$")

console.log("O lucro do mercado foi de: ",lucro,"R$")
