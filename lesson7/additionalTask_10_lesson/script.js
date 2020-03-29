let btn = document.getElementById('btn1'),
    size = document.getElementById('measure'),
    fontElem = document.getElementById('font'),
    bgColor = document.getElementById('bg'),
    message = document.getElementById('text1');

class Options {
  constructor(width = 200, height = 200, bg = "blue", fontSize = 14, jcc = 'center', text = "hello. How are you??") {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.jcc = jcc;
    this.text = text;
  }
  createDiv () {
    let item = document.createElement('div');
    document.body.append(item);
    item.classList.add('box');
    item.style.cssText = `width:${this.width}px; height:${this.height}px; background-color:${this.bg}; font-size:${this.fontSize}px; justify-content:${this.jcc};`
    item.textContent = this.text;

  }
    
  
}

  btn.addEventListener('click', function() {
    let sizeValue = size.value.split(","),
        figure  = new Options(sizeValue[0], sizeValue[1], bgColor.value, fontElem.value, "end", message.value);
        console.log(message.value);

    figure.createDiv();
  });

