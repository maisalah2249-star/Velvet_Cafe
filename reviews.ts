import { Component, signal } from '@angular/core';

interface Review {
  name: string;
  rating: number;
  text: string;
}

@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css'
})
export class Reviews {

  currentIndex = signal(0);

  reviews: Review[] = [

    {
      name: 'Rana Ashraf',
      rating: 5,
      text: 'The coffee is amazing and the atmosphere is even better. Velvet quickly became my favorite place to relax.'
    },

    {
      name: 'Ahmed Mohamed',
      rating: 5,
      text: 'Great coffee, friendly staff, and a really cozy environment. The iced mocha is definitely worth trying.'
    },

    {
      name: 'Rehab Rashad',
      rating: 5,
      text: 'Beautiful place with delicious desserts. Everything feels thoughtful and welcoming.'
    }

  ];

  next() {

    this.currentIndex.update(index =>
      (index + 1) % this.reviews.length
    );

  }

  previous() {

    this.currentIndex.update(index =>
      index === 0
        ? this.reviews.length - 1
        : index - 1
    );

  }
}