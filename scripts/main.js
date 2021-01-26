
// Loop to display gallery images
let files = {'png': 35};
for (let ext in files) {
  for (let i = 0; i < files[ext]; i++) {
    let src = `../images/markham-maes-art-${i+1}.${ext}`
    let img = new Image();
    img.src = src;
    
    document.getElementById("gallery-test").appendChild(img);
  }
}