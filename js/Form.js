class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset=createButton("Reset");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);
    this.reset.position(displayWidth-100,50)
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.reset.mousePressed(()=>{
     player.updateCount(0);
     game.update(0);
     player.rank=0;
     player.updateCarsAtEnd();
    })
2
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

  }
  showRank(rank){
    var div = createDiv("Player won "+rank+" Game")
    div.position(1000,200)
    div.size(200,200)
    div.style('font-size', '24px'); 
    // Set the font-size of text
    div.style('border', '1px solid black'); 
    // Set the font-size of text 
    div.style('text-align', 'center'); 
    // Set the font color 
    div.style('color', 'white');
  }
}
