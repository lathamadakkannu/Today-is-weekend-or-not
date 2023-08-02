var date=new Date();
var a=date.getDay();
document.write("Today ="+a+"<br><br>")
if((a==0)&&(a==6)){
	document.write(a+"Today is week end")
}
else{
	document.write(a+"Today is not week end")
}