import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api/treenode';

@Component({
  selector: 'app-process-select',
  templateUrl: './process-select.component.html',
  styleUrls: ['./process-select.component.css']
})
export class ProcessSelectComponent implements OnInit {

  filesTree: TreeNode[];
  selectedFile: TreeNode;

  processo = {description: 'descricao detalhada de um processo', price: 50.00, iva: 5.00};
  processo2 = {description: 'descricao detalhada de outro processo', price: 150.00, iva: 15.00};

  showPayment: boolean = false;

  constructor() { }

  ngOnInit() {
    this.filesTree =  [
      {
          label: 'Tipo 1',
          data: 'Node 0',
          expandedIcon: 'pi pi-folder',
          collapsedIcon: 'pi pi-folder',
          selectable: false,
          children: [{label: 'Tipo 1 A', icon: 'pi pi-file', data: this.processo},
                     {label: 'Tipo 1 B', icon: 'pi pi-file', data: this.processo2}]
      },
      {
          label: 'Tipo 2',
          data: 'Node 1',
          expandedIcon: 'pi pi-folder-open',
          collapsedIcon: 'pi pi-folder',
          selectable: false,
          children: [{label: 'Tipo 2 A', icon: 'pi pi-file', data: this.processo},
                     {label: 'Tipo 2 B', icon: 'pi pi-file', data: this.processo2},
                     {label: 'Tipo 2 C', icon: 'pi pi-file', data: this.processo}]
      }
      
   ]

   
  }

  handleClick() {
    this.showPayment = !this.showPayment;
  }

}
