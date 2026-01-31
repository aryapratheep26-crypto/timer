// Works in browser (window.prompt) or Node.js (prompt-sync or readline fallback)
if (typeof prompt === 'function') {
	const arya = prompt('enter the name');
	console.log(arya);
	if (typeof document !== 'undefined' && document.body) {
		const p = document.createElement('p');
		p.textContent = 'Name: ' + arya;
		document.body.appendChild(p);
	}
} else if (typeof require !== 'undefined') {
	// Node.js environment
	try {
		const promptSync = require('prompt-sync')();
		const arya = promptSync('enter the name: ');
		console.log(arya);
	} catch (e) {
		const readline = require('readline');
		const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
		rl.question('enter the name: ', name => { console.log(name); rl.close(); });
	}
} else {
	console.log('No prompt available in this environment.');
}