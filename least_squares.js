function calculate() {
     
    //Numero de datos
    var n=10;
    //Grado del polinimo
    var m=1;
    
    //document.write('Ejercicio de grado ' + m + '<br><br>');
    //Puntos
     var x = [4.0,4.2,4.5,4.7,5.1,5.5,5.9,6.3,6.8,7.1];
     var y = [102.56,113.18,130.11,142.05,167.53,195.14,224.87,256.73,299.50,326.72];
    
   
    
    
    
   //document.write(math.log(x));
    
    //document.write(DiscPol(n,m,x,y));
    
    document.getElementById('demo').innerHTML=DiscPol(n,m,x,y);
    
    //document.write(coef1);
    
    //coef1[0]=1
   /* 
    var aux;
    var aux1=0;
    //coef1[0].push(3); 
    
    var  coef1 = new Array();
    var coef2 = new Array();
    
    var num;
    
   
    
    
    for(var i=0;i<(m*2)+1;i++){
        aux=0;
        for(var k=0;k<n;k++){
            aux+=Math.pow(x[k],i);   
        }
        coef1.push(aux);
    }


    
    //Probando coeficientes
    for(var i=0;i<coef1.length;i++){
        document.write(coef1[i] + '<br>');
    }
    
    document.write('<br>');
    
    document.write('Ecuaciones normales'+'<br><br>');
    
    var ecc = createMatrix(m+1);
    
    
    for (var i=0;i<m+1;i++){
        //document.write(i);    
        for(var j=0;j<m+1;j++){
            //document.write(matrix.length);
            //matrix[i][j]=coef1[(i+j)];
            ecc[i].push(coef1[i+j]);   
            //document.write('<br>'+'>>'+(i+ j));
        }
    }   
    
    
    for(var k=0; k<m+1; k++){
		aux=0;
		for(var i=0; i<n; i++){
            aux+=(Math.pow(x[i], k))*y[i];
        }
        coef2.push(aux);	
	}  
    document.write('Coeficientes 1 <br>' )
    for(var i=0;i<m+1;i++){
        document.write(ecc[i]+'<br>');
    }
    
    
    document.write('<br>'+'Coeficientes 2' +'<br>');
    
    for(var i=0;i<m+1;i++){
        document.write(coef2[i] +"<br>")
    }
    
    document.write('<br>'+'Valores de incognitas' +'<br>');

    var incognitas=numeric.solve(ecc,coef2); 
    for(var i=0;i<m+1;i++){
        document.write(incognitas[i]+'<br>');
    }
    
    var fun='';
    for(var i=0;i<m+1;i++){
        fun+= (incognitas[i] + "x^" +i);
        if(i<m){
            fun+='+';
        }
    }
    
    //document.write(fun);
    document.write('<br>');
    
    var str = '2';

    */
    
    //document.write('Hola');
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
function fillCoef1(n, m, x, y){
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

//Crea polinomio de grado m
function createPol(values,m){
    var fun = '';
    for(var i=0;i<m+1;i++){
        fun+= (values[i] + "x^" +i);
        if(i<m){
            fun+='+';
        }
    }
    return fun;
}

//Funcion para caso discreto polinomial
function DiscPol(n,m,x,y){
    var coef1 = fillCoef1(n,m,x,y);
    //Matrix
    var matrix = fillMatrix(m,coef1);
    //Arreglo coeficientes "xy"
    var coef2 = fillCoef2(n,m,x,y);
    //document.write(coef2);
    //Valores de las incognitas
    var values = solveEcc(matrix,coef2); 
    
    return createPol(values,m);    
}
function DiscLog(n,m,x,y){
     
}







