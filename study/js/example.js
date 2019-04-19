window.onload=function(){
	var para=document.createElement("p");
	var txt1=document.createTextNode("This is");
	var emphais=document.createElement("em");
	var txt2=document.createTextNode(" my");
	var txt3=document.createTextNode(" ontent");
	var textdiv=document.getElementById("textdiv");
	para.appendChild(txt1);
	emphais.appendChild(txt2);
	para.appendChild(emphais);
	para.appendChild(txt3);
	textdiv.appendChild(para);
}
