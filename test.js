(function(){

    var app = angular.module('tictac',[]);

    var count = 0;

    app.controller('GameController',['$http', function($http){
        var tictac = this;
        tictac.matrix = [];
        
        $http.get('matrix.json').success(function(data){
        tictac.matrix = data;
        });

        this.counter = count;

        this.select = function(x) {

            var p1 = x.slice(1, 2);
            var p2 = x.slice(2, 3);
            var flag = 0;
            var player = "draw";
            
            if (tictac.matrix[p1][p2].symbol == 0 ) {


            
                if (this.counter % 2 == 0) {
                    console.log(x);
                    document.getElementById(x).style.backgroundColor = "#00BCD4";
                    tictac.matrix[p1][p2].symbol = 'x';
                    
                }
                else{
                    console.log(x);
                    document.getElementById(x).style.backgroundColor = "#004D40";
                    tictac.matrix[p1][p2].symbol = 'o';
                }
                this.counter++;
                console.log(this.counter);                 

            }
            
            if (this.counter > 4) {

                if(tictac.matrix[0][0].symbol == 'x' || tictac.matrix[0][0].symbol == 'o'){
                    if (((tictac.matrix[0][0].symbol == tictac.matrix[0][1].symbol) && (tictac.matrix[0][0].symbol == tictac.matrix[0][2].symbol)) || 
                        ((tictac.matrix[0][0].symbol == tictac.matrix[1][0].symbol) && (tictac.matrix[0][0].symbol == tictac.matrix[2][0].symbol)) || 
                        ((tictac.matrix[0][0].symbol == tictac.matrix[1][1].symbol) && (tictac.matrix[0][0].symbol == tictac.matrix[2][2].symbol))   ) {
                            flag = tictac.matrix[0][0].symbol;
                    }
                }

                if(tictac.matrix[1][1].symbol == 'x' || tictac.matrix[1][1].symbol == 'o'){
                    if (((tictac.matrix[1][1].symbol == tictac.matrix[0][1].symbol) && (tictac.matrix[1][1].symbol == tictac.matrix[2][1].symbol)) || 
                        ((tictac.matrix[1][1].symbol == tictac.matrix[1][0].symbol) && (tictac.matrix[1][1].symbol == tictac.matrix[1][2].symbol)) ||
                        ((tictac.matrix[1][1].symbol == tictac.matrix[2][0].symbol) && (tictac.matrix[1][1].symbol == tictac.matrix[0][2].symbol))  ) {
                            flag = tictac.matrix[1][1].symbol;
                    }
                }

                if(tictac.matrix[2][2].symbol == 'x' || tictac.matrix[2][2].symbol == 'o'){
                    if (((tictac.matrix[2][2].symbol == tictac.matrix[0][2].symbol) && (tictac.matrix[2][2].symbol == tictac.matrix[1][2].symbol)) || 
                        ((tictac.matrix[2][2].symbol == tictac.matrix[2][0].symbol) && (tictac.matrix[2][2].symbol == tictac.matrix[2][1].symbol))   ) {
                            flag = tictac.matrix[2][2].symbol;
                    }
                }               

                if (flag == 'x' || flag == 'o') {
                    if (flag == 'x') {
                        player = "BLUE";
                    }
                    else{
                        player = "GREEN";
                    }                    
                    for (var i = 0; i < 3; i++) { 
                        for (var j = 0; j < 3; j++) {
                            console.log(tictac.matrix[i][j].symbol);
                        }                                    
                    }
                    console.log("GAME OVER");
                    document.getElementById("board").style.backgroundColor = "#000000"; 
                    document.getElementById("heading").innerHTML = "GAME OVER PLAYER " + player + " WINS" ; 

                }         

            }
        } 

    }]);

})();


