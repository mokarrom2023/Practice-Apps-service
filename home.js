const validPin = 1234
//REUSEable function
//function to get input value (number value add korar jonno)

function getInputValueNumber (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)

    return inputFieldValueNumber
}

//only value 
function getInputValue (id){
    const  inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}

// function to get innerText (button)
function getInnerText(id){
    const element = document.getElementById(id)
    const elementValu = element.innerText
    const elementValuNumber = parseInt(elementValu)
    return elementValuNumber
}
//function to set innertext
function setInnerText(value){
    const availableBallanceElement = document.getElementById("main-balance")
    availableBallanceElement.innerText = value
}
//function to toogle
function handleToggleForm(id){
    const forms =document.getElementsByClassName("form")

    for(const form of forms){
        form.style.display = "none"
    }
    document.getElementById(id).style.display = "block"
}
//function to toogle btns
function handleToggleBtn(id){
    const formBtns = document.getElementsByClassName("form-btn")

    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-400")
    }

    document.getElementById(id).classList.remove("border-gray-400")

    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}



//add money feature
document.getElementById("add-money-bt").addEventListener("click", function(e){
   e.preventDefault()

   console.log("add money bt clicked")

   const bank = getInputValue("bank-name")

   const accountNumber = document.getElementById("Account-number").value

   const amount = getInputValueNumber("Amount")

   const pinNumber = getInputValueNumber("Pin-number")

    const mainBalance = getInnerText("main-balance")

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

    setInnerText(totalNewMainBalance) 

})


//cash out money feature

document.getElementById("Withdraw-btn").addEventListener("click", function(e){
    e.preventDefault()

    const agentNumber = document.getInputValueNumber("agent-number")

    const mainBalance = getInnerText("main-balance")

    const amount = parseInt(document.getElementById("withdraw-amount").value)

    const pinNumber = parseInt(document.getElementById("pin-num").value)

   if(agentNumber.length <11){
        alert("Please provide your account number ")
        return;
    }

    if(pinNumber !== validPin){
        alert("pin error")
        return;
    }

    const totalNewMainBalance = mainBalance - amount
    console.log(totalNewMainBalance)

    setInnerText(totalNewMainBalance)

     
})

// transfer money feature
document.getElementById("transfer-btn").addEventListener("click", function(e){
    e.preventDefault()

    const accountNumber = document.getElementById("transfer-account").value
    const amount = getInputValueNumber("transfer-amount")
    const pinNumber = getInputValueNumber("transfer-pin")
    const mainBalance = getInnerText("main-balance")

    // validation
    if(accountNumber.length < 11){
        alert("Please provide valid account number")
        return
    }

    if(amount <= 0){
        alert("Invalid amount")
        return
    }

    if(amount > mainBalance){
        alert("Insufficient balance")
        return
    }

    if(pinNumber !== validPin){
        alert("Pin error")
        return
    }

    // balance update
    const newBalance = mainBalance - amount
    setInnerText(newBalance)

    alert("Money transferred successfully ✅")
})
// coupons list
const coupons = {
    PAYOOO50: 50,
    BONUS100: 100,
    SAVE20: 20
}

let usedCoupons = []   // used coupon track

document.getElementById("bonus-btn").addEventListener("click", function(e){
    e.preventDefault()

    const couponInput = document.getElementById("bonus-coupon")
    const coupon = couponInput.value.trim()
    const mainBalance = getInnerText("main-balance")

    // already used check
    if(usedCoupons.includes(coupon)){
        alert("This coupon already used ❌")
        return
    }

    // coupon exists check
    if(!coupons[coupon]){
        alert("No bonus for this coupon 🙂")
        return
    }

    // apply bonus
    const bonusAmount = coupons[coupon]
    setInnerText(mainBalance + bonusAmount)

    usedCoupons.push(coupon) // mark as used
    couponInput.value = ""

    alert(`Bonus added ৳${bonusAmount} 🎉`)
})
// pay bill feature
document.getElementById("pay-bill-btn").addEventListener("click", function(e){
    e.preventDefault()

    const billType = document.getElementById("bill-type").value
    const accountNumber = document.getElementById("bill-account").value
    const amount = getInputValueNumber("bill-amount")
    const pinNumber = getInputValueNumber("bill-pin")
    const mainBalance = getInnerText("main-balance")

    if(billType === "Select bill"){
        alert("Please select bill type")
        return
    }

    if(accountNumber.length < 11){
        alert("Invalid biller account number")
        return
    }

    if(amount <= 0){
        alert("Invalid amount")
        return
    }

    if(amount > mainBalance){
        alert("Insufficient balance")
        return
    }

    if(pinNumber !== validPin){
        alert("Pin error")
        return
    }

    // update balance
    const newBalance = mainBalance - amount
    setInnerText(newBalance)

    alert(`${billType} bill paid successfully ✅`)
})




// toggling feature 
// add money
document.getElementById("Add-button").addEventListener("click", function(e){
    handleToggleForm("add-money-parent")

    //button select color
    handleToggleBtn("Add-button")
})
// cash out
document.getElementById("cash-button").addEventListener("click", function(){
   handleToggleForm("cash-out-parent")

   //button select color
   handleToggleBtn("cash-button")
})
// transfer money
document.getElementById("transfer-button").addEventListener("click",function(){
    handleToggleForm("transfer-money-parent")

    //button select color
   handleToggleBtn("transfer-button")
})
// get-bonus-parent
document.getElementById("bonus-button").addEventListener("click",function(){
    handleToggleForm("get-bonus-parent")

    //button select color
    handleToggleBtn("bonus-button")
})
// pay-bil-parent
document.getElementById("pay-button").addEventListener("click",function(){
    handleToggleForm("pay-bill-parent")

    //button select color
    handleToggleBtn("pay-button")
})
// transaction-btn-parent
document.getElementById("transaction-btn").addEventListener("click",function(){
    handleToggleForm("transaction-parent")

    //button select color
    handleToggleBtn("transaction-btn")
})