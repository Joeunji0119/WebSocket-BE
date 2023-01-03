import { Server } from 'socket.io';

const io = new Server(3000, {
	cors: {
		origin: ['http://localhost:3002', 'http://10.58.52.154:3002'],
		credentials: true,
	},
});

io.on('connect', socket => {
	socket.on('은지', data => {
		console.log(data);
	});
	socket.emit('hi', 'everyone');
});

io.listen(3001);
