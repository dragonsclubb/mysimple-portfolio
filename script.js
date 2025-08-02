function sendmail(){
    let parms ={
        name:document.getElementById("name").ariaValueMax,
        email :document.getElementById("email").ariaValueMax,
        subject:document.getElementById("subject").ariaValueMax,
        message:document.getElementById("message").ariaValueMax,
    }

    emailjs.send("service_t58xi6i","template_1rul6r1",parms).(alert("email sent!!"))
    
}