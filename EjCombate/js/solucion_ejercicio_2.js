//Ejercicio de practica Javascript

//Objeto base para los personajes
class Character {
    constructor(name, health, damage, element) {
      //Atributos
      this.name = name;
      this.health = health;
      this.maxhealth = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      this.damage = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
      this.element = document.getElementById(element);
      this.life = document.getElementById(element+"_life");
      this.lifeProgress = document.getElementById(element+"__life");
      


    }
    //Verifica si el personaje esta vivo
  
    isAlive() {
      return this.health > 0;
    }
  
    //Ataca a otro personaje seleccionado
    attack(target) {
      if(target.health >= 0){
        console.log(`${this.name} deals ${this.damage} DMG to ${target.name}`);
      
        target.health -= this.damage;
        target.life.value -= (this.damage / target.health) * 100;
        console.log("vida de "+target.name+": "+target.health)
        // document.getElementById(target.lifeProgress).innerText = target.health;
      }
      
    }
  
    //Retorna la información actual del personaje
    status() {
      return `${this.name} - HP ${this.health}/${this.maxhealth}`;
    }
  }
  
  //Función para combatir
  async function fight(firstCharacter, secondCharacter) {
    

    console.log("Empieza el combate!");
    console.log(hero.status());
    console.log(enemy.status());
    
      await new Promise((resolve) => { setTimeout(resolve,1000)})
      alert("Vida del Heroe: "+firstCharacter.maxhealth)
      alert("Vida del Villano: "+secondCharacter.maxhealth)
      //Primer personaje ataca si esta vivo
      if (firstCharacter.isAlive()) {
        await new Promise((resolve) => { setTimeout(resolve,1500)})
        firstCharacter.attack(secondCharacter);
        
        secondCharacter.element.style.backgroundColor = "red";
        await new Promise((resolve) => { setTimeout(resolve,100)})
        secondCharacter.element.style.backgroundColor = "white";
        console.log(hero.status());
        console.log(enemy.status());
        setTimeout(30)
      } else {
        
        alert(`${firstCharacter.name} died!`);

        
      }
  
      //Segundo personaje ataca si esta vivo
      if (secondCharacter.isAlive()) {
        await new Promise((resolve) => { setTimeout(resolve,1500)})
        secondCharacter.attack(firstCharacter);
        firstCharacter.element.style.backgroundColor = "red";
        await new Promise((resolve) => { setTimeout(resolve,100)})
        firstCharacter.element.style.backgroundColor = "white";
        console.log(hero.status());
        console.log(enemy.status());
      } else {
        
        alert(`${secondCharacter.name} died!`);
       
      }
      const handleCharacterAttack = (event) => {
        if (event.key === "n" && secondCharacter.isAlive()) {
           secondCharacter.attack(firstCharacter);
           updateLifeBar(firstCharacter, "hero");
           checkGameOver();
        } else if (event.key === "x" && firstCharacter.isAlive()) {
           firstCharacter.attack(secondCharacter);
           updateLifeBar(secondCharacter, "enemy");
           checkGameOver();
        }
     };
  
     document.addEventListener("keydown", handleCharacterAttack);
  
     const checkGameOver = () => {
        if (!firstCharacter.isAlive()) {
           console.log(`${firstCharacter.name} died!`);
           document.removeEventListener("keydown", handleCharacterAttack);
           alert(`${secondCharacter.name} ha ganado el juego!`);
        } else if (!secondCharacter.isAlive()) {
           console.log(`${secondCharacter.name} died!`);
           document.removeEventListener("keydown", handleCharacterAttack);
           alert(`${firstCharacter.name} ha ganado el juego!`);
        }
     };
      
    
  }
  
  //Creación de personajes
  const hero = new Character("Heroe", 100, 110,"hero");
  const enemy = new Character("Enemigo", 500, 40,"enemy");
  
  //Comenzar combate
  
  fight(hero, enemy);

  