// Login-Button function connected
// document.getElementById("Login-Button") .addEventListener("click",function(e){
//     e.preventDefault() //type buttone use kora lagbe na//
//     const mobileNumber = 12345678910
//     const pinNumber = 1234

//     const mobileNumberValue = document.getElementById("mobile-number").value
//     const mobileNumberValueConverted = parseInt(mobileNumberValue)

//     const pinNumberValue = document.getElementById("Pin-number").value
//     const pinNumberValueConverted = parseInt(pinNumberValue)

//     console.log(mobileNumberValueConverted,pinNumberValueConverted)


//     if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
//         window.location.href ="home.html"
//     }
//     else{
//         alert("error")
//     }
// })
document.getElementById("Login-Button").addEventListener("click", function(e) {
    e.preventDefault();

    const mobileInput = document.getElementById("mobile-number").value;
    const pinInput = document.getElementById("Pin-number").value;

    // LocalStorage থেকে তথ্য নিয়ে আসা
    const savedMobile = localStorage.getItem("userMobile");
    const savedPin = localStorage.getItem("userPin");

    // চেক করা ইউজার আগে রেজিস্ট্রেশন করেছে কিনা এবং তথ্য মিলছে কিনা
    if (mobileInput === savedMobile && pinInput === savedPin) {
        window.location.href = "home.html";
    } else {
        alert("Invalid information! If you are new, please Register first.");
    }
});