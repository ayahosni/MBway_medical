import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



interface DoctorOffer {
  name: string;
  image: string;
  discount: number;
  specialty:string;
}
@Component({
  standalone:true,
  selector: 'app-doctors-offers',
  imports: [CommonModule],
  templateUrl: './doctors-offers.component.html',
  styleUrl: './doctors-offers.component.css'
})
export class DoctorsOffersComponent {

  doctorOffers: DoctorOffer[] = [
    { name: 'Dr. Ahmed', image: '../assets/images/5947323188973257221.jpg', discount: 50 ,specialty:'Cardiologist'},
    { name: 'Dr. Mohamed', image: '../assets/images/5947323188973257230.jpg', discount: 50 ,specialty:'Dentist' },
    { name: 'Dr. nour', image: '../assets/images/5947323188973257218.jpg', discount: 50  ,specialty:'Neurologist'},
    { name: 'Dr. salma', image: '../assets/images/5947323188973257217.jpg', discount: 50 ,specialty:'Dermatologist' },
    { name: 'Dr. Mahmoud', image: '../assets/images/5947323188973257223.jpg', discount: 50 ,specialty:'Gynecologist' },
    { name: 'Dr. Ibrahim', image: '../assets/images/5947323188973257219.jpg', discount: 50 ,specialty:'Pediatrician' },
    { name: 'Dr. Youssef', image: '../assets/images/5947323188973257233.jpg', discount: 50 ,specialty:'Pediatrician' },
    { name: 'Dr. Khalid', image: '../assets/images/5947323188973257226.jpg', discount: 50 ,specialty:'Gynecologist' },
    { name: 'Dr. sara', image: '../assets/images/5947323188973257231.jpg', discount: 50,specialty:'Gynecologist' }
  ]; 
}