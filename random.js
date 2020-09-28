//create shield power up
//High speed power up
//repair power up - life again - not right now
//create electric coins - increases charge
//fallen trees
//broken buildings

//create stray animals - moving (crossing the street)
function strays1(){
    
      var animal = createSprite(0,600);
      var rand = Math.round(random(1,2));
      if(rand===1){
           animal.addAnimation("walk cat",catImg);
           animal.scale=0.5;
      }
      else{
          animal.addAnimation("walk dog",dogImg);
          animal.scale=0.5;
      }
      animal.velocityX = 3;
      animal.velocityY = 0.5;
      animal.lifetime = 230;
      strayGroup.add(animal);
     
}

function strays2(){
    
    var animal = createSprite(700,600);
    var rand = Math.round(random(1,2));
    if(rand===1){
        animal.addAnimation("walk cat",catImg);
        animal.scale=0.5;
    }
    else{
        animal.addAnimation("walk dog",dogImg);
        animal.scale=0.5;
    }
    animal.velocityX = 3;
    animal.velocityY = 0.5;
    animal.lifetime = 230;
    strayGroup.add(animal);
}

function trees1(){
    var tree = createSprite(random(0,700),600);
    tree.addImage(treeImg);
    tree.lifetime = 230;
    treeGroup.add(tree);

}

function trees2(){
    var tree = createSprite(random(700,1400),600);
    tree.addImage(treeImg);
    tree.lifetime = 230;
    treeGroup.add(tree);
}

function buildings1(){
    var building = createSprite(random(0,700),600);
    building.addImage(buildingImg);
    building.lifetime = 230;
    buildingsGroup.add(building)
}

function buildings2(){
    var building = createSprite(random(700,1400),600);
    building.addImage(buildingImg);
    building.lifetime = 230;
}