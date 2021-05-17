var app = angular.module("myapp",[]);
var res = document.getElementById('result');
app.controller('control',function($scope){
    $scope.title = "Web App – Simple Interest Calculator";
    $scope.input = {};
    principal=0;
    $scope.calculate = function(){
        if (principal == 0) {
            window.alert("Enter a positive number for principal");
            document.getElementById("principal").focus();
        }
        else {
            x = $scope.input;
            principal = Number(x.principal);
            rate = Number(x.rate);
            time = Number(x.time);
            ans = principal * time * rate / 100;
            if (!isNaN(ans))
                res.innerHTML = "If you deposit <span id='mark'>" + parseInt(principal)+"</span><br> \
                 at an interest rate of <span id='mark'>"+ parseInt(rate) +",</span><br> \
                 You will recieve an amount of <span id='mark'>" + parseInt(ans) + "</span><br> \
                 in the year <span id='mark'>" + parseInt(principal) +"</span>";
        }
    };
});
