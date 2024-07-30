function gestoreLoad()
{
	try
	{
		gestoreLoadNavbar();
	}
	catch (e)
	{
		alert("Errore in gestoreLoad (gestoreLoadNavbar.js): " + e);
	}
}

window.onload = gestoreLoad;