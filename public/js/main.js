// main.js
// 
'use strict';

$(function(){



	var printProject = function(project){
		$('input.project_name_input').val(project.title);
		$('input.project_description_input').val(project.description);
		var tasksLength = Object.keys(project.tasks).length;
		for (var i = 0; i < tasksLength; i++) {
			$('.task_list').append('<div class="task">'+project.tasks[i]+'</div>')
		};
	}


	// var textarea = $('textarea_expand')
	// var limit = 200;

	// textarea.oninput = function() {
	//   textarea.style.height = "";
	//   textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px";
	// };

	var firstObject = localStorage.getSingleObject();
	if(firstObject) {
		printProject(firstObject);
	} else {
		console.log('no objects')
	}

	// change to function named enterToTab
	
	$('.project_name_input, .project_description_input').on('keydown', function(e){
		var self = $(this);
		if(e.keyCode == 13) {
			var focusable = $('body').find('input').filter(':visible');
			var next = focusable.eq(focusable.index(this)+1);
			if(next.length) {
				next.focus();
			}
			return false;
		}
	});

	// change to function saveProjectOnInput?
	$('.project_name_input, .project_description_input').on('blur', function(e){

		var projectTitle = $('.project_name_input')[0].value;
		var projectDescription = $('.project_description_input')[0].value;

		if($('.project_name_input')[0].value != '' && $('.project_description_input')[0].value != '') {
			try {
				// check to see if project already exists
				var newProject = new Project(projectTitle, projectDescription);
				localStorage.setObject(projectTitle, (newProject));
				var confirmNotification = new Notification('Project Saved!', 'info');
				confirmNotification.alert();
			} catch(e) {
				var failureNotification = new Notification('Project failed to save!', 'failure');
				failureNotification.alert();
				console.log(e);
			}
		}
	});


	$('.project_name_input, .project_description_input').on('keydown', function(e){
		var self = $(this);
		if(e.keyCode == 13) {
			var focusable = $('body').find('input').filter(':visible');
			var next = focusable.eq(focusable.index(this)+1);
			if(next.length) {
				next.focus();
			}
			return false;
		}
	});

	
	$('.task_input').on('keyup', function(e){
		var self = $(this);
		if(e.keyCode == 13) {
			if($('.task_input')[0].value != ''){
				var task = $('.task_input')[0].value;
				var project = $('.project_name_input')[0].value;
				localStorage.addTask(project,task);
				$('.task_list').append('<div class="task">'+task+'</div>');
				$('.task_input').val('');
			}
		}
		
	});



	

});