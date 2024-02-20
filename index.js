let otp=0;

// captcha number generate random number

        let x = Math.floor((Math.random() * 10) + 1);
        let y = Math.floor((Math.random() * 10) + 1);
      
        document.getElementById("demo").innerHTML = `${x} + ${y}`;
        let captcha = x+y;
        document.getElementById("captcha").innerHTML;
        console.log(document.getElementById("captcha").innerHTML);



    // Number To Words

    var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'Rs.' : '';
    return str;
}

document.getElementById('number').onkeyup = function () {
    document.getElementById('words').innerHTML = inWords(document.getElementById('number').value);
};


// Form Validation

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
            location.assign("h1.html");
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