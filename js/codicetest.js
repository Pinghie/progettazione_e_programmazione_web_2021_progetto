var nodoFormQuiz;
var risposteDateQuiz;
var erroreMostrato;

var nodoAreaCompletamento;

var nodoAreaErrori;
var nodoTestoAreaErrori;	

var nodoInfoPointCompletamento;

var nodoBottoneSez1;
var nodobottoneSez2;
var nodoBottoneRevisione;

var arrayParoleErrate = [];
var numeroErroriCerchiati;
var inSvolgimento;

function generaQuiz(elem)	//Richiamata quando la pagina ha finito di caricare, genera le domande del quiz dinamicamente
{
	try
	{
		var p;
		var pText;
		var div;
		
		var radioButton;
		var label;

		var labelText;
		var name;
		var br;

		for(var i = 0; i < quiz.length; i++)
		{
			p = document.createElement("P");
			pText = document.createTextNode(quiz[i]["domanda"]);
			p.appendChild(pText);

			div = document.createElement("DIV");
			div.appendChild(p);

			elem.appendChild(div);

			for(var j = 0; j < quiz[i]["risposte"].length; j++)
			{
				name = "risposta" + i;
				radioButton = document.createElement("INPUT");
				radioButton.setAttribute("type", "radio");
				radioButton.setAttribute("name", name);
				radioButton.setAttribute("id", name + j);
				radioButton.setAttribute("value", j);
				elem.appendChild(radioButton);

				label = document.createElement("LABEL");
				label.setAttribute("for", name + j);
				labelText = document.createTextNode(quiz[i]["risposte"][j]);
				label.appendChild(labelText);
				elem.appendChild(label);

				br = document.createElement("br");
				elem.appendChild(br);

				div.appendChild(radioButton);
				div.appendChild(label);
				div.appendChild(br);
				div.classList.add("areaDomanda");
			}
		}
	}

	catch(e)
	{
		alert("Errore in generaQuiz: " + e);
	}
}

function generaTestoConErrori(elem)	//Richiamata quando la pagina ha finito di caricare, genera il testo dell'esercizio 3
{
	try
	{
		var arrayParole = testo.split(" ");
		
		var span;
		var spanText;
		
		var spanInterno;
		var spanInternoText;
		var j = 0;

		for(var i = 0; i<arrayParole.length; i++)
		{ 	
			span = document.createElement("SPAN");
			spanText = document.createTextNode(arrayParole[i] + " ");
		  	span.appendChild(spanText);
		  	span.onclick = gestoreClickAreaErrori;

			if(arrayParole[i] == messaggiPopUp[j]["parola"])
			{
				spanInterno = document.createElement("SPAN");
				spanInterno.classList.add("popuptext");
				spanInternoText = document.createTextNode(messaggiPopUp[j]["testoPopUp"]);
				spanInterno.appendChild(spanInternoText);
				span.appendChild(spanInterno);
				span.classList.add("relative");
				arrayParoleErrate.push(span);
				if(j<4)j++;
			}

	  		elem.appendChild(span);
		}
	}
	catch(e)
	{
		alert("Errore in generaTestoConErrori: " + e);
	}
}

function generaAreaRisultato(punteggio)	//Richiamata quando viene cliccato il bottone "Revisiona", genera l'area con il livello raggiunto
{
	try
	{
		var livello;
		var div;
		var img;
		var p1;
		var p1Text;
		var h1;
		var h1Text;
		var p2;
		var p2Text;
		var a;
		var aText;
		var div2;
		var a2;

		var body = document.body;
		var footer = document.getElementById("footer");
		var divQuiz;

		livello = Math.round((punteggio*7)/15);
		if(livello != 0)
		livello--;

		div = document.createElement("DIV");
		div.id = "areaRisultato";

		img = document.createElement("IMG");
		switch(livello)
		{
			case 0: img.src = "./img/medagliazero.png"; break;
			case 1: case 2: img.src = './img/medagliabronzo.png'; break;
			case 3: case 4: img.src = './img/medagliaargento.png'; break;
			case 5: case 6: img.src = './img/medagliaoro.png'; break;
		}

		p1 = document.createElement("P");
		p1Text = document.createTextNode("Hai totalizzato un punteggio di " + punteggio + " su 15. Il tuo livello corrisponde a: ");
		p1.appendChild(p1Text);

		h1 = document.createElement("H1");
		h1Text = document.createTextNode(risultati[livello]["codice"]);
		h1.appendChild(h1Text);

		p2 = document.createElement("P");
		p2Text = document.createTextNode(risultati[livello]["descrizione"]);
		p2.appendChild(p2Text);

		a = document.createElement("A");
		a.classList.add("button");
		aText = document.createTextNode("Torna alla home");
		a.setAttribute("href", "index.html")
		a.appendChild(aText);

		div.appendChild(img);
		div.appendChild(p1);
		div.appendChild(h1);
		div.appendChild(p2);
		div.appendChild(a);

		a2 = a.cloneNode(true);
		divQuiz = document.getElementById("areaQuiz");

		div2 = document.createElement("DIV");
		div2.appendChild(a2);
		div2.style.textAlign = "center";

		body.insertBefore(div, divQuiz);
		body.insertBefore(div2, footer);
		div.scrollIntoView();
	}
	catch(e)
	{
		alert("Errore in generaAreaRisultato: " + e);
	}
}

function gestoreMouseOver() 	//Richiamata quando il cursore va sopra a certi elementi, fa apparire dei popup di feedback
{
	try
	{
		this.children[0].classList.add("show");
	}
	catch(e)
	{
		alert("Errore in gestoreMouseOver: " + e);
	}
}

function gestoreMouseOut()	//Richiamata quando il cursore va fuori da certi elementi, fa scomparire i popup di feedback
{
	try
	{
		this.children[0].classList.remove("show");
	}
	catch(e)
	{
		alert("Errore in gestoreMouseOut: " + e);
	}
}

function gestoreClickAreaErrori()	//Richiamata quando viene cliccata una parola del testo tre, la cerchia o fa scomparire il cerchio da quella parola
{
	try
	{
		if(this.classList.contains("cerchiato") && inSvolgimento)
		{
			this.classList.remove("cerchiato");
			numeroErroriCerchiati--;
		}
		else if(numeroErroriCerchiati<5 && inSvolgimento)
		{
			this.classList.add("cerchiato");
			numeroErroriCerchiati++;
		}
	}
	catch(e)
	{
		alert("Errore in gestoreClickAreaErrori: " + e);
	}
}

function gestoreSezione2()	//Richiamata quando viene cliccato il primo bottone "avanti", fa comparire la sezione 2 del test
{
	try
	{
		var p; 
		var pText;

		risposteDateQuiz = [formQuiz.risposta0, formQuiz.risposta1, formQuiz.risposta2, formQuiz.risposta3, formQuiz.risposta4];

		for (var i = 0; i < risposteDateQuiz.length; i++)
		{
			if(risposteDateQuiz[i].value == "")
			{
				if(!erroreMostrato)
				{
					erroreMostrato = true;
					p = document.createElement("P");
					pText = document.createTextNode("Per proseguire è necessario rispondere ad ogni domanda");
					p.id = "messaggioErrore";
					p.appendChild(pText);
					areaQuiz.appendChild(p);
				}
				
				return 0;
			}
		}

		if(erroreMostrato)
		{
			p = document.getElementById("messaggioErrore");
			p.remove();
		}

		for (var i = 0; i < formQuiz.elements.length; i++)
		{
			formQuiz[i].setAttribute("disabled", true);	
		}

		nodoBottoneSez1.remove();
		nodoAreaCompletamento.classList.remove("invisibile");
		nodoAreaCompletamento.scrollIntoView();
	}
	catch(e)
	{
		alert("Errore in gestoreSezione2: " + e);
	}
}

function gestoreSezione3()	//Richiamata quando viene cliccato il secondo bottone "avanti", fa comparire la sezione 3 del test
{
	try
	{
		for(var i = 0; i < formCompletamento.elements.length; i++)
		{
			formCompletamento[i].setAttribute("disabled", true);
		}

		nodoBottoneSez2.remove();
		nodoAreaErrori.classList.remove("invisibile");
		nodoAreaErrori.scrollIntoView();
	}
	catch(e)
	{
		alert("Errore in gestoreSezione3: " + e);
	}
}

function gestoreRevisione()	//Richiamata quando viene cliccato il primo bottone "revisione", fa la revisione del test e richiama la funzione per mostrare il risultato
{
	try
	{
		var risposteDateCompletamento;
		var risposteGiusteCompletamento;
		var punteggio = 0;

		inSvolgimento = false;

		for(var i = 0; i < quiz.length; i++)
		{
			if(risposteDateQuiz[i].value==quiz[i]["rispostaEsatta"])	
			{
				punteggio++;
				risposteDateQuiz[i][risposteDateQuiz[i].value].nextSibling.style.color = "green";
			}
			else
			{
				risposteDateQuiz[i][risposteDateQuiz[i].value].nextSibling.style.color = "red";
				risposteDateQuiz[i][quiz[i]["rispostaEsatta"]].nextSibling.style.color = "green";
			}
		}

		risposteDateCompletamento = [formCompletamento.risposta0.value, formCompletamento.risposta1.value, formCompletamento.risposta2.value, formCompletamento.risposta3.value, formCompletamento.risposta4.value];
		risposteGiusteCompletamento = ["were", "most", "which", "done", "had"];

		for(var i = 0; i < risposteGiusteCompletamento.length; i++)
		{
			if(risposteGiusteCompletamento[i]===risposteDateCompletamento[i].toLowerCase())
			{
				punteggio++;
				formCompletamento[i].style.backgroundColor = "#3fda3f";
			}
			else
			{
				formCompletamento[i].style.backgroundColor = "red";
				nodoInfoPointCompletamento[i].style.display = "inline-block";
				nodoInfoPointCompletamento[i].onmouseover = gestoreMouseOver;
				nodoInfoPointCompletamento[i].onmouseout = gestoreMouseOut;
			}
		}

		for(var i = 0; i < arrayParoleErrate.length; i++)
		{
			arrayParoleErrate[i].classList.add("evidenziato");
			arrayParoleErrate[i].onmouseover = gestoreMouseOver;
			arrayParoleErrate[i].onmouseout = gestoreMouseOut;

			if(arrayParoleErrate[i].classList.contains("cerchiato"))
			{
				punteggio++;
			}
		}

		nodoBottoneRevisione.remove();
		generaAreaRisultato(punteggio);
	}
	catch(e)
	{
		alert("Errore in gestoreRevisione: " + e);
	}
}

function gestoreLoad()
{
	try
	{
		erroreMostrato = false;
		numeroErroriCerchiati = 0;
		inSvolgimento = true;

		nodoFormQuiz = document.getElementById("formQuizId");
		generaQuiz(nodoFormQuiz);

		nodoAreaCompletamento = document.getElementById("areaCompletamento");
		nodoInfoPointCompletamento = document.getElementsByClassName("infoPoint");

		nodoAreaErrori = document.getElementById("areaErrori");
		nodoTestoAreaErrori = document.getElementById("testoAreaErroriId");
		generaTestoConErrori(nodoTestoAreaErrori);
		
		nodoBottoneSez1 = document.getElementById("bottoneSez1");
		nodoBottoneSez2 = document.getElementById("bottoneSez2");
		nodoBottoneRevisione = document.getElementById("bottoneRevisione")

		nodoBottoneSez1.onclick = gestoreSezione2;
		nodoBottoneSez2.onclick = gestoreSezione3;
		nodoBottoneRevisione.onclick = gestoreRevisione;
	}
	catch(e)
	{
		alert("Errore in gestoreLoad: " + e);
	}
}

window.onload = gestoreLoad;