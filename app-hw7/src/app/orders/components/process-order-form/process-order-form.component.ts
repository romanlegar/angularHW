import { OrderModel } from './../../order.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-process-order-form',
  templateUrl: './process-order-form.component.html',
  styleUrls: ['./process-order-form.component.css']
})
export class ProcessOrderFormComponent implements OnInit {
  @Output() close: EventEmitter<Number> = new EventEmitter<Number>();
  order: OrderModel = new OrderModel();
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  onClose() {
    this.close.emit(1);
  }

  private buildForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      email: [
        '',
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'), Validators.email]
      ],
      phone: [
        '',
        [Validators.required, Validators.pattern('\\+380?[0-9]{10}')]
      ],
      ddate: ['']
    });
  }

}
