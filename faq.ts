import { Component, signal } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {

  openIndex = signal<number | null>(null);

  faqs: FaqItem[] = [

    {
      question: 'What are your opening hours?',
      answer: 'We are open every day from 8:00 AM to 11:00 PM.'
    },

    {
      question: 'Do you offer takeaway?',
      answer: 'Yes. All drinks and food items are available for takeaway.'
    },

    {
      question: 'Do you have Wi-Fi?',
      answer: 'Yes. Free Wi-Fi is available for all our guests.'
    },

    {
      question: 'Can I reserve a table?',
      answer: 'Yes. Contact us through the contact section to reserve a table.'
    }

  ];

  toggle(index: number) {

    if (this.openIndex() === index) {

      this.openIndex.set(null);

    } else {

      this.openIndex.set(index);

    }
  }
}