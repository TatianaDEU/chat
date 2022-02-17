export function getTime(){

    const date = new Date();
    const hours = date.getHours();
    let minutes = date.getMinutes();
    minutes = (minutes<10) ? '0'+minutes: minutes;
    return `${hours}:${minutes}`;
  }