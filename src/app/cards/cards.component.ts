import { Component, OnInit } from '@angular/core';
import { CardService } from '../../service/card.service';
import { Card } from '../../models/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit{
  cards:Card[]=[]
  constructor(private cardService:CardService){}
  ngOnInit(): void {
      this.getList()
  }
  getList() {
    this.cardService.getAll().subscribe(result=>{
      this.cards=result;
    })
  }
}
