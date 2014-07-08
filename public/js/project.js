/*
// project.js
// 
// Project class
//
 */ 


// 
function Project(title, description) {
	this.title = title;
	this.description = description;
	this.tasks = {
		
	};
}


/*

 */
Project.prototype.addTask = function(project, task) {
	console.log(project);
	console.log(task);
}

