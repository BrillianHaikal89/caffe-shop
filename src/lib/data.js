export const cafeInfo = {
    name: "Aroma Haven Café",
    slogan: "Where passion for coffee meets a warm, inviting atmosphere",
    foundedYear: 2018,
    address: "123 Coffee Street, Café City, CC 12345",
    phone: "(555) 123-4567",
    email: "hello@aromahaven.com",
    socialMedia: {
      instagram: "https://instagram.com/aromahaven",
      facebook: "https://facebook.com/aromahaven",
      twitter: "https://twitter.com/aromahaven"
    },
    hours: {
      mondayToFriday: "7AM - 8PM",
      saturday: "8AM - 10PM",
      sunday: "8AM - 8PM"
    }
  };
  
  export const menuData = [
    {
      name: "Coffee Specialties",
      description: "Our signature coffee drinks crafted with freshly roasted beans and expert techniques.",
      items: [
        {
          name: "Signature Blend",
          description: "Our house blend with notes of chocolate, caramel, and a hint of citrus.",
          price: 3.50,
          image: "/images/menu/coffee1.jpg",
          isPopular: true,
          isVegan: true,
          isGlutenFree: true,
          allergens: []
        },
        {
          name: "Smooth Cappuccino",
          description: "Equal parts espresso, steamed milk, and milk foam topped with cinnamon.",
          price: 4.25,
          image: "/images/menu/coffee2.jpg",
          isPopular: false,
          isVegan: false,
          isGlutenFree: true,
          allergens: ["Dairy"]
        },
        {
          name: "Caramel Macchiato",
          description: "Espresso with steamed milk, vanilla syrup, and caramel drizzle.",
          price: 4.75,
          image: "/images/menu/coffee3.jpg",
          isPopular: true,
          isVegan: false,
          isGlutenFree: true,
          allergens: ["Dairy"]
        },
        {
          name: "Mocha Dream",
          description: "Rich espresso with chocolate, steamed milk, and whipped cream.",
          price: 5.00,
          image: "/images/menu/coffee4.jpg",
          isPopular: false,
          isVegan: false,
          isGlutenFree: true,
          allergens: ["Dairy"]
        },
        {
          name: "Cold Brew",
          description: "Slow-steeped for 24 hours for a smooth, rich flavor with low acidity.",
          price: 4.50,
          image: "/images/menu/coffee5.jpg",
          isPopular: true,
          isVegan: true,
          isGlutenFree: true,
          allergens: []
        },
        {
          name: "Vanilla Latte",
          description: "Espresso, steamed milk, and vanilla syrup topped with foam.",
          price: 4.75,
          image: "/images/menu/coffee6.jpg",
          isPopular: false,
          isVegan: false,
          isGlutenFree: true,
          allergens: ["Dairy"]
        }
      ]
    },
    {
      name: "Non-Coffee Beverages",
      description: "Refreshing alternatives for those who prefer something different.",
      items: [
        {
          name: "Matcha Latte",
          description: "Premium ceremonial grade matcha with steamed milk.",
          price: 5.25,
          image: "/images/menu/noncoffee1.jpg",
          isPopular: true,
          isVegan: false,
          isGlutenFree: true,
          allergens: ["Dairy"]
        },
        {
          name: "Fresh Mint Tea",
          description: "Organic mint leaves steeped to perfection.",
          price: 3.75,
          image: "/images/menu/noncoffee2.jpg",
          isPopular: false,
          isVegan: true,
          isGlutenFree: true,
          allergens: []
        },
        {
          name: "Hot Chocolate",
          description: "Premium dark chocolate melted into steamed milk and topped with whipped cream.",
          price: 4.50,
          image: "/images/menu/noncoffee3.jpg",
          isPopular: true,
          isVegan: false,
          isGlutenFree: true,
          allergens: ["Dairy"]
        },
        {
          name: "Fresh Strawberry Smoothie",
          description: "Fresh strawberries blended with yogurt and honey.",
          price: 5.50,
          image: "/images/menu/noncoffee4.jpg",
          isPopular: false,
          isVegan: false,
          isGlutenFree: true,
          allergens: ["Dairy"]
        }
      ]
    },
    {
      name: "Pastries & Desserts",
      description: "Freshly baked goods and sweet treats to complement your beverage.",
      items: [
        {
          name: "Butter Croissant",
          description: "Flaky, buttery layers baked to golden perfection.",
          price: 3.25,
          image: "/images/menu/pastry1.jpg",
          isPopular: true,
          isVegan: false,
          isGlutenFree: false,
          allergens: ["Gluten", "Dairy", "Eggs"]
        },
        {
          name: "Chocolate Chip Cookie",
          description: "Soft-baked cookie with premium chocolate chunks.",
          price: 2.75,
          image: "/images/menu/pastry2.jpg",
          isPopular: true,
          isVegan: false,
          isGlutenFree: false,
          allergens: ["Gluten", "Dairy", "Eggs"]
        },
        {
          name: "Blueberry Muffin",
          description: "Moist muffin loaded with fresh blueberries.",
          price: 3.50,
          image: "/images/menu/pastry3.jpg",
          isPopular: false,
          isVegan: false,
          isGlutenFree: false,
          allergens: ["Gluten", "Dairy", "Eggs"]
        },
        {
          name: "Vegan Banana Bread",
          description: "Moist banana bread made with plant-based ingredients.",
          price: 4.00,
          image: "/images/menu/pastry4.jpg",
          isPopular: false,
          isVegan: true,
          isGlutenFree: false,
          allergens: ["Gluten", "Nuts"]
        },
        {
          name: "Gluten-Free Cheesecake",
          description: "Creamy cheesecake with gluten-free crust and berry compote.",
          price: 5.50,
          image: "/images/menu/pastry5.jpg",
          isPopular: false,
          isVegan: false,
          isGlutenFree: true,
          allergens: ["Dairy", "Eggs"]
        }
      ]
    },
    {
      name: "Light Meals",
      description: "Perfect options for breakfast or a light lunch during your visit.",
      items: [
        {
          name: "Avocado Toast",
          description: "Sourdough toast topped with smashed avocado, cherry tomatoes, and microgreens.",
          price: 7.50,
          image: "/images/menu/food1.jpg",
          isPopular: true,
          isVegan: true,
          isGlutenFree: false,
          allergens: ["Gluten"]
        },
        {
          name: "Breakfast Sandwich",
          description: "Egg, cheese, and your choice of bacon or spinach on a toasted brioche bun.",
          price: 6.75,
          image: "/images/menu/food2.jpg",
          isPopular: true,
          isVegan: false,
          isGlutenFree: false,
          allergens: ["Gluten", "Dairy", "Eggs"]
        },
        {
          name: "Quinoa Bowl",
          description: "Hearty bowl with quinoa, roasted vegetables, and tahini dressing.",
          price: 8.50,
          image: "/images/menu/food3.jpg",
          isPopular: false,
          isVegan: true,
          isGlutenFree: true,
          allergens: ["Sesame"]
        },
        {
          name: "Caprese Panini",
          description: "Fresh mozzarella, tomato, basil, and balsamic glaze on grilled ciabatta.",
          price: 8.75,
          image: "/images/menu/food4.jpg",
          isPopular: false,
          isVegan: false,
          isGlutenFree: false,
          allergens: ["Gluten", "Dairy"]
        }
      ]
    }
  ];