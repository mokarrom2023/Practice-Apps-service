// Login-Button function connected
document.getElementById("Login-Button") .addEventListener("click",function(e){
    e.preventDefault() //type buttone use kora lagbe na//
    const mobileNumber = 12345678910
    const pinNumber = 1234

    const mobileNumberValue = document.getElementById("mobile-number").value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById("Pin-number").value
    const pinNumberValueConverted = parseInt(pinNumberValue)

    console.log(mobileNumberValueConverted,pinNumberValueConverted)


    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href ="./Home.html"
    }
    else{
        alert("error")
    }
})