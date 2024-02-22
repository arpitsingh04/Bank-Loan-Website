let otp=0;

        let x = Math.floor((Math.random() * 10) + 1);
        let y = Math.floor((Math.random() * 10) + 1);
      
        document.getElementById("demo").innerHTML = `${x} + ${y}`;
        let captcha = x+y;
        document.getElementById("captcha").innerHTML;
        console.log(document.getElementById("captcha").innerHTML);


function onSubmit(){


        var firstname=document.forms["regi-form"]["firstName"].value;
        var email=document.forms["regi-form"]["email"].value;
        var pan=document.forms["regi-form"]["pan"].value;
        var number=document.forms["regi-form"]["number"].value;
        var captcha=document.forms["regi-form"]["captcha"].value;
      
 //Validation
    
        if(firstname.length==0){
            document.getElementById("p1").innerHTML="Enter full name";
            document.getElementById("p1").style.color="red";
            return false;
        }

        if(email.length==0){
            document.getElementById("p2").innerHTML="Enter e-mail(abc12@gmail.com) ";
            document.getElementById("p2").style.color="red";
            return false;
        }
    
        if(pan.length==0){
            document.getElementById("p3").innerHTML="Enter pan number(ABCDE1234F)";
            document.getElementById("p3").style.color="red";
            return false;
        }

        if(number.length==0){
            document.getElementById("p4").innerHTML="Enter loan amount(456800‘Four Lakh Fifty Six Thousand Eight Hundred Rs.')";
            document.getElementById("p4").style.color="red";
            return false;
        }

        if(captcha.length==0){
            document.getElementById("p5").innerHTML="Enter captcha";
            document.getElementById("p5").style.color="red";
            return false;
        }

       
    
        document.getElementById("p1").style.visibility=false;
        document.getElementById("p2").style.visibility=false;
        document.getElementById("p3").style.visibility=false;
        document.getElementById("p4").style.visibility=false;
        document.getElementById("p5").style.visibility=false;
      
    
    
    
        var user={
            firstname:firstname,
            email:email,
            pan:pan,
            number:number,
            captcha:captcha,
            
        }
    
    
        localStorage.setItem("user" , JSON.stringify(user));
    
     
        if(x+y==captcha){

            alert("User Created Successfully");
            location.assign("thankyou.html");
            return false;
        }
            else{

                document.getElementById("p6").innerHTML="Invalid captcha";
                document.getElementById("p6").style.color="red";
                return false;
            }


        
       
    }
    
    function getUserName(){
        var userStr=localStorage.getItem("user");
        var user=JSON.parse(userStr);

        console.log(user);

        var arr = user.firstname.split(" ")


      document.getElementById("h3").innerHTML+=`${arr[0]}`;
        document.getElementById("h4").innerHTML+=`${user.email}`;

        generateOtp();
    }
    
// Generate otp on console

    function generateOtp(){

    otp = Math.floor(Math.random()*10000);
        console.log(otp);
    }

// Otp And console otp match

    function verifySubmit(){

        var text=document.getElementById("text").value;

        if(otp==text){
            alert("Submit OTP Successfully");
         }else{
            alert("Erro");
        }
       
    }
