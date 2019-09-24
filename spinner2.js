let spinner = ["|","/","-","\\","|","/","-","\\","|"];


function animate(index) {
  if(index === spinner.length) {
    return;
  } 
  setTimeout(function(){
    process.stdout.write("\r" + spinner[index++]);
    animate(index)
  },300)
}

animate(0)

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r\|  '); 
// }, 900);

// setTimeout(() => {
 
//   process.stdout.write('\r/  '); 
// }, 1100);

// setTimeout(() => {
 
//   process.stdout.write('\r-  '); 
// }, 1300);

// setTimeout(() => {
 
//   process.stdout.write('\r\\   '); 
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r\|  '); 
// }, 1700);