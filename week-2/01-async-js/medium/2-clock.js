const clock = () => {
    const time= new Date ();
    const hours =time.getHours()>9? time.getHours():`0${time.getHours()}`;
    const minutes =time.getMinutes()>9? time.getMinutes():`0${time.getMinutes()}`;
    const second =time.getSeconds()>9? time.getSeconds():`0${time.getSeconds()}`;

    console.log(`${hours}:${minutes}:${second}`);
};

setInterval(clock,1000)