let num=8;

switch(true){
  case num % 3 == 0 && num % 5 == 0:
  console.log('３と５の倍数です');
  break;

  case num % 3 == 0:
  console.log('３の倍数です');
  break;
  
  case num % 5 == 0:
  console.log('５の倍数です');
  break;
  
  default: console.log(num);
  break;
  

}




