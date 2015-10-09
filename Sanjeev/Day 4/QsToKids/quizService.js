/**
 * Created by admin on 09-10-2015.
 */
quizMod.service('QuizService',['$http' , function($http){
    var loadQuestion = function(){
        var res = $http.post(url,data)
        res.success = function(data, status , headers, config){

        }
    }
}]);
