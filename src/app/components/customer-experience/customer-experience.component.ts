import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  image: string;
  text: string;
  before: string;
  after: string;
}
@Component({
  standalone: true,
  selector: 'app-customer-experience',
  imports: [CommonModule],
  templateUrl: './customer-experience.component.html',
  styleUrl: './customer-experience.component.css'
})
export class CustomerExperienceComponent {
  testimonials: Testimonial[] = [
    {
        name: 'Thomas Daniel',
        image: '../assets/images/5947323188973257234.jpg',
        text: 'My weight loss surgery experience was amazing! Thanks to the specialized medical team and excellent care...',
        before: '../assets/images/before1.jpeg',
        after: '../assets/images/after1.jpeg',
    },
    {
        name: 'Corey Korsgaard',
        image: '../assets/images/5947323188973257235.jpg',
        text: 'I underwent surgery with this amazing medical team, and the experience was much smoother than I expected...',
        before: '../assets/images/before2.jpeg',
        after: '../assets/images/after2.jpeg',
    },
    {
      name: 'Corey Korsgaard',
      image: '../assets/images/5947323188973257235.jpg',
      text: 'I underwent surgery with this amazing medical team, and the experience was much smoother than I expected...',
      before: '../assets/images/before3.jpeg',
        after: '../assets/images/after3.jpeg',
  },
  {
    name: 'Corey Korsgaard',
    image: '../assets/images/5947323188973257234.jpg',
    text: 'I underwent surgery with this amazing medical team, and the experience was much smoother than I expected...',
    before: '../assets/images/before4.jpeg',
    after: '../assets/images/after4.jpeg',
}
];
}