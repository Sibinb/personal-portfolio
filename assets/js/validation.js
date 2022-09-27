var nameerror = document.getElementById("name-error");
var emailerror = document.getElementById("email-error");
var phoneerror = document.getElementById("mobile-error");
var messageerror = document.getElementById("message-error");
var submiterr = document.getElementById("submit-error");
let total=0;
function vname(){
    var name=document.getElementById("input-name").value;
      if(name.length==0){
        nameerror.innerHTML=" ";
    }else if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameerror.innerHTML="full Name required";
    }
    else{
        nameerror.innerHTML=" ";
        return false;
    }
    
}
function vemail(){
    var name=document.getElementById("input-email").value;
      if(name.length==0){
        emailerror.innerHTML=" ";
    }else if(!name.match(/^[A-Za-z0-9_.+-]+@[a-zA-Z0-9-]+[\.][a-zA-Z0-9-.]+$/)){
        emailerror.innerHTML="Email required";
    }
    else{
        emailerror.innerHTML=" ";
    }
    
}
function vmobile(){
    var name=document.getElementById("input-mobile").value;
    var num =name.length;
      if(num==0){
        phoneerror.innerHTML=" ";
        return false;
      }
    if(num<10){
        phoneerror.innerHTML="Give valid phonenumber";
        return false;
    }else{
        phoneerror.innerHTML=" ";
        return true;

    }
    
     
    
    
}
function vmessage(){
    var name=document.getElementById("input-message").value;
      if(name.length==0){
        messageerror.innerHTML=" ";
    }
    else if(name.length<5){
        messageerror.innerHTML=" message required ";
    }
    else{
        messageerror.innerHTML=" ";
    }
    
}
function vsubmit(){
    var name=(document.getElementById("input-message").value).length;
    var name1=(document.getElementById("input-mobile").value).length;
    var name2=(document.getElementById("input-email").value).length;
    var name3=(document.getElementById("input-name").value).length;
    var sum=name+name1+name2+name3;
    if(sum>30){
        $("#submit-form").submit((e)=>{
            e.preventDefault()
            submiterr.innerHTML=" ";
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbzZ8nhelNAHaIdwm_1qU9YKt6Ao_10P6QgoBu6G1XnvByDqn97cx9jFlOWGDxeDyBFRuQ/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload()
                },
                error:function (err){
                  alert("Something Error")
    
                }
            })
        })

    }else{
        alert("FILL THE FORM")
        window.location.href="#contact"
    }
     

}