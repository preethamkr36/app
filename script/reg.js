function validate(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var conNo=document.getElementById("conNo").value;
    var uni=document.getElementById("uni").value;
    var college=document.getElementById("college").value;
    var yop=document.getElementById("yop").value;
    var course=document.getElementById("course").value;
    var branch=document.getElementById("branch").value;
    var percentage=document.getElementById("percentage").value;
    var dob=document.getElementById("dob").value;
    var gender=document.getElementsByName("gender").value;

    if(name=="" || email=="" || conNo=="" || uni=="" || college=="" || yop=="" || course=="" || branch=="" || percentage=="" || dob=="" || gender==""){
        document.getElementById("print").innerHTML="Field cannot be empty "
    }    
} 