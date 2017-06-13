const spawn = require('child_process').spawn;
const server = spawn('caddy');

server.on('close', (code) => {
	process.exit(code);
});