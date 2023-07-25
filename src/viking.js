// Soldier
class Soldier {
    constructor(health, strength)
    {
        this.health = health,
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(theDamage){
        this.health -= theDamage
    }
   
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength)
    {
       super(health,strength)
       this.name = name
    }
    receiveDamage(theDamage){
        this.health -= theDamage
        if (this.health > 0){
            return `${this.name} has received ${theDamage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(theDamage){
        this.health -= theDamage
        if (this.health > 0){
            return `A Saxon has received ${theDamage} points of damage`
        } else {
            return "A Saxon has died in combat"
        }
    }

}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length)
        let randomSaxon = this.saxonArmy[randomSaxonIndex]

        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        
        let attackResult = randomSaxon.receiveDamage(randomViking.attack())

        if (randomSaxon.health < 1){
            this.saxonArmy.splice(randomSaxonIndex,1)
        }
        return attackResult

    }
    saxonAttack(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]

        let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length) 
        let randomViking = this.vikingArmy[randomVikingIndex]
        
        let attackResult = randomViking.receiveDamage(randomSaxon.strength)

        if (randomViking.health < 1){
            this.vikingArmy.splice(randomVikingIndex,1)
        }
        return attackResult
    }
    showStatus(){
        if (this.vikingArmy.length < 1) {
            return "Vikings have won the war of the century!"
            
        } else if (this.saxonArmy.length < 1) {
            return "Saxons have fought for their lives and survived another day..."
        } else  {
            return "Vikings and Saxons are still in the thick of battle."
        } 
    }

    // iteration 5
    charAttacker() {
        let attacker 
        let attackerIndex
        let defender
        let defenderIndex
            
        if (attacker instanceof Viking) {
            attackerIndex = Math.floor(Math.random()*this.vikingArmy.length) 
            attacker = this.vikingArmy[attackerIndex]
    
            defenderIndex = Math.floor(Math.random()*this.saxonArmy.length)
            defender = this.saxonArmy[defenderIndex]
            
    
        } else if (attacker instanceof Saxon) {
            attackerIndex = Math.floor(Math.random()*this.saxonArmy.length)
            attacker = this.vikingArmy[attackerIndex]

            defenderIndex = Math.floor(Math.random()*this.vikingArmy.length)
            defender = this.saxonArmy[defenderIndex]
            
        }
    
        let attackResult = defender.receiveDamage(attacker.attack())

        if (defender.health < 1) {
            if ( defender === Saxon) {
                this.saxonArmy.splice(defenderIndex, 1)
            } else if ( defender === Viking) {
                this.vikingArmy.splice(defenderIndex, 1)
            }
            
        } 
        return attackResult
        
    }
}




