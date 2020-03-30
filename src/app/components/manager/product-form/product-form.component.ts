import { ProductService } from './../../../services/product.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api/selectitem';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Product } from '../../../domain/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None
})
export class ProductFormComponent implements OnInit {

  private productForm: FormGroup;
  private submitted: boolean = false;

  private produtctTypes: SelectItem[];
  // private selectedProductType: string;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private messageService: MessageService,
    private route: ActivatedRoute) {

    this.produtctTypes = [
      { label: 'Consulting', value: 'CONSULTING' },
      { label: 'Permanent Resident Visas', value: 'PERMANENT RESIDENT VISAS' },
      { label: 'Temporary Visas', value: 'TEMPORARY VISAS' }
    ]
  }

  ngOnInit() {
    const product: Product = this.route.snapshot.data['product'];

    this.productForm = this.fb.group({
      id: [product.id],
      type: [product.type, [Validators.required]],
      name: [product.name, [Validators.required, Validators.minLength(2), Validators.maxLength(45)]],
      description: [product.description, [Validators.required, Validators.maxLength(500)]],
      price: [product.price, [Validators.required]],
      iva: [product.iva, [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.productForm.value);

    if (this.productForm.valid) {
      console.log("submit");
      // desabilitar o batao save aqui para evitar dois cliques

      let summarySuccess = "Product Created";
      let msgSuccess = " has been created"
      let summaryError = "Error on Create";
      
      if (this.productForm.value['id']) {
        summarySuccess = "Product Updated";
        msgSuccess = " has been updated"
        summaryError = "Error on Updated";
      }


      this.productService.save(this.productForm.value)
        .subscribe(productCreated => {
          this.messageService.add({ severity: 'success', summary: summarySuccess, detail: productCreated['id'] + msgSuccess });
          this.submitted = false;
          this.productForm.reset();
        },
          error => this.messageService.add({ severity: 'error', summary: summaryError, detail: 'Could not connect the server' }),
        );
    }
  }

  hasError(field: string) {
    return this.productForm.get(field).errors;
  }

  onCancel() {
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }

  onConfirm() {
    this.messageService.clear('c');
    this.submitted = false;
    this.productForm.reset();
  }

  onReject() {
    this.messageService.clear('c');
  }
}
