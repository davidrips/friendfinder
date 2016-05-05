$(document).ready(function(){
var users = [

	{name: 'Doug',
		photo: 'http://i.huffpost.com/gen/1272503/images/o-DOUG-facebook.jpg',
		scores: [3,4,2,4,2,1,3,5,3,1]
	},
	{name: 'Christie',
		photo: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwi8zov1k8LMAhXJqB4KHXX-A-QQjBwIBA&url=http%3A%2F%2Fwww.nj.gov%2Fgovernor%2Flibrary%2Fphotos%2Fgov_christie_press_lrg.jpg&psig=AFQjCNGL46nxI5N9tXdUyb9j6mkQVanUgA&ust=1462510928260727',
		scores: [1,1,1,1,1,1,1,1,1,1]
	},
	{name: 'James',
		photo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/LeBron_James_(15662939969).jpg',
		scores: [5,5,5,5,5,5,5,5,5,5]
	},
];

var userData ={};

	$("#submit").on('click', function(){
		 userData = {
			name: $("#name").val(),
			photo:$("#photo").val(),
			scores: [parseInt($('#q1').val()),parseInt($('#q2').val()),parseInt($('#q3').val()),parseInt($('#q4').val()),parseInt($('#q5').val()),parseInt($('#q6').val()),parseInt($('#q7').val()),parseInt($('#q8').val()),parseInt($('#q9').val()),parseInt($('#q10').val())]
		}
		console.log(userData);
		console.log(users);
		compare();
		users.push(userData);
	});


function compare(){
	var totalDifference =[];
	
		for (var i=0; i<users.length; i++){
			var compUser = users[i].scores;
			var currUser = userData.scores;
			var combDif = [];
			

			for(var j=0; j<compUser.length; j++){
				var indivDif = Math.abs(compUser[j]-currUser[j])
				combDif.push(indivDif)
			};


			var stepDif = combDif.reduce(add, 0);
			function add(a,b){
				return a + b;
			}
			
			console.log(stepDif)
			totalDifference.push(stepDif)
			console.log(stepDif)
			console.log(totalDifference)
		};

		
		var x = totalDifference.indexOf(Math.min.apply(Math,totalDifference));

		console.log(users[x].name)
		render(x);
};

function render(which){

	$('#matchName').text(users[which].name);
	$('#matchImg').attr("src", users[which].photo);
	$('#resultsModal').modal('toggle');


}













})


