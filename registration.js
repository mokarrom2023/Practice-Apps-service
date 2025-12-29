document.getElementById("reg-btn").addEventListener("click", function() {
            const mobile = document.getElementById("reg-mobile").value;
            const pin = document.getElementById("reg-pin").value;

            if (mobile.length === 11 && pin.length === 4) {
                // ব্রাউজারের মেমোরিতে তথ্য জমা রাখা
                localStorage.setItem("userMobile", mobile);
                localStorage.setItem("userPin", pin);
                
                alert("Registration Successful! Now you can login.");
                window.location.href = "index.html";
            } else {
                alert("Please enter exactly 11 digits for mobile and 4 digits for pin.");
            }
        })