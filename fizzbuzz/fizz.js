var numeros=100;

for(i=1;i<=numeros;i++)
{
  if(esDivisible(i,3))
  {
      document.write("fizz");
  }
  if(esDivisible(i,5))
  {
    document.write("buzz");
  }
  if(!esDivisible(i,3) && !esDivisible(i,5))
  {
    document.write(i);
  }
    document.write("<br/>");
}

function esDivisible(num,divisor)
{
  if (num%divisor==0)
  {
     return true;
  }
  else
  {
    return false;
  }


}
