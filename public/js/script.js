// var URL = 'http://localhost:3000';
var URL = 'https://fleurish.herokuapp.com';

// signUp

 $('#createAccount').click(function(){
		var createAccount = {
			"firstName": $('#firstName').val(),
			"lastName": $('#lastName').val(),
			"signInEmail": $('#signInEmail').val(),
			"password": $('#createPassword').val(),
			"confirmPassword": $('#retypePassword').val()
		}

		$.post(URL+'/create-Account', createAccount, function(err,response){
			createAccount;
		})

		$('#createAccount').trigger("reset");

	});


// login

	$('#loginButton').click(function(){     
		var loginForm = {
			"loginEmail": $('#loginEmail').val(),
			"loginPassword": $('#loginPassword').val(),
		}

		$.post(URL+'/login-Account', loginForm, function(err,response){
			loginForm;
		});

		$('#loginForm').trigger("reset");

		$(document).ready(function(){
			$("#lostPasswordBtn").on('click', function(){
				$(".popup1").fadeIn('slow');
			});
		});

	});  
