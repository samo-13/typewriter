let sentence = "hello there from lighthouse labs";
let delay = 0;


let typewriter = function(sentence) {
  for (const char of sentence) {
    setTimeout(() => {
      // process.stdout.write instead of console.log to have more control and avoid automatically adding an extra "newline character" at the end each time.
      process.stdout.write(char);
    }, delay += 50) // increments the delay
  }
  setTimeout(() => {
    // process.stdout.write instead of console.log to have more control and avoid automatically adding an extra "newline character" at the end each time.
    process.stdout.write('\n');
  }, sentence.length * 100) // adds new line when the above is complete
};

typewriter(`Hi, I'm Sarah`)