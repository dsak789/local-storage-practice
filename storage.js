console.log("LocalStorage Connection Established");
var rno=document.getElementById("rno");
var fname=document.getElementById("name");
var branch=document.getElementById("branch");
var year=document.getElementById("year");
var img=document.getElementById("photo");
var save=document.getElementById("save");

var take_input=document.getElementById("take_input");
var save_value=document.getElementById("save_value");
var lsvalue=document.getElementById("lsvalue");
var readls=document.getElementById("read_ls");
var delete_data=document.getElementById("delete_data");

save_value.onclick=function(){
    //var profile=[rno.value,fname.value,branch.value,year.value]
    //localStorage.setItem(rno.value,rno.value);
    //localStorage.setItem(rno.value+"Name",fname.value);
    //localStorage.setItem(rno.value+"Branch",branch.value);
    //localStorage.setItem(rno.value+"Year",year.value);
    let profile={
        Rollno :rno.value,
        Name :fname.value,
        Branch :branch.value,
        Year :year.value
    }

    let profileserialized=JSON.stringify(profile);
    localStorage.setItem(rno.value,profileserialized);
    let profiledeserialized=JSON.parse(localStorage.getItem("profile"));
    console.log(profiledeserialized);
}
readls.onclick=function() {
    lsvalue.textContent=localStorage.getItem(rno.value);
}
delete_data.onclick=function(){
    localStorage.removeItem(rno.value);
}

save.onclick=function(){
    var keys=Object.keys(localStorage);
    lsvalue.textContent=localStorage.storage;
    console.log(localStorage);
    let profiledeserialized=JSON.parse(localStorage.getItem("profile"));
    lsvalue.textContent=profiledeserialized;
    
    /*for (var i=0; i<keys.length; i++)
    console.log(keys[i]+":"+localStorage.getItem(keys[i]));*/

}
var sspecific=document.getElementById("show");
sspecific.onclick=function(){
    let profiledeserialized=JSON.parse(localStorage.getItem(take_input));
    data= profiledeserialized;
    lsvalue.textContent=data;
}
////////////////////////////////////////////////////////////////////////
/*Signup*/
var Rollno=document.getElementById("Rno");
var Fname = document.getElementById("Fname");
var Branch=document.getElementById("Branch");
var Year=document.getElementById("Year");   
var Email=document.getElementById("email");
var Password=document.getElementById("Password");
var Cpswd=document.getElementById("cpswd");
var Signup=document.getElementById("Signup");



Signup.onclick= function(){
    
    if(Password.value==Cpswd.value){
        localStorage.setItem(Rollno.value+"_Rollno",Rollno.value);
        localStorage.setItem(Rollno.value+"_Fname",Fname.value);
        localStorage.setItem(Rollno.value+"_Branch",Branch.value);
        localStorage.setItem(Rollno.value+"_Year",Year.value);
        localStorage.setItem(Rollno.value+"_Email",Email.value);
        localStorage.setItem(Rollno.value+"_Password",Password.value);
    }
    else{
        alert("password mismatch");
    }
}

//////////////////////////////////////////////////////////////
/*Login*/
r_no=document.getElementById("r_no");
usrnm=document.getElementById("usrnm");
pswd=document.getElementById("pswd");
login=document.getElementById("login");

login.onclick=function(){


lusrnm=localStorage.getItem(r_no.value+"_Email")
lpswd=localStorage.getItem(r_no.value+"_Password")
if(usrnm.value==null||lpswd.value==""){
    alert("Please enter your Username");
}
else if(usrnm.value!=lusrnm){
    alert("username Not Valid");
}
else if (pswd.value==null||pswd.value==""){
    alert("Please enter your Password");
}
else if (pswd.value!=lpswd){
    alert("Incorrect Password");
}
else{
    alert("Login Success");
    return true;
}
}