function myFunction() {
var value = document.getElementById("textId").value    
if(value=="student"){
    location.replace("course.html")
    return true
}
else if(value=="parent"){
    location.replace("index.html")
    return true
}
else{
    alert("Please enter student or parent")
}
}