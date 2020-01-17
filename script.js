
function setLocalStorage() {
	
	var result = null;
	var xmlhttp = new XMLHttpRequest();
	var txt = "";
	xmlhttp.open("GET", "pages.xml", false);
	xmlhttp.send();
	if (xmlhttp.status==200) {
		result = xmlhttp.responseXML;
	}
	x = result.getElementsByTagName("field");
	
	//Les n premières images tjrs les mêmes
	var nbrSame = 3;
	for (i = 0; i < nbrSame; i++) {
		localStorage.setItem(i, x[i].childNodes[0].nodeValue);
		// txt += i + " : " + x[i].childNodes[0].nodeValue + "<br>";
	}
	//Les n dernières images tjrs les mêmes
	for (i = x.length-nbrSame; i < x.length; i++) {
		localStorage.setItem(i, x[i].childNodes[0].nodeValue);
		// txt += i + " : " +x[i].childNodes[0].nodeValue + "<br>";
	}
	//Le reste aléatoire
	//Création des nombres aléatoires
	var randTab = new Array();
	var j = 0;
	for (i = nbrSame; i < x.length-nbrSame; i++) {
		randTab[j] = x[i].childNodes[0].nodeValue;
		// txt += i + " : " +x[i].childNodes[0].nodeValue + "<br>";
		j++;
	}
	var shuffledTab = shuffle(randTab);
	
	//Remplissage
	var k = nbrSame;
	for (i = 0; i < shuffledTab.length; i++) {
		
		localStorage.setItem(k, shuffledTab[i]);
		// txt += k + " : " + shuffledTab[i] + "<br>";
		k++;
	}
	document.getElementById("list").innerHTML = x.length;
	
	localStorage.setItem("nextImg", 0); //L'image suivante à afficher
	localStorage.setItem("nbrImg", x.length); //Nombre Total d'images

}

function nextImage() {
	
	var idImg = localStorage.getItem("nextImg");
	window.location.href="./pages/"+localStorage.getItem(idImg)+".html";
}

function choixEmotions() {
	
	window.location.href="../choixEmotions.html";
}

function intervalCroix(){
	if(parseInt(localStorage.getItem("nextImg")) >= parseInt(localStorage.getItem("nbrImg")))
	{
		window.location.href="./thanks.html";
	}
	else{
		document.getElementById("list").innerHTML = localStorage.getItem("nextImg") +" : "+ localStorage.getItem("nbrImg");
		setInterval(nextImage, 2000); //waiting 1 sec
	}
	
}

function intervalImage(){
	
	var idImg = localStorage.getItem("nextImg");
	// document.getElementById("tex").innerHTML = localStorage.getItem(idImg);
	document.getElementById("img").src = "../images/" + localStorage.getItem(idImg);
	setInterval(choixEmotions, 5000); //waiting 5 sec
}

function shuffle(array){
    for (var i = array.length - 1; i > 0; i--){
        
		var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
	
	return array;
}

function saveEmotion(id_clicked){
	
	var data = new FormData();
	data.append("data" , localStorage.getItem(localStorage.getItem("nextImg"))+"="+id_clicked);
	localStorage.setItem("nextImg", parseInt(localStorage.getItem("nextImg"))+1);
	var xhr = new XMLHttpRequest();
	xhr.open( 'post', 'croix.php', true );
	xhr.send(data);
}

function makeId() {
	
  var userId = "";
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (var i = 0; i < 8; i++)
    userId += chars.charAt(Math.floor(Math.random() * chars.length));
  document.getElementById("userId").value = userId;
}

function saveUser(){
	
	var data = new FormData();
	data.append("user" , "USER="+document.getElementById("userId").value);
	var xhr = new XMLHttpRequest();
	xhr.open( 'post', 'croix.php', true );
	xhr.send(data);
}
