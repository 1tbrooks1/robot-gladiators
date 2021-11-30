var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
  // repeat and execute as long as the enemy-robot is alive
  while(playerHealth > 0 && enemyHealth > 0) {
  // alert player they are starting the round
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
    //if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney);
      break;
    }
  }
  // if player chooses to fight, then fight
  if (promptFight === 'fight' || promptFight === "FIGHT") {

  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
 
// check's enemy's health
 if (enemyHealth <= 0) {
   window.alert(enemyName + " has died!");

   playerMoney = playerMoney + 20;
   break;
 }
 else {
   window.alert(enemyName + " still has " + enemyHealth + " health left.");
 }
  
 // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;
  
// Log a resulting message to the console so we know that it worked.
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health reamaining.");

// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
  break;
} 
else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}
}
}
};

// function to start game
var startGame = function () {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  for(var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0){
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it 
    window.alert("Welcome to Robot Gladiator! Round " + ( i + 1) );
  
    // pick new enemy to fight based on the index of the enemyNames array
  var pickedEnemyName = enemyNames[i];
  // reset enemyHealth before starting new fight
  enemyHealth = 50;
 // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
  fight(enemyNames[i]);
}
// if player isn't alive
else {
  // play again
  window.alert("You have lost your robot in battle! Game Over!");
  break;
}
}

// after the loop ends, player is either out of health or enemies to fight, so run the endGame function
endGame();
};

//function to end the entire game
var endGame = function() {
  window.alert("This game has now ended. Let's see how you did!");

  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've sruvived the game! You now have a score of" + playerMoney + ".");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }

  

//ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  // restart the game
  startGame();
}
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
};


// start the game when the page loads
startGame();