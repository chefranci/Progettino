
var app = angular.module ('progettino', []);

    app.controller ('lista', function($scope){
        $scope.Nome = "";
        $scope.Cognome = "";
        $scope.submitted = false;
        $scope.filtered = false;
        $scope.displayAlert= false;
    
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
            if ($scope.Nome.length == 0 || $scope.Cognome.length == 0){
                $scope.displayAlert= true;
            } else {
                $scope.displayAlert= false;
                $scope.persone.push({
                'Nome': $scope.Nome,
                'Cognome': $scope.Cognome,
            })
          $scope.submitted=true;
        }};
          $scope.RemoveElement = function(index){
            if ($scope.submitted){
            $scope.persone.splice(index,1);}
            else {
                return false;
            }         
          };

          $scope.filterElement = function(){
              $scope.filtered= true;
          }
          
    });

