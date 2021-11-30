function hanoi(nbr, depart, arrivee ){
  if (nbr === 0) return;

  hanoi(nbr-1, depart , 6 - (depart + arrivee));
  
  console.log(depart, "->", arrivee);
  
  hanoi(nbr-1, 6 - (depart + arrivee) , arrivee);
}

hanoi(3,1,3);