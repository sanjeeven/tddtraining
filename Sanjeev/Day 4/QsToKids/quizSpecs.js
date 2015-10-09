/**
 * Created by admin on 09-10-2015.
 */

describe("Check Quiz Module", function(){
    var $scope,
        ctrl,
        quizService;
    beforeEach(module('quizModule'));
    beforeEach(inject(function($controller, $rootScope){
        $scope = $rootScope.$new();
        ctrl = $controller('QuizController',{
            $scope : $scope
        });
    }));
    beforeEach(inject(function(_QuizService_){
        quizService = _QuizService_;
    }));

    it("should not have controller to be undefined", function(){
        expect($scope).not.toBeUndefined();
    });

    it("should have question be defined", function(){
       expect($scope.question).toBeDefined();
    });

    it("should have question be defined as an Object in the beginning", function(){
        expect($scope.question).toEqual({});
    });

    it("should have quizService defined", function(){
        expect(quizService).not.toBeNull();
    });
});
