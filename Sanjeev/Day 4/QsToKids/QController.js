/**
 * Created by admin on 09-10-2015.
 */
angModule.controller('QController', function($scope , QuestionaireService){
    var dataObj = "",
        url="";
    $scope.data = {};
    $scope.data.question="";
    $scope.data.answer="";
    $scope.data.option1="";
    $scope.data.option2="";
    $scope.data.option3="";
    $scope.data.option4="";
    $scope.message ="";
    $scope.err ="";

    $scope.submitQuestion = function(){
        if(QuestionaireService.validateForm($scope.data)){
            $scope.err ="";
            $scope.message = "";
            $scope.message = QuestionaireService.addQuestion($scope.data , url)

            return $scope.message;
        }else{
            $scope.err ="Please Enter Valid Question details";

            return $scope.err;
        }

    }



});
