function myfun() {
    var sum = Number(document.getElementById('num').value);
    var sum1 = Number(document.getElementById('num1').value);
    var opera = document.getElementById("select_box").value;
    var result = "result:" + sum + opera + sum1 + "=";

    //console.log(sum,opera,sum1);
    /*if (opera == "+") {
        result += sum + sum1;
    }
    else if (opera == "-") {
        result += sum - sum1;
    }
    else if (opera == "*") {
        result += sum * sum1;
    }
    else if (opera == "/") {
        result += sum / sum1;
    }*/
    switch(opera){
        case "+":
            result += sum + sum1;
            break;
        case "-":
            result += sum - sum1;
            break;
        case "*":
            result += sum * sum1;
            break;
        case "/":
           
           result +=(sum / sum1).toFixed(2) 
           
             break;
        default:
            result += "invalid number";
            break;  
    }
    
    document.getElementById('result').innerText = result;
    
}

