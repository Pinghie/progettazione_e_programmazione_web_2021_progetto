var accordion;

function gestoreAccordion()//richiamata quando viene cliccato un accordion, regola la visualizzazione del contenuto
{
	try
	{
		this.classList.toggle("activeAccordion");

	    var panel = this.nextElementSibling;

	    if(panel.style.maxHeight) 
	    {
	    	panel.style.maxHeight = null;
	    }
	    else 
	    {
	     	panel.style.maxHeight = panel.scrollHeight + "px";
	    } 
	}
	catch(e)
	{
		alert("Errore in gestoreAccordion: " + e);
	}
}

function gestoreLoadAccordion()
{
	try
	{
		accordion = document.getElementsByClassName("accordion");
		for (var i = 0; i < accordion.length; i++)
		{
			accordion[i].onclick = gestoreAccordion;
		}
	}
	catch(e)
	{
		alert("Errore in gestoreLoadAccordion: " + e);
	}
}