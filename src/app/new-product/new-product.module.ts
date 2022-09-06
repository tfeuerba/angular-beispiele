import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewProductComponent } from './new-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [{ path: '', component: NewProductComponent }];

@NgModule({
  declarations: [NewProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    MessagesModule,
    MessageModule,
  ],
})
export class NewProductModule {}
