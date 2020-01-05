//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ VARIABLES TO BE DETERMINED

var planeswalker;
var fighter;
var enemies = [];

//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ VARIABLES

var charChosen = false;
//set to true when first character is clicked

var fighterChosen = false;
//set to true once a defender is clicked
//set to false when defender is killed

var firstAttack = true;
//set to false once the first attack has happened

var enemy1Alive = true;
var enemy2Alive = true;
var enemy3Alive = true;

//storage for detached elements
var yourPlaneswalker;
var yourFighter;

//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ PLANESWALKER STATS

var garruk = {
    name: 'garruk',
    hp: 140,
    baseAttackPower: 8,
    attackPower: 8,
    counterPower: 28
};

var sorin = {
    name: 'sorin',
    hp: 85,
    baseAttackPower: 16,
    attackPower: 16,
    counterPower: 20
};

var karn = {
    name: 'karn',
    hp: 270,
    baseAttackPower: 2,
    attackPower: 2,
    counterPower: 8
};

var ajani = {
    name: 'ajani',
    hp: 215,
    baseAttackPower: 6,
    attackPower: 6,
    counterPower: 12
};

//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ PLANESWALKER CLICKS (make less dry later, try to remove # for variables)

$('#garruk').click(function() {
    if (charChosen === false) {
        charChosen = true;
        planeswalker = garruk;
        $('#garruk').shake(10, 5, 1);
        console.log(planeswalker);
        console.log('Character Selected = ' + charChosen);
    } else if (fighterChosen === false && planeswalker !== garruk) {
        fighterChosen = true;
        fighter = garruk;
        $('#garruk').shake(10, 5, 1);
        console.log(fighter);
        console.log('Fighter Selected = ' + charChosen);
    }
    console.log('clicked');
});

$('#sorin').click(function() {
    if (charChosen === false) {
        charChosen = true;
        planeswalker = sorin;
        $('#sorin').shake(10, 5, 1);
        console.log(planeswalker);
        console.log('Character Selected = ' + charChosen);
    } else if (fighterChosen === false && planeswalker !== sorin) {
        fighterChosen = true;
        fighter = sorin;
        $('#sorin').shake(10, 5, 1);
        console.log(fighter);
        console.log('Fighter Selected = ' + charChosen);
    }
    console.log('clicked');
});

$('#karn').click(function() {
    if (charChosen === false) {
        charChosen = true;
        planeswalker = karn;
        $('#karn').shake(10, 5, 1);
        console.log(planeswalker);
        console.log('Character Selected = ' + charChosen);
    } else if (fighterChosen === false && planeswalker !== karn) {
        fighterChosen = true;
        fighter = karn;
        $('#karn').shake(10, 5, 1);
        console.log(fighter);
        console.log('Fighter Selected = ' + charChosen);
    }
    console.log('clicked');
});

$('#ajani').click(function() {
    if (charChosen === false) {
        charChosen = true;
        planeswalker = ajani;
        $('#ajani').shake(10, 5, 1);
        console.log(planeswalker);
        console.log('Character Selected = ' + charChosen);
    } else if (fighterChosen === false && planeswalker !== ajani) {
        fighterChosen = true;
        fighter = ajani;
        $('#ajani').shake(10, 5, 1);
        console.log(fighter);
        console.log('Fighter Selected = ' + charChosen);
    }
    console.log('clicked');
});

//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ MOVEMENT FUNCTIONS

function initialMove() {
    $('garruk').detach();
    garruk.appendTo('player-container');

    //move chosen(ex. planeswalker) to player-container
    //move others to enemy-container
}

/* function secondMove(enemyChosen) {
    //move enemyChosen to fighter-container
} */

//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ATTACK CLICK

$('#attack-button').click(function() {
    if (charChosen === true && fighterChosen === true) {
        if (fighter.hp >= 0 && planeswalker.hp >= 0) {
            combat(planeswalker, fighter);
            update('#' + planeswalker.name + '-hp', planeswalker.hp);
            update('#' + fighter.name + '-hp', fighter.hp);
        } else if (fighter.hp <= 0) {
            //remove fighter from game and html
            fighter;
            fighterChosen = false;
            if (enemy1Alive === true) {
                enemy1Alive = false;
                console.log(
                    '1:' +
                        enemy1Alive +
                        ' 2:' +
                        enemy2Alive +
                        ' 3:' +
                        enemy3Alive
                );
            } else if (enemy2Alive === true) {
                enemy2Alive = false;
                console.log(
                    '1:' +
                        enemy1Alive +
                        ' 2:' +
                        enemy2Alive +
                        ' 3:' +
                        enemy3Alive
                );
            } else {
                enemy3Alive === false;
                console.log(
                    '1:' +
                        enemy1Alive +
                        ' 2:' +
                        enemy2Alive +
                        ' 3:' +
                        enemy3Alive
                );
                alert('Contratulations! The multiverse is saved!');
            }
        } else {
            alert("Sorry, you've lost! Refresh to try again.");
        }
    }
    console.log('clicked');
});

//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ COMBAT CALCULATION FUNCTIONS

function combat(player, computer) {
    if (firstAttack === true) {
        firstAttack = false;
        computer.hp = computer.hp - player.attackPower;
        console.log(computer.hp);
        player.hp = player.hp - computer.counterPower;
        console.log(player.hp);
    } else {
        player.attackPower = player.attackPower + player.baseAttackPower;
        computer.hp = computer.hp - player.attackPower;
        console.log(computer.hp);
        player.hp = player.hp - computer.counterPower;
        console.log(player.hp);
    }
}

function update(id, value) {
    //  document.getElementById(id).innerHTML = value;
    $(id).html(value);
}

/*

var picArr = ['../images/tarkir.jpg', '../images/kamigawa.png', '../images/kaladesh.jpg', '../images/alara.jpg', '../images/ravnica.jpg'];
//array of background images

var picArr = ['../images/tarkir.jpg', '../images/kamigawa.png', '../images/kaladesh.jpg', '../images/alara.jpg', '../images/ravnica.jpg',];
var picNumber = Math.floor((Math.random() * picArr.length) + 1);

$(document).ready(function () {
    $("#background").attr('src', picArr[picNumber]);
});

*/

//▓▓▓▓▓▓▓▓▓▓▓▓▓▓ FUNCTION TO SHAKE ONCLICK
jQuery.fn.shake = function(interval, distance, times) {
    interval = typeof interval == 'undefined' ? 100 : interval;
    distance = typeof distance == 'undefined' ? 10 : distance;
    times = typeof times == 'undefined' ? 3 : times;
    var jTarget = $(this);
    jTarget.css('position', 'relative');
    for (var iter = 0; iter < times + 1; iter++) {
        jTarget.animate(
            { left: iter % 2 == 0 ? distance : distance * -1 },
            interval
        );
    }
    return jTarget.animate({ left: 0 }, interval);
};
