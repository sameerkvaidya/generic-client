angular.module('ItemModule')
.controller('ItemController', 
	['$scope', '$http', '$modal',
	 '$compile','uiCalendarConfig',
	 '$route', '$routeParams', '$location', 
	 '$upload', 	
	function($scope, $http, $modal, 
		$compile, uiCalendarConfig,
		$route, $routeParams, $location,
		$upload
		){

		
			$scope.upload = function(files) {
		        if (files && files.length) {
		            for (var i = 0; i < files.length; i++) {
		                var file = files[i];
		                $upload.upload({
		                     url: '/file/upload',
		                    // ,fields: {
		                    //     'username': $scope.username
		                    // },
		                    file: file
		                }).progress(function (evt) {
		                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
		                    console.log('progress: ' + progressPercentage + '% ' +
		                                evt.config.file.name);
		                }).success(function (data, status, headers, config) {
		                    console.log('file ' + config.file.name + 'uploaded. Response: ' +
		                                JSON.stringify(data));
		                    $scope.uploaded_files = data
		                }).error(function (err){
		                	$scope.uploaded_files = err.message;
		                });
		            }
		        }
		    };

		    /**
		     * download
		     */

		     $scope.download = function(path){
		     	console.log(" path to download file :"+path);

		     	return $http.get('/file/download', {
			      params: {
			        path: path
			      }
			    }).then(function(response){
			      return response;
			    });

		     }




		}]);