class Form{
    constructor(){
        this.title = createElement('h2');
        this.input = createInput("Name");
        this.button = createButton("PLAY");
        this.greeting = createElement('h3')

    }
    display(){

        
        this.title.position(displayWidth/2-50,0)
       this.title.html("CAR RACING GAME")

        
        this.input.position(displayWidth/2-40,displayHeight/2-80);

       
        this.button.position(displayWidth/2+30,displayHeight/2);


        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update();

           

             
             this.greeting.position(displayWidth/2-70,displayHeight/4);
             this.greeting.html("Hello "+player.name);

        })
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
}