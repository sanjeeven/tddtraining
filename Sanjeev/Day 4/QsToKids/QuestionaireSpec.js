/**
 * Created by admin on 09-10-2015.
 */
describe("Questionaire Specs", function(){
    var questionairService,myScope,subject;

    beforeEach(function(){
        module("Questionaire");

        console.log("reached");


        inject(function($controller, $rootScope) {
            myScope = $rootScope.$new();
            subject = $controller('QController', {
                $scope: myScope

            });
        });

        inject(function(_QuestionaireService_){
            questionairService = _QuestionaireService_;
            questionairService.addQuestion=function(){return true;};
        });
    });
    it("test funtion for initial setup",function(){
        expect(true).toBe(true);
    });
    it("should have question, answer, option1, option2, option3, option4 to be defined in rootScope", function(){
            expect(myScope).toBeDefined();
            expect(myScope.data.question).toBeDefined();
            expect(myScope.data.answer).not.toBeUndefined();
            expect(myScope.data.option1).not.toBeUndefined();
            expect(myScope.data.option2).not.toBeUndefined();
            expect(myScope.data.option3).not.toBeUndefined();
            expect(myScope.data.option4).not.toBeUndefined();
            expect(myScope.submitQuestion).not.toBeUndefined();
        }
    );
    it("QuestionairService be defined sucessfully",function(){
        expect(questionairService).not.toBeUndefined();
    });

    it("Questions should not have empty values", function(){
        var data = {
            question : 'What is 1+1',
            option1 : '2',
            option2 : '4',
            option3 : '3',
            option4 : '1',
            answer : '2'
        };
        expect(questionairService.validateForm(data)).toBeTruthy();
    });

    it("should return error message on trying with empty details for question", function(){
        myScope.data = {
            question : '',
            option1 : 'as',
            option2 : 's',
            option3 : 'd',
            option4 : 'f',
            answer : '1'
        };
        var errmsg = myScope.submitQuestion();
        expect(errmsg).toBe("Please Enter Valid Question details");
    });

    it("should return true when question saved through QuestionairService (faked)", function(){
        myScope.data = {
            question : 'What is 1+1',
            option1 : '2',
            option2 : '4',
            option3 : '3',
            option4 : '1',
            answer : '2'
        };

        var errmsg = myScope.submitQuestion();
        expect(errmsg).toBe(true);
    });

});