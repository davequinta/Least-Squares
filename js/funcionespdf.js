function CasoDiscretoPDF(){
  var pdf = new jsPDF('p', 'pt', 'letter');
  var y=100; //Variable para llevar posicion en x del texto
  var x=40;//variable para llevar posicion en y del texto
  var p=y;
  pdf.setFontSize(18);
  pdf.setFont('Courier', 'bold');
  pdf.setTextColor(0,2,50);
  pdf.text('Reporte de Minimos Cuadrados - Caso Discreto', x,45)
  pdf.setFontSize(12);
  pdf.text('by "SMIRNOV"', x, 60)
  pdf.setFont('Helvetica', 'Oblique');
  pdf.setFontSize(12);
  pdf.setTextColor(0,0,0);
  pdf.text('Pares ordenados ingresados por el usuario: ', x, y)
  //variable n = al numero de puntos ingresados
  var n = 12, i2=0, i3=0;
  for (var i = 0; i < n; i++) {
    if (i<5) {
      pdf.text('( x , y )', 290, y)
      y+=20;
    } else {
      if (i<10) {
        pdf.text('( x , y )', 290+80, p+20*i2)
        i2++;
      } else {
        pdf.text('( x , y )', 290+160, p+20*i3)
        i3++;
      }
    }

    }
  y+=20;
  pdf.text('Ecuaciones Normales encontradas: ', x ,y)
  // variable e = numero de ecuaciones normales
  var e = 4;
  for (var i = 0; i < e; i++) {
    pdf.text('Ecuación ' + i + ': ', 290, y)
    pdf.text('Q1x + Q2x^2 - Q3x^3', 355, y)
    y+=20;
    }
  y+=20;
  pdf.text('Coeficientes encontradas: ', x ,y)
// variable f = numero de incognitas encontradas
  var f = 4;
  for (var i = 0; i < f; i++) {
    pdf.text('Q ' + i + '= ', 290, y)
    pdf.text(i + '', 315, y)
    y+=20;
    }
  y+=20;
  pdf.text('Polinomio generado mediante Minimos Cuadrados: ', x, y)
  pdf.setFont('Courier', 'bold');
  pdf.setFontSize(15)
  y+=30;
  var polinomio='0.2558x^5 + 2.3x^3 + 1.5x^2 -0.365'; // Llenar variable con respuesta XD
  pdf.text(polinomio, x, y)
  y+=30;
  pdf.setFont('Helvetica', 'Oblique');
  pdf.setFontSize(12);
  pdf.text('A continuación presentamos una tabla con los valores interpolados con nuestro polinomio: ', x, y)
  y+=30;
  x+=165;
//pdf.rect(x,y, 525,200);
  pdf.setLineWidth(1);
  pdf.setDrawColor(0,2,50);
  pdf.line(x,y,x+200,y);
  pdf.line(x,y+20,x+200,y+20);
  pdf.line(x,y,x,y+20);
  pdf.line(x+200,y,x+200,y+20);
  pdf.line(x+100,y,x+100,y+20);
  pdf.text('valor en x', x+10, y+16);
  pdf.text('f(x)', x+110, y+16);
  y+=20;
  var inter=5;//variable que tiene el array de valores a interpolar
  var eva; // variable que tiene el array de los valores ya interpolados
  var reales; // variable que tiene el array de valores evaluados en funcion original
  for (var i = 0; i < inter; i++) {
    pdf.line(x,y,x,y+20);
    pdf.line(x+200,y,x+200,y+20);
    pdf.line(x+100,y,x+100,y+20);
    pdf.text('valor '+i, x+10, y+16);
    pdf.text('valor evaluado '+i, x+110, y+16);
    y+=20;
  }
  pdf.line(x,y,x+200,y);

  pdf.save('Smirnov');
}
function CasoContinuoPDF(){
  var pdf = new jsPDF('p', 'pt', 'letter');
  var y=100; //Variable para llevar posicion en x del texto
  var x=40;//variable para llevar posicion en y del texto
  var p=y;
  pdf.setFontSize(18);
  pdf.setFont('Courier', 'bold');
  pdf.setTextColor(0,2,50);
  pdf.text('Reporte de Minimos Cuadrados - Caso Continuo', x,45)
  pdf.setFontSize(12);
  pdf.text('by "SMIRNOV"', x, 60)
  pdf.setFont('Helvetica', 'Oblique');
  pdf.setFontSize(12);
  pdf.setTextColor(0,0,0);
  pdf.text('Función ingresada por el usuario: ', x, y)
  //variable que almacena la funcion
  var fun='f(x)= cos(5*x)+sin^2(6*x)+x'
  pdf.text(fun, 290, y);
  y+=40;
  pdf.text('Ecuaciones Normales encontradas: ', x ,y)
  // variable e = numero de ecuaciones normales
  var e = 4;
  for (var i = 0; i < e; i++) {
    pdf.text('Ecuación ' + i + ': ', 290, y)
    pdf.text('Q1x + Q2x^2 - Q3x^3', 355, y)
    y+=20;
    }
  y+=20;
  pdf.text('Coeficientes encontradas: ', x ,y)
  // variable f = numero de incognitas encontradas
  var f = 4;
  for (var i = 0; i < f; i++) {
    pdf.text('Q ' + i + '= ', 290, y)
    pdf.text(i + '', 315, y)
    y+=20;
    }
  y+=20;
  pdf.text('Polinomio generado mediante Minimos Cuadrados: ', x, y)
  pdf.setFont('Courier', 'bold');
  pdf.setFontSize(15)
  y+=30;
  var polinomio='0.2558x^5 + 2.3x^3 + 1.5x^2 -0.365'; // Llenar variable con respuesta XD
  pdf.text(polinomio, x, y)
  y+=30;
  pdf.setFont('Helvetica', 'Oblique');
  pdf.setFontSize(12);
  pdf.text('A continuación presentamos una tabla con los valores interpolados con nuestro polinomio: ', x, y)
  y+=30;
  x+=75;
  // Creacion de la tabla
  pdf.setLineWidth(1);
  pdf.setDrawColor(0,2,50);
  pdf.line(x,y,x+400,y);//linea horizontal superior de la fila de titulos
  pdf.line(x,y+20,x+400,y+20);//linea horizontal inferior de la fila de titulos
  pdf.line(x,y,x,y+20);//linea lateral izquierda de la fila de titulos
  pdf.line(x+200,y,x+200,y+20);// linea divisora central de la fila de titulos
  pdf.line(x+100,y,x+100,y+20);//linea divisora izquierda de la fila de titulos
  pdf.line(x+300,y,x+300,y+20);//linea divisora derecha de la fila de titulos
  pdf.line(x+400,y,x+400,y+20);//linea lateral derecha de la fila de titulos
  pdf.text('valor en x', x+10, y+16);
  pdf.text('f(x)', x+110, y+16);
  pdf.text('valor real', x+210, y+16);
  pdf.text('ERP', x+310,y+16);
  y+=20;
  var inter=5;//variable que tiene el array de valores a interpolar
  var eva; // variable que tiene el array de los valores ya interpolados
  for (var i = 0; i < inter; i++) {
    pdf.line(x,y,x,y+20);//linea lateral izquierda
    pdf.line(x+200,y,x+200,y+20);//linea divisora central
    pdf.line(x+100,y,x+100,y+20);//linea divisora izquierda
    pdf.line(x+300,y,x+300,y+20);//linea divisora derecha
    pdf.line(x+400,y,x+400,y+20);//linea lateral derecha
    pdf.text('valor '+i, x+10, y+16);
    pdf.text('valor evaluado '+i, x+110, y+16);
    pdf.text('valor real ' +i, x+210, y+16);
    pdf.text('ERP '+i, x+310,y+16);
    y+=20;
  }
  pdf.line(x,y,x+400,y);

  pdf.save('Smirnov');
}
