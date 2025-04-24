import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-incident-request',
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
    MatSelectModule
  ],
  templateUrl: './incident-request.component.html',
  styleUrl: './incident-request.component.css'
})

export class IncidentRequestComponent {

  formData = {
    department: '',
    workgroup: '',
    category: '',
    subCategory: '',
    cubicalNumber: null,
    contactNumber: '',
    extensionNumber: null,
    description: '',
    file: null
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

}
