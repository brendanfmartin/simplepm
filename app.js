
// includes
var 
	app	= require('express')(),
	http	= require('http').Server(app);
	io 		= require('socket.io')(http);


app.get('/', function(req, res){
	res.sendfile('public/index.html');
});

app.get('*', function(req, res) {
	console.log(req.originalUrl.replace('/', ''));
	res.sendfile(req.originalUrl.replace('/', ''));
});

io.on('connection', function(socket){
	// connected
	console.log('a user connected');
	// disconnected
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});


	// task_checked
	socket.on('task_checked',function(data){
		io.emit('task_checked',data);
	});

	// task_deleted
	socket.on('task_deleted',function(data){
		console.log('task_deleted')
		io.emit('task_deleted',data);
	});


	socket.on('new_task', function(data){
		// console.log(data.task_name);
		var task = new Task(data.task_name.toString());
	});

});

http.listen(3000, function(){
  	console.log('listening on *:3000');
});



// object
// a project is a task 
// this is the theory behind this module
// 

var taskId = 0;

function Task(name) {
	this.task_name = name || '';
	this.id = taskId++;
	this.completed = false;
	io.emit('new_task', this);
};

Task.prototype.save = function() {
	if(id) {
		// update url
	} else {
		// save new url
		// in new url 
			// INSERT INTO tasks (id,name) VALUES (nextval(tasks_seq),this.name) RETURNING id;
		
		io.emit('task_checked', data);
	}
}

Task.prototype.delete = function() {
	// delete url
		// remove but add to history 
}


Task.prototype.complete = function() {
	this.completed = true;
}




