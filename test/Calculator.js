/**
 * Created by SamuelSahonero on 3/3/2016.
 */
function Calculator(){
}

Calculator.prototype.draw = function(){

    var operator = 0;

    var h = document.createElement("H1");
    h.id = "display";
    var t = document.createTextNode(operator);
    h.appendChild(t);
    document.body.appendChild(h);

    for(i=0; i < 10; i++)
    {
        var btn = document.createElement("BUTTON");
        btn.id = i;
        var t = document.createTextNode(i);
        btn.appendChild(t);

        btn.addEventListener("click", function(){
            //operator = btn.text;
            //document.getElementById("display").textContent = operator;
        });

        document.body.appendChild(btn);
    }

    for(j=0; j < 6; j++)
    {
        var operator = '';
        switch (j) {
            case 0:
                operator = "=";
                break;
            case 1:
                operator = "+";
                break;
            case 2:
                operator = "-";
                break;
            case 3:
                operator = "*";
                break;
            case 4:
                operator = "/";
                break;
            case 5:
                operator = "C";
                break;
        }

        var btn = document.createElement("BUTTON");
        btn.id = operator;
        var t = document.createTextNode(operator);
        btn.appendChild(t);
        document.body.appendChild(btn);
    }


    //document.body.appendChild(btn);
};


var calculator = new Calculator();
calculator.draw();
