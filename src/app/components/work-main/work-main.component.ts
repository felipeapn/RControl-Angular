import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-main',
  templateUrl: './work-main.component.html',
  styleUrls: ['./work-main.component.css']
})
export class WorkMainComponent implements OnInit {

  procSelected: any;
  showComment: boolean = false;
  comment: string = '';

   procs = [
    {id: 1, type: 'type 1 A', description: 'process type 1 A to all', client: 'cliente 1', createdon: '2019/01/15', status: 'payed', lastchange: '2019/2/15'},
    {id: 2, type: 'type 2 A', description: 'process type 1 A to all', client: 'cliente 2', createdon: '2019/01/15', status: 'on process', lastchange: '2019/2/15'},
    {id: 3, type: 'type 1 B', description: 'process type 1 A to all', client: 'cliente 3', createdon: '2019/01/15', status: 'form sent', lastchange: '2019/2/15'},
    {id: 4, type: 'type 2 A', description: 'process type 1 A to all', client: 'cliente 4', createdon: '2019/01/15', status: 'created', lastchange: '2019/2/15'},
    {id: 5, type: 'type 2 B', description: 'process type 1 A to all', client: 'cliente 5', createdon: '2019/01/15', status: 'peding', lastchange: '2019/2/15'},
    {id: 6, type: 'type 1 A', description: 'process type 1 A to all', client: 'cliente 6', createdon: '2019/01/15', status: 'payed', lastchange: '2019/2/15'},
    {id: 7, type: 'type 1 A', description: 'process type 1 A to all', client: 'cliente 1', createdon: '2019/01/15', status: 'payed', lastchange: '2019/2/15'},
    {id: 8, type: 'type 1 A', description: 'process type 1 A to all', client: 'cliente 1', createdon: '2019/01/15', status: 'payed', lastchange: '2019/2/15'},
    {id: 9, type: 'type 1 A', description: 'process type 1 A to all', client: 'cliente 1', createdon: '2019/01/15', status: 'payed', lastchange: '2019/2/15'},
    {id: 10, type: 'type 1 A', description: 'process type 1 A to all', client: 'cliente 1', createdon: '2019/01/15', status: 'payed', lastchange: '2019/2/15'},
    {id: 11, type: 'type 1 A', description: 'process type 1 A to all', client: 'cliente 1', createdon: '2019/01/15', status: 'payed', lastchange: '2019/2/15'}
  ]; 

  history = [
    {data: '2020/01/25', author: 'system', message: 'processo criado por usuario 1'},
    {data: '2020/01/25', author: 'system', message: 'pagamento realizado'},
    {data: '2020/01/25', author: 'system', message: 'Os anexos X, Y e Z foram carregados'},
    {data: '2020/01/27', author: 'system', message: 'Analise iniciada'},
    {data: '2020/01/27', author: 'user', message: 'form preenchido e enviado ao consulado'}
  ]

  constructor() { }

  ngOnInit() {
  }

  showDetail(proc: any) {
    this.procSelected = proc;
    console.log(this.procSelected);
  }

  showCommentScreen() {
    this.showComment = !this.showComment;
  }

  postComment() {
    this.history.push({data: '2020/01/27', author: 'user', message: this.comment});
    this.comment = "";
  }
}
