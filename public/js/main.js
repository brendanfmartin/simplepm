// main.js
// 
$(function(){

			// set method for storing JSON object in localStorage
			Storage.prototype.setObject = function(key, value) {
			    this.setItem(key, JSON.stringify(value));
			}

			// get method for retrieving JSON object in localStorage
			Storage.prototype.getObject = function(key) {
			    var value = this.getItem(key);
			    return value && JSON.parse(value);
			}

			$('.project_name_input, .project_description_input').on('blur', function(e){
				if($('.project_name_input')[0].value != '' && $('.project_description_input')[0].value != '') {
					var testNotification = new Notification('Project Saved!', 'info');
					testNotification.alert();
				}
			});

			// saving sample project
			localStorage.setObject('project', JSON.stringify(Project));
			// var projectObject = localStorage.getObject('project');
			// if(projectObject.title){
			// 	$('.project_name').html('<h1>'+Project.title+'</h1>');
			// 	$('.project_name_input').css('display', 'none');
			// }

			
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