/* 
  Approach for integrating p5 into React adapted from:
  https://dev.to/christiankastner/integrating-p5-js-with-react-i0d

  The below sketch implements this tutorial:
  https://v1.p5js.org/tutorials/get-started/
*/
export const Sketch = (s) => {
  s.setup = () => {
    s.createCanvas(600, 400);
  };

  s.draw = () => {
    s.background(135, 206, 235);

    // sun
    s.fill('yellow');
    s.stroke('orange');
    s.strokeWeight(20);
    const radius = 50;
    s.circle(600 - radius, radius, radius * 2);

    // reset
    s.stroke(0);
    s.strokeWeight(1);

    // grass
    s.fill('green');
    s.rect(0, 200, 600, 200);

    // emojis
    s.textSize(75);
    s.text('🌸', 100, 250);
    s.text('🐞', s.mouseX, s.mouseY);
  };
};
