function gestoreLoad()
{
	try
	{
		gestoreLoadAccordion();
		gestoreLoadNavbar();
	}
	catch(e)
	{
		alert("Errore in gestoreLoad (gestoreFile.js): " + e);
	}
}

window.onload = gestoreLoad;