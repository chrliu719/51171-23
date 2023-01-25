function chopper(){
    document.getElementById("tony").style.display='block';
}

function join(){
    var name = document.getElementById("name").value;
    if(name == ""){
        return;
    }
    var node = document.createElement('li');
    node.appendChild(document.createTextNode(name));
    document.getElementById("crew").appendChild(node);
}