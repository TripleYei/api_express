const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Mirar en /yei'));

app.get("/yei", (req, res) => {

	const yei = [

	{

		id: 1,
		name: "shell_scripts php",
		url: "github.com/TripleYei/shell_scripts_php"
	},
	{

		id: 2,
		name: "PowerShell",
		url: "github.com/TripleYei/powershell_scripts"
	},
	{

		id: 3,
		name: "scripts PHP",
		url: "github.com/TripleYei/windows_cmd_php"
	},
	{

		id: 4,
		name: "Herramienta whois",
		url: "github.com/TripleYei/whois"
	}


		   ];

	res.json(yei);




})
app.listen(port, () => console.log(`Ejecutando localhost:3000`));