var myApp = angular.module("myToDoApp", []);
		
		myApp.controller("myToDoListController", function($scope)		
		
		{
			var todoList = 
			[
				{task: 'Task 1', description: 'Study Angular JS', done: 'false'},
				{task: 'Task 2', description: 'Master Angular JS', done: 'false'}
			];
			
			$scope.todoList = todoList;
			
			$scope.addNewTask = function()
			{			
				$scope.todoList.push
				(
					{
						task: $scope.newTask.task,
						description: $scope.newTask.description,
						done: false
					}
				);
				
				$scope.newTask.task = "";
				$scope.newTask.description = "";
			};
			
			/*
			$scope.deleteCompletedTasks = function()
			{
				if($scope.todoList.done)
					{
						
						$scope.todoList.push
				(
					{
						task: "hello!",
						description: "ASD",
						done: true
					}
				);
						
						
						
						
						
						$scope.todoList.splice
						(
							$index			
						)
					}
			};*/
		});	