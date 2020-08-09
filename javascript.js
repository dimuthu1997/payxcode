
function validateformReg()
{  
var name=document.registration.name.value;  
var password=document.registration.password.value;  
var password1=document.registration.password1.value;  
var email=document.registration.email.value;
var valid=true;

if(valid)
{
       
       if (name==null || name=="")
       {  
         alert("Name can't be blank");  
         return false; 
       }
       else if(email==null || email=="")
       {
         alert("Email can't be blank");
         return false;  

       }
       else if( password==null || password=="")
       {
         alert("Password can't be blank"); 
         return false; 
       }
       else if(password.length<8)
       {  
         alert("Password must be at least 6 characters long.");
         return false;
       }
        else if(password!=password1)
       {
         alert("Password didnt match"); 
        return false; 
       }
                    

alert("Register Successfully"); 
}
} 

function validateformLog()
{   
var password=document.login.password.value;   
var email=document.login.email.value;
var password1="paysw2020";
var email1="hello@payxcode.com";
var valid=true;

if(valid)
{
       
       if(email==null || email=="")
       {
         alert("Email can't be blank");
         return false;  
       }
       else if(email!=email1)
       {
         alert("Email is wrong");
         return false;  

       }
       else if( password==null || password=="")
       {
         alert("Password can't be blank"); 
         return false; 
       }
        else if(password!=password1)
       {
         alert("Password is Wrong"); 
        return false; 
       }
                    

alert("Login Successfully"); 
}
} 

  