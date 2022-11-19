export const msToTime = (num) =>{
     // 1- Convert to seconds:
     let seconds = num / 1000;
     // 2- Extract hours:
     let hours = parseInt( seconds / 3600 ); // 3,600 seconds in 1 hour
     seconds = seconds % 3600; // seconds remaining after extracting hours
     // 3- Extract minutes:
     let minutes = parseInt( seconds / 60 ); // 60 seconds in 1 minute
     // 4- Keep only seconds not extracted to minutes:
     seconds = seconds % 60;
    hours = zeroPad(hours,2)
    minutes = zeroPad(minutes,2)
    seconds = zeroPad(seconds,2)
    let time = `${hours}:${minutes}:${seconds}` 
    return time
}

const zeroPad = (num, places) => String(num).padStart(places, '0')


export const timeToMs=(tmstr)=>{
    if (typeof (tmstr)=='number') return tmstr
    // console.log(tmstr);
    let hours = tmstr.slice(0,2)
    // console.log(hours);
    hours = parseInt(hours)*60*60*1000
    let minutes = tmstr.slice(3,5)
    // console.log(minutes);
    minutes = parseInt(minutes)*60*1000
    let seconds = tmstr.slice(6,8)
    // console.log(seconds);
    seconds= parseInt(seconds)*1000
    let ms =hours+minutes+seconds
    return ms
    
}