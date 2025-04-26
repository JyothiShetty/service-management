import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-new-sr',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterLink,
    MatDividerModule, 
    MatSelectModule,
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './new-sr.component.html',
  styleUrl: './new-sr.component.css'
})
export class NewSrComponent {
  formData = {
    department: '',
    workgroup: '',
    category: '',
    subCategory: '',
    cubicalNumber: null,
    contactNumber: '',
    extensionNumber: null,
    description: '',
    file: null,
    cost: 0,
    quality: 0
  };

   router = inject(Router);
  
    onSubmit(form: any) {
      if (form.valid) {
        console.log('Form submitted:', this.formData);
      }
    }
  
    onFileChange(event: any) {
      const file = event.target.files[0];
      if (file) {
        this.formData.file = file;
        console.log('Selected file:', file.name);
      }
    }
  
    onCancel() {
      this.router.navigate(['/dashboard']);
    }

    onCategoryChange() {

    }
}
