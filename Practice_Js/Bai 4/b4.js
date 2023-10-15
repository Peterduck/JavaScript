document.getElementById("button").onclick = function(){
   let a = document.getElementById("Abox").value;
   a = Number(a);
   
   let b = document.getElementById("Bbox").value;
   b = Number(b);

   let c = document.getElementById("Cbox").value;
   c = Number(c);

   let p = (a+b+b); 

   if((a!=0 && b!=0 && c!= 0) && ((a+b)>c || (a+c)>b|| (b+c) > a)){
        let result = Math.sqrt(p*(p-a)*(p-b)*(p-c));
        document.getElementById("result").innerHTML="Triangle area is: "+result;
   }
   else {
        document.getElementById("result").innerHTML="Triangle doesn't exist"
   }
}