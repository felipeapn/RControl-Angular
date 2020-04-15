import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/domain/product';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.css'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None
})
export class ProductMasterComponent implements OnInit {

  private products: Product[];
  private productIdDelete: number;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.productService.list()
    .subscribe(productData => this.products = productData)
  }
  onEdit(id: number) {
    this.router.navigate(['edit-product', id], { relativeTo: this.route });
  }

  onCancel(id: number) {
    this.productIdDelete = id;
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Do you want to delete?', detail: 'Confirm to proceed' });
  }

  onConfirm() {
    this.productService.delete(this.productIdDelete)
      .subscribe(deleted => {
        this.messageService.add({ severity: 'success', summary: 'Product has been deleted' });
        this.onRefresh();
      },
        erro => this.messageService.add({ severity: 'error', summary: 'Product wasnt deleted', detail: 'Could not connect the server' })
        );
    this.productIdDelete = null;
    this.messageService.clear('c');
  }

  onReject() {
    this.productIdDelete = null;
    this.messageService.clear('c');
  }

}
