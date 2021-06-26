class Game {
          constructor(){
        
          }
        
          getState(){
            var gameStateRef  = database.ref('gameState');
            gameStateRef.on("value",function(data){
               gameState = data.val();
            })
        
          }
        
          update(state){
            database.ref('/').update({
              gameState: state
            });
          }
        
          async start(){
            if(gameState === 0){
              player = new Player();
              var playerCountRef = await database.ref('playerCount').once("value");
              if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
              }
              form = new Form()
              form.display();
            }
        
            car1 = createSprite(100,200);
            car1.addImage("car1",car1_img);
            car2 = createSprite(300,200);
            car2.addImage("car2",car2_img);
            w = random(200, 400)
            h = random(-height*4, height-300)
          
           // banana = createSprite(100,200);
            //banana.addImage("banana",banana_img);
            //apple = createSprite(250,200);
            //apple.addImage("apple",apple_img);
            //orange = createSprite(400,200);
            //orange.addImage("orange",orange_img);
            //melon = createSprite(550,200);
            //melon.addImage("melon",melon_img);
            cars = [car1, car2];
            //fruit = [banana, apple, orange, melon];
            
          }
        
          play(){
            form.hide();
        
            Player.getPlayerInfo();
            
            if(allPlayers !== undefined){
              //var display_position = 100;
              image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
        
              //index of the array
              var index = 0;
              
              if (frameCount %20 === 0){
                fruits = createSprite(random(100, 1000), 0, 100, 100)
                fruits.velocityY = 6
                var rand = Math.round(random(1, 4))
                switch(rand){
                  case 1: fruits.addImage(banana_img)
                  break
                  case 2: fruits.addImage(melon_img)
                  break
                  case 3: fruits.addImage(apple_img)
                  break
                  case 4: fruits.addImage(orange_img)
                  break

                }
                fruitGroup.add(fruits)
              }

              //x and y position of the cars
              var x =200;
              var y;
              
              for(var plr in allPlayers){
                //add 1 to the index for every loop
                index = index + 1 ;
                x = 200 + (index * 200) + allPlayers[plr].xPos;
                y = 500

                if(player.index !== null){
                  for(var i = 0; i < fruitGroup.length; i++){
                    if(fruitGroup.get(i).isTouching(player)){
                      fruitGroup[i].destroy()
                      player.score += 100
                      player.update()
                    }
                  }
                }
                
                //position the cars a little away from each other in x direction
               // x = x + 200;
                //use data form the database to display the cars in y direction
              // y = displayHeight - allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                ///print(w)
                //print(h)
                //melon.x = w;
                //melon.y = h;
               // melon.y += 50
                ///orange.x = w;
                //orange.y = h;
                ///orange.y += 50
                ///apple.x = w;
                //apple.y = h;
                //apple.y += 50
                //banana.x = w;
                //banana.y = h;
                //banana.y += 10
                
                textAlign(CENTER);
                textSize(20);
                text(allPlayers[plr].name + str(player.score), cars[index - 1].x, cars[index - 1].y + 75);
                if (index === player.index){
                  //cars[index - 1].shapeColor = "red";
                  camera.position.x = displayWidth/2;
                  camera.position.y = cars[index-1].y
                }
               
              }
        
            }
        
            
            if(player.distance < 2150){
              if(keyIsDown(38) && player.index !== null){
                yVel -= 0.9
                print(yeha)
              }
              if(keyIsDown(37) && player.index !== null){
                  xVel -= 0.9;
              }
              if(keyIsDown(39) && player.index !== null){
                xVel += 0.9
              }

              else{
                  yVel *= 0.985;
                  xVel *= 0.985;
              }


            }
        
          //move the car
          player.distance += yVel;
          yVel *= 0.98;
          player.xPos += xVel;
          xVel *= 0.985;
          player.update();
          //display sprites
          drawSprites();
        }
           
      
        }
