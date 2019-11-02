import collatz from "../collatz.js";

export default (context, { limit, scale, angle, background, strokeColor }) => {

  const { width, height } = context.canvas;

  context.strokeStyle = strokeColor;
  context.fillStyle = background;

  // reset and make classic cartesian to the middle bottom
  context.clearRect(0, 0, width, height);
  context.fillRect(0, 0, width, height);  
  context.setTransform(1, 0, 0, -1, 0, height/2);  

  const renderSequence = (int) => {
    const sequence = collatz(int);
    //console.log(sequence);

    for (let int of sequence) {
      (int & 1) 
        ? context.rotate(Math.log(3) * angle)
        : context.rotate(Math.log(2) * (-angle));
  
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(0, scale);
      context.translate(0, scale);
    } 
    
    context.stroke();
  };

  for (let int = 1; int < limit; int++) {
    context.setTransform(1, 0, 0, -1, 0, height/2); 
    renderSequence(int);
  }  
  
};
