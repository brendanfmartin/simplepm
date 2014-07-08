// main.js
// 
'use strict';

$(function(){

	var printProject = function(project){
		$('input.project_name_input').val(project.title);
		$('input.project_description_input').val(project.description);
	}

	var firstObject = localStorage.getSingleObject();
	if(firstObject) {
		printProject(firstObject);
	} else {
		console.log('no objects')
	}

	// change to function named enterToTab
	$('body').on('keydown', 'input', function(e){
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
				localStorage.setObject(projectTitle, JSON.stringify(newProject));
				var confirmNotification = new Notification('Project Saved!', 'info');
				confirmNotification.alert();
			} catch(e) {
				var failureNotification = new Notification('Project failed to save!', 'failure');
				failureNotification.alert();
				console.log(e);
			}
		}
	});


	
	
	// $('.project_description').html('<p>'+Project.description+'</p>');


	
	


	var $task_list = $('.task_list');
	$('.task_input').on('blur', function(e){
		if($('.task_input')[0].value != ''){
			var data = $('.task_input');
			console.log(data[0].value);
			$task_list.append('<div class="task">' +
			'<span value="'+data[0].value+'" id="'+data[0].value+'" />'
			+ data[0].value
			+'</div>');
		}
	});


	// $task_list.append('<div class="task">' +
	// 		'<span value="'+data.task_value+'" class="'+data.task_class+' task_title" id="'+data.task_name+'" />'
	// 		+ data.task_name
	// 		+'<span class="task_delete">x</span>'
	// 		+'</div>');
		
	
		

	// $('#new_task').submit(function(e){
	// 	e.preventDefault();
	// 	var values = {};
	// 	$.each($('#new_task').serializeArray(), function(i, field) {
	// 	    values[field.name] = field.value;
	// 	});
	// 	if(values['task_name'].length > 0) {
	// 		socket.emit('new_task', values);
	// 	}
	// 	$('#new_task').trigger('reset');
	// })

	
	


	

});