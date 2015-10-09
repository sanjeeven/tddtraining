/**
 * Created by admin on 09-10-2015.
 */

angModule.service('QuestionaireService',['$http',function($http){

    this.addQuestion = function(questions , options){

    }
    this.validateForm = function(data){
        var returnBool = true,
            pattern =  /^\s*$/g;
        for(i in data){
            if(!(returnBool = !(pattern.test(data[i])))){
                break;
            }
        }
        return returnBool;
    }

    this.addQuestion = function (data , url) {
        var message = "";
        dataObj = {
            question:data.question,
            option1:data.option1,
            option2:data.option2,
            option3:data.option3,
            option4:data.option4,
            answer:data.answer,
        }
        var res = $http.post(url, dataObj);
        res.success(function(data, status, headers, config) {
            message = data;
        });
        res.error(function(data, status, headers, config) {
            message = "Question not inserted"
        });
        return message;
    }
}]);
