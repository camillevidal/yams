import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-yams-game',
  templateUrl: './yams-game.component.html',
  styleUrls: ['./yams-game.component.css']
})
export class YamsGameComponent {
 lancer = 3
 score=0
 nombre=0
 brelan=0
 yams=0
 suite=0
 suisse=0
 carree=0
 chance=0
  constructor() { 
    
  }
 
  

  ngOnInit() {
    this.lancer=3
    this.score=0
    
  }
  genereDesAleatoires(lancer:number){
    let min= 1
    let max = 7
    let cpt = 0
    this.lancer -=1
    if(this.lancer == 0){
      alert("Fin de la partie")
      this.ngOnInit()
  }
    let ladiv = document.getElementById("lancerDeDes")
    ladiv.innerHTML=""
    while(cpt<6){
      this.nombre =Math.floor(Math.random() * (max - min) + min);
      ladiv.innerHTML+="<div>le lancer de dés N°"+cpt+" = " +this.nombre+"</div><input type='checkbox' id='valid'>"
      
      
      cpt++

    }


  }

  ajoutScore(){
    let elements = document.getElementsByTagName("input")
    let cpt = 0
    for(let i = 0; i < elements.length; i++){
     
      if(elements[i].checked){
        cpt+=1
      }
    }
    if(cpt ==3){
      console.log(this.score)
      this.score += 30
      this.brelan =1
    }
  }
  choixNombreDes(){
    let x =0
    let nombreDes = 5
    let nombreLancer = 3
    let gardeDes = Number(window.prompt("Combien de dés voulez vous lancer ?"))
    while(x < 4){

    }

  }
}
