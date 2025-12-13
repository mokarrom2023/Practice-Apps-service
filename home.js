const validPin = 1234

document.getElementById("add-money-bt").addEventListener("click", function(e){
   e.preventDefault()
   console.log("add money bt clicked")
   const bank = document.getElementById("bank-name").value
   const accountNumber = document.getElementById("Account-number").value
   const amount = parseInt(document.getElementById("Amount").value)

   const pinNumber = parseInt(document.getElementById("Pin-number").value)

    const mainBalance = parseInt(document.getElementById("main-balance").innerText)

    console.log(amount, mainBalance)


    if(accountNumber.length <11){
        alert("Please provide your account number ")
        return;
    }

    if(pinNumber !== validPin){
        alert("pin error")
        return;
    }
    const totalNewMainBalance =amount + mainBalance

    document.getElementById("main-balance").innerText = totalNewMainBalance

})

// toggling feature 

document.getElementById("Add-button").addEventListener("click", function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})

document.getElementById("cash-button").addEventListener("click", function(){
    document.getElementById("cash-out-parent").style.display = "block"
    document.getElementById("add-money-parent").style.display = "none"

})