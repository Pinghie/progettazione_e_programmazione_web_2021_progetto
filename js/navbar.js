var navbar;
var burgerButton;


function gestoreBurgerButton() //Richiamata quando viene cliccato l'hamburger, fa un toggle del menu a cascata della navbar
{
	try
	{
		navbar.classList.toggle("responsive");
	}

	catch(e)
	{
		alert("Errore in gestoreBurgerButton: " + e);
	}
}

function gestoreLoadNavbar()
{
	try
	{
		navbar = document.getElementById("myTopnav");
		burgerButton = document.getElementById("burgerButton");

		burgerButton.onclick = gestoreBurgerButton;
	}

	catch(e)
	{
		alert("Errore in gestoreLoadNavbar (navbar.js): " + e);
	}
}