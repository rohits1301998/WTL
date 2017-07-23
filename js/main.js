var status=0;
function show(){
	var box=document.getElementById('box');
	if(status!=0){
		return;
	}
	box.style.position="fixed";
	box.style.display="inline-block";
	box.style.backgroundColor="#F6F6F6";
	box.style.borderRadius="25px";
	box.style.top="50%";
     box.style.left="50%";
	box.style.width="80%";
	box.style.transform="translate(-50%,-50%)";
	box.style.height="auto";
	box.style.textAlign="center";
	box.style.zIndex="3";
	box.style.boxShadow="-1px -1px 6px"
	document.getElementById('main').style.opacity="0.4";
	soption();
}

function soption(){
	var op=document.getElementById('options');
		document.getElementById('choose-ans').style.display="block";
  	op.innerHTML='<div><input type="radio" name="mc" /><input type="text" class="form-control" required /><button onclick="removeOptions(this);" class="btn btn-default btn-md">-</button></div>';
      var newItem = document.createElement("button");
    var textnode = document.createTextNode("Add more options");
    newItem.appendChild(textnode);
     document.getElementById('box').insertBefore(newItem,document.getElementById('add-elem'));
     newItem.classList.add("btn","btn-default");
     newItem.setAttribute("onclick","return addOptions();");
     newItem.setAttribute("id","addoption");
     document.getElementById('question').focus();
     status=1;
}

function removeOptions(e){
	var op=document.getElementById('options');
e.parentNode.parentNode.removeChild(e.parentNode);
return false;
}

function addOptions(){
var op=document.getElementById('options');
var div=document.createElement("div");
op.appendChild(div);
var radio=document.createElement("input");
radio.setAttribute("type","radio");
radio.setAttribute("name","mc");
div.appendChild(radio);
var input=document.createElement("input");
input.setAttribute("type","text");
input.required="true";
input.classList.add("form-control");
var btn=document.createElement("button");
btn.appendChild(document.createTextNode("-"));
btn.setAttribute("onclick","removeOptions(this);");
btn.classList.add("btn","btn-default","btn-md");
div.appendChild(input);
div.appendChild(btn);
return false;
}

function cancel(){
	document.getElementById('question').value="";
	var parent=document.getElementById('options');
	for(var i=0;i<parent.childElementCount;i++){
		parent.removeChild(parent.children[i]);
	}
	  document.getElementById('box').removeChild(document.getElementById('addoption'))
   document.getElementById('box').style.display="none";
   document.getElementById('main').style.opacity="1";
   status=0;
return false;
}

function addQuestion(){
	var parent=document.getElementById('box');//dialogue box for question
	var ogparent=document.getElementById('main');//visible question list
	var options=document.getElementById('options');//options in dialogue box
	var cans=-1;
	for(i=0;i<options.childElementCount;i++){
		if(options.children[i].children[0].checked){
          cans=i;
          break;
		}
	}
	if(cans==-1)
	{
		alert("please select correct option");
		return;
	}
	var block=document.createElement("div");
	block.classList.add("alert","alert-success","list");
	var close=document.createElement("a");
	close.appendChild(document.createTextNode("X"));
	close.style.cssFloat="right";
	close.setAttribute("href","#");
	close.setAttribute("onclick","return removeOptions(this);");
	block.appendChild(close);
	var question=document.createElement("p");
	question.innerHTML=parent.children[1].value;
	block.appendChild(question);
	for(var i=0;i<options.childElementCount;i++)
		{
			var radio=document.createElement("input");
			radio.setAttribute("type","radio");
			radio.setAttribute("name","anslist");
			var option=document.createElement("span");
			option.innerHTML=options.children[i].children[1].value;
			block.appendChild(radio);
			block.appendChild(option);
			block.appendChild(document.createElement("br"));

		}
	ogparent.insertBefore(block,document.getElementById('add'));
	cancel();
}

$(document).ready(function(){
    $("#add").click(function(){
        $("#box").fadeIn();
        show();
    });
});

$(document).ready(function(){
    $("#cancel").click(function(){
        $("#box").fadeOut("slow");
              setTimeout(cancel,900);
                return false;

    });
});