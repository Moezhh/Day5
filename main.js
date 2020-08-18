var i, x, y = [], espace = ' ', nbretage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?") ;
i = 0 ; x = '' ;

     do 
         {
         espace = " ".repeat(25-i);	
	     x = x + "#";
         i = i + 1 ;
         y[i]= espace + x + "\n" ;
         }
        while ( i <  nbretage );
    if ( nbretage < 26 && nbretage > 0 )
         alert( 'Voici la pyramide :' + "\n" + y );
  

