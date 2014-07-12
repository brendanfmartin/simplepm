// main.js
// 
// 

App = Ember.Application.create({
	LOG_TRANSITIONS: true
});



var projects = [{
  id: '1',
  title:"First Ember.js Project",
  description:"A task manager in ember.js",
  tasks:{
    0:"Create sample JSON",
    1:"Modify current local.storage project"
  }
}, {
  id: '2',
  title:"Second Project",
  description:"A task manager in ember.js",
  tasks:{
    0:"Create sample JSON",
    1:"Modify current local.storage project"
  }
}];

// var projects = localStorage.getAllObjects();


App.Router.map(function() {
	this.resource('about');
	this.resource('projects', function(){
		this.resource('project', { path: ':project_id' });
		this.resource('new_project');
	});
});


App.ProjectsRoute = Ember.Route.extend({
	model: function(){
		return projects;
	}
});

App.ProjectRoute = Ember.Route.extend({
	model: function(params){
		return projects.findBy('id', params.project_id);
	}
})

// App.Router.map(function() {
//   this.resource('projects', function() {
//     this.resource('project', { path: ':project_id' });
//   });
// });

// App.projectsRoute = Ember.Route.extend({
//   model: function() {
//     return projects;
//   }
// });

// App.projectRoute = Ember.Route.extend({
//   model: function(params) {
//     return projects.findBy('id', params.project_id);
//   }
// });

// App.projectController = Ember.ObjectController.extend({
//   isEditing: false,

//   edit: function() {
//     this.set('isEditing', true);
//   },

//   doneEditing: function() {
//     this.set('isEditing', false);
//     this.get('store').commit();
//   }
// });

// Ember.Handlebars.helper('format-date', function(date) {
//   return moment(date).fromNow();
// });



// $(function(){



// 	var printProject = function(project){
// 		$('input.project_name_input').val(project.title);
// 		$('input.project_description_input').val(project.description);
// 		var tasksLength = Object.keys(project.tasks).length;
// 		for (var i = 0; i < tasksLength; i++) {
// 			$('.task_list').append('<div class="task">'+project.tasks[i]+'</div>')
// 		};
// 	}


// 	var firstObject = localStorage.getSingleObject();
// 	if(firstObject) {
// 		printProject(firstObject);
// 	} else {
// 		console.log('no objects')
// 	}


// 	// change to function named enterToTab
// 	$('.project_name_input, .project_description_input').on('keydown', function(e){
// 		var self = $(this);
// 		if(e.keyCode == 13) {
// 			var focusable = $('body').find('input').filter(':visible');
// 			var next = focusable.eq(focusable.index(this)+1);
// 			if(next.length) {
// 				next.focus();
// 			}
// 			return false;
// 		}
// 	});


// 	// change to function saveProjectOnInput?
// 	// saves project on input
// 	// TODO - saves too much, creates a new storage all the time
// 	$('.project_name_input, .project_description_input').on('blur', function(e){

// 		var projectTitle = $('.project_name_input')[0].value;
// 		var projectDescription = $('.project_description_input')[0].value;

// 		if($('.project_name_input')[0].value != '' && $('.project_description_input')[0].value != '') {
// 			try {
// 				// check to see if project already exists
// 				var newProject = new Project(projectTitle, projectDescription);
// 				localStorage.setObject(projectTitle, (newProject));
// 				var confirmNotification = new Notification('Project Saved!', 'info');
// 				confirmNotification.alert();
// 			} catch(e) {
// 				var failureNotification = new Notification('Project failed to save!', 'failure');
// 				failureNotification.alert();
// 				console.log(e);
// 			}
// 		}
// 	});


// 	// pressing enter on inputs moves to next input
// 	$('.project_name_input, .project_description_input').on('keydown', function(e){
// 		var self = $(this);
// 		if(e.keyCode == 13) {
// 			var focusable = $('body').find('input').filter(':visible');
// 			var next = focusable.eq(focusable.index(this)+1);
// 			if(next.length) {
// 				next.focus();
// 			}
// 			return false;
// 		}
// 	});

	
// 	$('.task_input').on('keyup', function(e){
// 		var self = $(this);
// 		if(e.keyCode == 13) {
// 			if($('.task_input')[0].value != ''){
// 				var task = $('.task_input')[0].value;
// 				var project = $('.project_name_input')[0].value;
// 				localStorage.addTask(project,task);
// 				$('.task_list').append('<div class="task">'+task+'</div>');
// 				$('.task_input').val('');
// 			}
// 		}
		
// 	});

// });