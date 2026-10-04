import { Component, computed, signal } from '@angular/core';

interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

  categories = [
    'All',
    'Coffee',
    'Tea',
    'Desserts',
    'Cold Drinks'
  ];

  selectedCategory = signal('All');

  menuItems: MenuItem[] = [

  {
    name: 'Velvet Latte',
    description: 'Smooth espresso with creamy steamed milk.',
    price: 120,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=700&q=80'
  },

  {
    name: 'Classic Espresso',
    description: 'Rich and bold espresso with a deep finish.',
    price: 85,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=700&q=80'
  },

  {
    name: 'Matcha Cloud',
    description: 'Premium matcha with silky milk foam.',
    price: 140,
    category: 'Tea',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=700&q=80'
  },

  {
    name: 'Berry Cheesecake',
    description: 'Creamy cheesecake topped with fresh berries.',
    price: 160,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80'
  },

  {
    name: 'Iced Mocha',
    description: 'Cold espresso, chocolate and creamy milk.',
    price: 135,
    category: 'Cold Drinks',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80'
  },

  {
    name: 'Cinnamon Roll',
    description: 'Freshly baked roll with cinnamon and glaze.',
    price: 100,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=700&q=80'
  },

  {
    name: 'Earl Grey',
    description: 'Classic black tea with a citrus aroma.',
    price: 75,
    category: 'Tea',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80'
  },

  {
    name: 'Citrus Fizz',
    description: 'Refreshing citrus drink with sparkling water.',
    price: 110,
    category: 'Cold Drinks',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80'
  }

];

  filteredItems = computed(() => {

    if (this.selectedCategory() === 'All') {
      return this.menuItems;
    }

    return this.menuItems.filter(
      item => item.category === this.selectedCategory()
    );

  });

  selectCategory(category: string) {
    this.selectedCategory.set(category);
  }
}