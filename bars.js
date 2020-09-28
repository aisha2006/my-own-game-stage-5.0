//electricity tanks
function chargeBar1(){
    var charge1 = createSprite(570,50);
    charge1.addImage(chargeImg);
    charge1.scale = 0.3;

    var charge2 = createSprite(610, 50);
    charge2.addImage(chargeImg);
    charge2.scale = 0.3;

    var charge3 = createSprite(650, 50);
    charge3.addImage(chargeImg);
    charge3.scale = 0.3;

    if(charge === 2)
        charge3.visible = false;

    if(charge === 1)
        charge2.visible = false;
    
    if(charge === 0)
        charge1.visible = false;
}

function chargeBar2(){
    var charge1 = createSprite(1270,50);
    charge1.addImage(chargeImg);
    charge1.scale = 0.3;

    var charge2 = createSprite(1310, 50);
    charge2.addImage(chargeImg);
    charge2.scale = 0.3;

    var charge3 = createSprite(1350, 50);
    charge3.addImage(chargeImg);
    charge3.scale = 0.3;

    if(charge === 2)
        charge3.visible = false;

    if(charge === 1)
        charge2.visible = false;
    
    if(charge === 0)
        charge1.visible = false;
    
}

//life bar (damage)
function lifeBar1(){
    var life1 = createSprite(40,50);
    life1.addImage(life);
    life1.scale = 0.2;

    var life2 = createSprite(80, 50);
    life2.addImage(life);
    life2.scale = 0.2;

    var life3 = createSprite(120, 50);
    life3.addImage(life);
    life3.scale = 0.2;

    if(lives === 2)
        life3.visible = false;

    if(lives === 1)
        life2.visible = false;
    
    if(lives === 0)
        life1.visible = false;
}

function lifeBar2(){
    var life1 = createSprite(740,50);
    life1.addImage(life);
    life1.scale = 0.2;

    var life2 = createSprite(780, 50);
    life2.addImage(life);
    life2.scale = 0.2;

    var life3 = createSprite(820, 50);
    life3.addImage(life);
    life3.scale = 0.2;

    if(lives === 2)
        life3.visible = false;

    if(lives === 1)
        life2.visible = false;
    
    if(lives === 0)
        life1.visible = false;
}
