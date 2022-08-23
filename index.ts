const ptB2 = (a:number, b: number, c: number) => {
  try {
   if(a ==0) {
     if(b==0){
          console.log("Phương trình có nghiệm là :",-c);
          return;
     }
     console.log("x=",-c/b);
     return;
   }
   const delta: number = Math.sqrt(b*b-4*a*c)
   if(delta<0){
     console.log("Phương trình vô nghiệm");
     return;
   }
     else if (delta == 0 ){
          console.log("X=",-b/(2*c));
          return;
   }
     else if (delta >0){
          console.log("x1:",(-b+Math.sqrt(delta)/2*a) , "x2:",(-b+Math.sqrt(delta)/2*a) );
   }
   else {
     console.log("Phương trình vô nghiệm");
   }
  }
   catch(err) {
    
    console.log("Bạn nhập sai");
   }
  };

