
try{
    var a = String(true);
    if (isNaN(a)){
        throw new Error('a is not a number');
    }
    console.log(a**2)
}catch(e){
    console.log(`Error: ${e}`);
}finally {
   console.log(`Value of a :${a}`);  
}
    
