const ATTACK_VALUE = 15;
const STRONG_ATTACK_VALUE = 20;
const MONSTER_ATTACK_VALUE = 18;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(mode) {
  let maxDamage;
  if (mode === "ATTACK") {
    maxDamage = ATTACK_VALUE;
  } else if ((mode = "STRONG_ATTACK")) {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("Player Won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("Monster Won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("Draw...play again");
  }
}

function attackHandler() {
  attackMonster("ATTACK");
}

function strongAttackHandler() {
  attackMonster("STRONG_ATTACK");
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
