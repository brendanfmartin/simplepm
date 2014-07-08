// main.js
// 
'use strict';

$(function(){

	// var allObjects = localStorage.getAllObjectNames();
	// if(allObjects) {
	// 	$('.open_projects').append('<ul></ul>');
	// 	for (var i = allObjects.length - 1; i >= 0; i--) {
	// 		console.log(allObjects[i]);
	// 		$('.open_projects ul').append('<li>'+allObjects[i]+'</li>');
	// 		// function to add to page... maybe named printProjects?
	// 	};
	// } else {
	// 	console.log('no objects')
	// }

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