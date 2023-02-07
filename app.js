let eksi = document.querySelectorAll(".eksi")
const sayı1 = document.querySelector(".sayı1")
const sayı2 = document.querySelector(".sayı2")
const sayı3 = document.querySelector(".sayı3")
const cont2 = document.querySelector(".container2")
const iki = document.querySelector(".iki")
const üç = document.querySelector(".üç")

let artı = document.querySelectorAll(".artı")
const removes = document.querySelectorAll(".btn2")
let bagpro = document.getElementById("bagpro")
const shoepro = document.getElementById("shoepro")
const clockpro = document.getElementById("clockpro")
const subtotal = document.getElementById("subtotal")
const tax = document.getElementById("tax")
const shipping = document.getElementById("shipping")
const total = document.getElementById("total")


eksi.forEach((e) => {
    e.addEventListener("click", (e) => {

        let clckButon = e.currentTarget.classList

        if (clckButon.contains("çanta")) {
            sayı1.value--
            bagpro.value = Number(bagpro.value) - (10)
            subtotal.value = Number(subtotal.value) - (10)
            tax.value = (Number(tax.value) - Number(1.8)).toFixed(2)
            total.value = (Number(subtotal.value) + Number(tax.value) + Number(shipping.value))

        }
        if (clckButon.contains("ayakkabı")) {
            sayı2.value--
            shoepro.value = Number(shoepro.value) - (30)
            subtotal.value = (subtotal.value) - (30)
            tax.value = (Number(tax.value) - Number(5.4)).toFixed(2)
            total.value = (Number(subtotal.value) + Number(tax.value) + Number(shipping.value))

        }
        if (clckButon.contains("saat")) {
            sayı3.value--
            clockpro.value = Number(clockpro.value) - (20)
            subtotal.value = (subtotal.value) - (20)
            tax.value = (Number(tax.value) - Number(3.6)).toFixed(2)
            total.value = (Number(subtotal.value) + Number(tax.value) + Number(shipping.value))
        }
        if (sayı1.value == 0 ? cont2.remove() : null);
        if (sayı2.value == 0 ? iki.remove() : null);
        if (sayı3.value == 0 ? üç.remove() : null);
        // if(total.value < 300 && total.value > 0 ? shipping.value = 15 : null);
    })
})
artı.forEach((e) => {
    e.addEventListener("click", (e) => {
        let clckButon = e.currentTarget.classList
        if (clckButon.contains("artı1")) {
            sayı1.value++
            bagpro.value = Number(sayı1.value) * 10
            subtotal.value = (Number(bagpro.value) + Number(shoepro.value) + Number(clockpro.value))
            tax.value = Number(subtotal.value) * (18) / (100)
            total.value = (Number(subtotal.value) + Number(tax.value) + Number(shipping.value))
        }
        if (clckButon.contains("artı2")) {
            sayı2.value++
            shoepro.value = Number(sayı2.value) * 30
            subtotal.value = (Number(bagpro.value) + Number(shoepro.value) + Number(clockpro.value))
            tax.value = Number(subtotal.value) * (18) / (100)
            total.value = (Number(subtotal.value) + Number(tax.value) + Number(shipping.value))

        }
        if (clckButon.contains("artı3")) {
            sayı3.value++
            clockpro.value = Number(sayı3.value) * 20
            subtotal.value = (Number(bagpro.value) + Number(shoepro.value) + Number(clockpro.value))
            tax.value = Number(subtotal.value) * (18) / (100)
            total.value = (Number(subtotal.value) + Number(tax.value) + Number(shipping.value))
        }
        if(total.value > 300 ? shipping.value = 0:null);
    })
});
removes.forEach((e) => {

    e.addEventListener("click", (e) => {
        let clckButon = e.currentTarget.classList
        if (clckButon.contains("remove1")) {
            alert("Bu Ürünü Silmek İstediğinize Emin Misiniz?")
            subtotal.value = subtotal.value - bagpro.value
            cont2.remove();

        }
        if (clckButon.contains("remove2")) {
            alert("Bu Ürünü Silmek İstediğinize Emin Misiniz?")
            subtotal.value = subtotal.value - shoepro.value
            iki.remove()
            shoepro.value = 0

        }

        if (clckButon.contains("remove3")) {
            alert("Bu Ürünü Silmek İstediğinize Emin Misiniz?")
            subtotal.value = subtotal.value - clockpro.value
            üç.remove()
            clockpro.value = 0
        }
        if(subtotal.value == 0){
            tax.value = 0;
            shipping.value = 0;
            total.value = 0
        }
    })
})