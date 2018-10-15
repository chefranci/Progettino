
var app = angular.module ('progettino', []);

    app.controller ('lista', function($scope){
        $scope.Nome = "";
        $scope.Cognome = "";
        $scope.submitted = false;
        $scope.persone = [
            {
                "Nome" :"Francesca",
                "Cognome" : "Ciccarelli"
            },
            {
                "Nome" :"Mario",
                "Cognome" :"Rossi"
            },
            {
                "Nome": "Vincenzo",
                "Cognome": "Verdi"
            },
        ]
        $scope.addElement = function(){
            $scope.persone.push({
            'Nome': $scope.Nome,
            'Cognome': $scope.Cognome,
            
          });
          $scope.submitted=true;
          }
          $scope.RemoveElement = function(index){

            $scope.persone.splice(index,1);
          $scope.submitted=true;
          }

    });

