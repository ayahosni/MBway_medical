import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-partners-section',
  imports: [CommonModule],
  templateUrl: './partners-section.component.html',
  styleUrl: './partners-section.component.css'
})
export class PartnersSectionComponent {
  partners = [
    { 
      name: 'Dr. salma Ali', 
      specialty: 'Cardiologist',
      imageUrl: '../assets/images/5947323188973257217.jpg',
      facebook: 'https://facebook.com/dr.ahmedali',
      linkedin: 'https://linkedin.com/in/dr.ahmedali',
      instagram: 'https://instagram.com/dr.ahmedali'
    },
    { 
      name: 'Dr. Sarah Mohamed', 
      specialty: 'Dentist',
      imageUrl: '../assets/images/5947323188973257231.jpg',
      facebook: 'https://facebook.com/dr.sarahmohamed',
      linkedin: 'https://linkedin.com/in/dr.sarahmohamed',
      instagram: 'https://instagram.com/dr.sarahmohamed'
    },
    { 
      name: 'Dr. Khaled Hassan', 
      specialty: 'Neurologist',
      imageUrl: '../assets/images/5947323188973257232.jpg',
      facebook: 'https://facebook.com/dr.khaledhassan',
      linkedin: 'https://linkedin.com/in/dr.khaledhassan',
      instagram: 'https://instagram.com/dr.khaledhassan'
    },
    { 
      name: 'Dr. Khaled Hassan', 
      specialty: 'Neurologist',
      imageUrl: '../assets/images/5947323188973257233.jpg',
      facebook: 'https://facebook.com/dr.khaledhassan',
      linkedin: 'https://linkedin.com/in/dr.khaledhassan',
      instagram: 'https://instagram.com/dr.khaledhassan'
    },
    { 
      name: 'Dr. Khaled Hassan', 
      specialty: 'Neurologist',
      imageUrl: '../assets/images/5947323188973257221.jpg',
      facebook: 'https://facebook.com/dr.khaledhassan',
      linkedin: 'https://linkedin.com/in/dr.khaledhassan',
      instagram: 'https://instagram.com/dr.khaledhassan'
    },
    { 
      name: 'Dr. Khaled Hassan', 
      specialty: 'Neurologist',
      imageUrl: '../assets/images/5947323188973257222.jpg',
      facebook: 'https://facebook.com/dr.khaledhassan',
      linkedin: 'https://linkedin.com/in/dr.khaledhassan',
      instagram: 'https://instagram.com/dr.khaledhassan'
    },
    { 
      name: 'Dr. Khaled Hassan', 
      specialty: 'Neurologist',
      imageUrl: '../assets/images/5947323188973257223.jpg',
      facebook: 'https://facebook.com/dr.khaledhassan',
      linkedin: 'https://linkedin.com/in/dr.khaledhassan',
      instagram: 'https://instagram.com/dr.khaledhassan'
    },
    { 
      name: 'Dr. Khaled Hassan', 
      specialty: 'Neurologist',
      imageUrl: '../assets/images/5947323188973257226.jpg',
      facebook: 'https://facebook.com/dr.khaledhassan',
      linkedin: 'https://linkedin.com/in/dr.khaledhassan',
      instagram: 'https://instagram.com/dr.khaledhassan'
    }

  ];
}

