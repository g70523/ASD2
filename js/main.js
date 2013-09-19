// Louise Whitney
// August
// 1309
// ASD Project


$('#user').on('pageinit', function(){

//	var users = $('<input id="show" type="button" value="SHOW USERS">').appendTo($('#userContent'));
//	users.on('click', showUser);

//	var form = $('<input id="showForm" type="button" value="SHOW FORM">').appendTo($('#userContent'));
//	form.on('click', showForm);

	$('#button').on('click', function(){
		var form = $('#form').serializeArray();
		var key = Math.floor(Math.random()*1000001);
		localStorage.setItem(key, JSON.stringify(form));
		showUser();

	});

});//End #USER page

$("#local").on('pageinit', function(){

	//console.log(localStorage);

	for(var i=0, x = localStorage.length; i<x; i++){
			var newDiv  = $('<div class="newDiv">'+'</div>'+'</br>').appendTo('#locContent');
			var navLi	= $('<ul class="nav"></ul>').appendTo(newDiv);
			var key 	= localStorage.key(i);
			var value   = localStorage.getItem(key);
			var json 	= JSON.parse(value);
			for(var n in json){
				var display = json[n].name+": "+json[n].value;
				$('<p>'+ display + '</p>').appendTo('#locContent');
			}

			var link = $('<a href="#" class="edit">EDIT</a>');
			link.key = key;
			link.css("padding", "20px");
			link.css("text-decoration", "none");
			link.css("color", "red");
			link.prependTo(navLi);

			var kill = $('<a href="#" class="delete">DELETE</a>');
			kill.css("text-decoration","none");
			kill.css("color", "red");
			kill.key = key;
			var userDel = $('.delete');
			kill.prependTo(navLi);
		
		}
//};	
		var homeButton = $('<a href="#home" data-role="button">HOME</a>');
		$(homeButton).css({"text-decoration":"none",
						"color":"black",
						"display":"block",
						"border":"solid 1px black",
						"padding":"10px",
						"text-align":"center",
						"text-shadow":"none",
						"background-color":"green",
						"border-radius":"10px"});
			$(homeButton).appendTo('#locContent');

});//END #LOCALSTORAGE page

$("#json").on('pageinit', function(){

		$.ajax({
			url: "xhr/user.json",
			type: "GET",
			dataType: "json",
			success: function(data){
				for(var i=0, x=data.Users.length; i<x; i++){
					var user = data.Users[i];
					$(''+
						'<div class="userContent">'+
							'<h2>'+ user.Name +'</h2>'+
							'<p>'+ "Type: "+ user.Food +'</p>'+
							'<p>'+ "Favorite Food: " + user.List +'</p>'+
							'<p>'+ "Mainly Found in: "+ user.Location +'</p>'+
							'</div>'
					).appendTo('#jsonContent');

			};
		//	$('.userContent h2').css("color","red");
		//	$('.userContent').css("text-align","center");
			var homeButton = $('<a href="#home" data-role="button">HOME</a>');
			$(homeButton).css({"text-decoration":"none",
						"color":"black",
						"display":"block",
						"border":"solid 1px black",
						"padding":"10px",
						"text-align":"center",
						"text-shadow":"none",
						"background-color":"green",
						"border-radius":"10px"});
			$(homeButton).appendTo('#jsonContent');
		}
	});
});
$('#xml').on('pageinit', function(){


		$.ajax({
            type: "GET",
            url: "xhr/user.xml",
            dataType: "xml",
            success: function(xml) {

            	$(xml).find('items').each(function(){
            		$(this).find('item').each(function(){
            			var name 			= $(this).find('name').text();
            			var food 			= $(this).find('food').text();
             			var list  			= $(this).find('list').text(); 	
            			var location  		= $(this).find('location').text();

            			$('<div class="xcontent">'+
            				'<h2>'+"Name: "+name+'</h2>'+
            				'<p>'+"Food: "+food+'</p>'+
            				'<p>'+"List: "+list+'</p>'+
            				'<p>'+"Location: "+location+'</p>'+
            				'</div>').appendTo('#xmlContent')
            		});
            	});
            var homeButton = $('<a href="#home" data-role="button">HOME</a>');
			$(homeButton).css({"text-decoration":"none",
						"color":"black",
						"display":"block",
						"border":"solid 1px black",
						"padding":"10px",
						"text-align":"center",
						"text-shadow":"none",
						"background-color":"green",
						"border-radius":"10px"});
			$(homeButton).appendTo('#xmlContent');	

            }

        });    

});