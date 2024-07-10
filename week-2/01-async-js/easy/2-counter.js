let count = 0;
 const timer = () => {
    count +=1;
    console.log(count);
    setTimeout(timer,1000)
 }
 timer();