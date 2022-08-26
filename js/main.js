let showMore = true;
document.getElementById("more").addEventListener("click", function(){
    if(showMore){
        document.getElementById("show").classList.remove("hidden");
        showMore = false;
    }else{
        document.getElementById("show").classList.add("hidden");
        showMore = true;
    }
})




document.getElementById("sendmail").addEventListener("click", function(){
    const from_name = document.getElementById("fullname");
    const email_id = document.getElementById("email_id");
    const message = document.getElementById("message");

    const from_name_value = from_name.value;
    const email_id_value = email_id.value;
    const message_value = message.value;

    let params = {
        from_name : from_name_value,
        email_id : email_id_value,
        message : message_value
    }

    console.log(params);
    emailjs.init("rjluBq6Y9IfutnjJ1");
    emailjs.send("service_nfb7ncq", "template_4vb1aoh", params).then(function(res){
        if(res.status === 200){
            alert("Send Success")
        }else{
            alert("Please send again")
        }
    })
});