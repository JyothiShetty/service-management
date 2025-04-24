import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-request',
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
  templateUrl: './service-request.component.html',
  styleUrl: '../incident-request/incident-request.component.css'
})
export class ServiceRequestComponent {
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

    departments = [
      { icon: 'memory', label: 'ITSG', href: '#ITSG' },
      { icon: 'recent_actors', label: 'Human Resources', href: '#HumanResources' },
      { icon: 'more_horiz', label: 'Admin', href: '#Admin' },
      { icon: 'lock', label: 'Information Security', href: '#Compliance' }
    ];
  
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
