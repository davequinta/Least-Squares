function calculate() {
     
    //Numero de datos
    var n=10;
    //Grado del polinimo
    var m=1;
    
    //document.write('Ejercicio de grado ' + m + '<br><br>');
    //Puntos
     var x = [4.0,4.2,4.5,4.7,5.1,5.5,5.9,6.3,6.8,7.1];
     var y = [102.56,113.18,130.11,142.05,167.53,195.14,224.87,256.73,299.50,326.72];
    
   
    //var x= [1,2,5,15,25,30,35,40];
    //var y= [99,95,85,55,30,24,30,15];
    
    
    document.getElementById('dpol').innerHTML=DiscPol(n,m,x,y);
    document.getElementById('dexp').innerHTML=DiscExpo(n,x,y);
    document.getElementById('dpot').innerHTML=DiscPoten(n,x,y);



   
}

//Funcion de integral definida
function d_integral(fun, li, ls){
    var StrIntg = 'integrate(' + fun + ',x,'+li+','+ls+')';
    return math.eval(StrIntg);
    
}



/*
Crea array bidimensional que no sé por qué 
no salía con var array = [[]]; xD
*/
function createMatrix(rows){
    var matrix = new Array();
    for(var i=0;i<rows;i++){
        matrix.push([]);
    }
    return matrix;
}

//Array sumatorias de "x"; n numero de datos, m grado del polinomio deseado
function fillCoef1(n, m, x){
    var aux;
    var coef1 = new Array();
     for(var i=0;i<(m*2)+1;i++){
        aux=0;
        for(var k=0;k<n;k++){
            aux+=Math.pow(x[k],i);   
        }
        coef1.push(aux);
    }
    
    return coef1;
}

//Matriz coeficientes de Ecc Normales
function fillMatrix(m, array){
    var ecc = createMatrix(m+1);
    for (var i=0;i<m+1;i++){
        //document.wr`ite(i);    
        for(var j=0;j<m+1;j++){
            //document.write(matrix.length);
            //matrix[i][j]=coef1[(i+j)];
            ecc[i].push(array[i+j]);   
            //document.write('<br>'+'>>'+(i+ j));
        }
    }
    return ecc;
}

/*Array coeficientes a lo que están igualadas las eccuaciones
Sum(y), sum(xy), etc
*/
function fillCoef2(n,m,x,y){
    var aux;
    var coef2 = new Array();
    
    for(var k=0; k<m+1; k++){
		aux=0;
		for(var i=0; i < n; i++){
            aux+=(Math.pow(x[i], k))*y[i];
        }
        coef2.push(aux);	
	}  
    return coef2;
   
}

/*Resuelve el sistema de eccuaciones con Math.usolve(parm1,parm2):
Parm1 es una matrix, parm2 un array
*/
function solveEcc(matrix, array){
    return numeric.solve(matrix,array);
}


/**GENERADOR DE ECUACIONES **/

//Crea polinomio de grado m
function createPol(values,m){
    var fun = '';
    for(var i=0;i<m+1;i++){
        fun+= (values[i] + "*x^" +i);
        if(i<m){
            fun+='+';
        }
    }
    return fun;
}

function createExpFun(values){
    return math.exp(values[0])+'*e^('+values[1]+'*x)';
}

function createPotFun(values){
    return math.exp(values[0])+'*x^'+values[1];
    
}

/**FUNCIONES PARA LOS METODOS **/


//Funcion para caso discreto polinomial
function DiscPol(n,m,x,y){
    var coef1 = fillCoef1(n,m,x);
    //Matrix
    var matrix = fillMatrix(m,coef1);
    //Arreglo coeficientes "xy"
    var coef2 = fillCoef2(n,m,x,y);
    //document.write(coef2);
    //Valores de las incognitas
    var values = solveEcc(matrix,coef2); 
    return createPol(values,m);    
}
function DiscExpo(n,x,y){
    var coef1 = fillCoef1(n,1,x);
    var matrix = fillMatrix(1,coef1);
    var coef2 = fillCoef2(n,1,x,math.log(y));
    var values = solveEcc(matrix,coef2); 
    console.log(values)
    //Funcion --
    return createExpFun(values);
    
}


function DiscPoten(n,x,y){
    
    var coef1 = fillCoef1(n,1,math.log(x));
    var matrix = fillMatrix(1,coef1);
    var coef2 = fillCoef2(n,1,math.log(x),math.log(y));
    var values = solveEcc(matrix,coef2); 
    console.log(values);
    //Funcion --
    return createPotFun(values);
    
}

function DiscLog(n,x,y){
    var coef1 = fillCoef2(n,1,math.log(x),y);
    var promy = (fillCoef1(n,1,y))/n;
    var coef2 = fillCoef1(n,1,math.log(y));
    var coef3 = fillCoef1(n,2,math.log(x));
    var coef4 = fillCoef1(n,1,math.log(x));   
    var promx = coef4/n;
    var promly = coef2/n;

    var a = (coef1 -(promy * coef2))/(coef3-(promx * coef4));

    var b = promy - (a * promly);

    return b;
    
}



