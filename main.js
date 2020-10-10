

let i = 0;
let txt = 'I\'M A Photographer.'; /* The text */
let speed = 120; /* The speed/duration of the effect in milliseconds */

(function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
})();