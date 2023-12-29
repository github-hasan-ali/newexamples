import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Transfer } from '../../models/transfer';
import { TransferService } from '../../service/transfer.service';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.scss'
})
export class TransferComponent implements OnInit {
  transfers:Transfer[]=[]
  constructor(private transferService:TransferService){}
  ngOnInit(): void {
   this.getList()
  }
  getList() {
    this.transferService.getAll().subscribe(result=>{
      this.transfers=result;
    })
  }
}
