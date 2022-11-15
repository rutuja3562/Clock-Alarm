const alarmSubmit = document.getElementById("submitAlarm");
alarmSubmit.addEventListener("click", setAlarm);
const stopAlarm = document
  .getElementById("stopAlarm")
  .addEventListener("click", () => {
    // reload()
    window.location.reload(true);
  });

var audio = new Audio(
  "audio.mp3"
  //   "https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
);
function ringBell() {
  audio.play();
}
function setAlarm() {
    const alarm = document.getElementById("alarm").value;
    const time = document.getElementById("time").value
    let str = alarm+" "+time
    // console.log("alarm",str,time,typeof(str));
    
  const alarmDate = new Date(str);
  const nowDate = new Date();
  console.log(alarmDate - nowDate);
  const timetoalarm = alarmDate - nowDate;

  let n=alarm.length;
  for(let i=0;i<nowDate;i++){
  if (alarm[i] >= 0) {
    setTimeout(() => {
      ringBell();
    }, alarm[i]);
  }
}
}
// 2022-11-15 17:04:00
