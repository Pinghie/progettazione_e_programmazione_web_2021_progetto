var quiz =
	[
		{
			domanda: "What role did NOT cover Chaplin in his film production?",
			risposte : 
			[
				"Director",
				"Music composer",
				"Make-up artist"
			],

			rispostaEsatta: 2
		},

		{
			domanda: "How did he become successful and popolar worldwide?",
			risposte : 
			[
				"Thanks to silent films",
				"Thanks to his long career",
				"Thanks to his character 'The Tramp'"
			],

			rispostaEsatta: 2
		},

		{
			domanda: "When his career has started?",
			risposte : 
			[
				"75 years ago",
				"Around 1902",
				"In 1977"
			],

			rispostaEsatta: 1
		},

		{
			domanda: "How his mother influenced him?",
			risposte : 
			[
				"She played with him",
				"She let him see through the window",
				"She imitated people"
			],

			rispostaEsatta: 2
		},

		{
			domanda: "What Sigmund Freud thought about Chaplin?",
			risposte : 
			[
				"Chaplin's films are full of biographical elements",
				"Chaplin had a sad childhood",
				"Chaplin acted like he was a child"
			],

			rispostaEsatta: 1
		}
	];

var testo = "One day, a poor men was starving. He needed to eat something so he decided to go to the town market. When no one was looking, he rapidly stole two fishes and started running. A couple of police officers were walking down the street and saw the man. They went after him, and after a little run, he was stopped. The tramp telled : “Please, I’m hungry!”, and they letted him go.";


var messaggiPopUp =
	[
		{
			parola: "men",
			testoPopUp: "In questo caso, dovrebbe essere al singolare: 'man'."
		},

		{
			parola: "fishes",
			testoPopUp: "Il plurale di 'fish' è invariabile: fish."
		},

		{
			parola: "were",
			testoPopUp: "Il soggetto è 'couple', perciò il verbo deve essere coniugato alla terza persona singolare: 'was'."
		},

		{
			parola: "telled",
			testoPopUp: "Il passato del verbo 'to tell' è: 'told'."
		},

		{
			parola: "letted",
			testoPopUp: "Il passato del verbo 'to let' è invariabile: 'to let'."
		}

	]

var risultati =
	[
		{
			codice: "NA",
			descrizione: "Non hai raggiunto il punteggio minimo per la classificazione QUER."
		},

		{
			codice: "A1",
			descrizione: "È capace di utilizzare e comprendere solo frasi di uso comune, basilari. È in grado di presentarsi, fare domande riguardo cose concrete, e dare le proprie informazioni anagrafiche. È in grado di interagire con altre persone purché esse parlino in modo lento e chiaro."
		},

		{
			codice: "A2",
			descrizione: "È capace di utilizzare e comprendere frasi comuni relative ad argomenti concreti. È in grado di comunicare in modo discorsivo ma semplice, riguardo lo scambio di informazioni tipiche della routine. Sa parlare della sua vita ed esprimere bisogni immediati."
		},

		{
			codice: "B1",
			descrizione: "È capace di comprendere, comunicare e scrivere testi riguardo ad ambiti comuni della vita di tutti i giorni (scuola, lavoro, sport, hobby…). È in grado di esprimere concetti astratti e di spiegare dei ragionamenti."
		},

		{
			codice: "B2",
			descrizione: "È capace di comprendere testi di media difficoltà sia riguardo temi concreti che astratti. Sa inoltre discutere riguardo il campo su cui è specializzato. È in grado di comunicare senza troppa fatica con un madrelingua e di produrre testi complessi."
		},

		{
			codice: "C1",
			descrizione: "È capace di comprendere pienamente testi di elevata complessità. Si esprime in modo naturale e flessibile riguardo ogni ambito. È in grado di produrre testi a livello professionale – accademico."
		},

		{
			codice: "C2",
			descrizione: "Comprende senza problemi la lingua, in qualunque sua forma. È capace di riassumere perfettamente le informazioni e di comunicarle in modo spontaneo, scorrevole ed esatto. È in grado di evidenziare anche le più piccole sfumature di significato."
		}
	]