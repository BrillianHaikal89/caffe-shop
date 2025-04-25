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
  
  // Gallery images
  export const galleryImages = [
    {
      src: "/images/gallery1.jpg",
      alt: "Café interior",
      title: "Our Cozy Space",
      description: "The perfect atmosphere for work or relaxation"
    },
    {
      src: "/images/gallery2.jpg",
      alt: "Coffee preparation",
      title: "Coffee Brewing",
      description: "Watching our baristas work their magic"
    },
    {
      src: "/images/gallery3.jpg",
      alt: "Latte art",
      title: "Latte Art",
      description: "Beautiful designs on every cup"
    },
    {
      src: "/images/gallery4.jpg",
      alt: "Café seating",
      title: "Outdoor Seating",
      description: "Enjoy your coffee in the fresh air"
    },
    {
      src: "/images/gallery5.jpg",
      alt: "Coffee beans",
      title: "Premium Beans",
      description: "Sourced from ethical farms worldwide"
    },
    {
      src: "/images/gallery6.jpg",
      alt: "Pastry display",
      title: "Fresh Pastries",
      description: "Baked daily in our kitchen"
    }
  ];
  
  // Team members
  export const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & Head Barista",
      bio: "Coffee enthusiast with over 10 years of experience in specialty coffee.",
      image: "/images/founder1.jpg"
    },
    {
      name: "Jamie Smith",
      role: "Co-Founder & Pastry Chef",
      bio: "Trained in Paris, Jamie brings artisanal baking techniques to our café.",
      image: "/images/founder2.jpg"
    },
    {
      name: "Taylor Reed",
      role: "Manager",
      bio: "Ensures everything runs smoothly while maintaining our high standards.",
      image: "/images/team1.jpg"
    },
    {
      name: "Morgan Lee",
      role: "Barista",
      bio: "Known for creating the most intricate latte art designs.",
      image: "/images/team2.jpg"
    }
  ];
  
  // Events
  export const upcomingEvents = [
    {
      title: "Coffee Tasting Night",
      date: "June 15, 2025",
      time: "7:00 PM - 9:00 PM",
      description: "Sample our new seasonal beans and learn about their origins.",
      image: "/images/events/event1.jpg"
    },
    {
      title: "Latte Art Workshop",
      date: "June 22, 2025",
      time: "4:00 PM - 6:00 PM",
      description: "Learn the basics of creating beautiful designs in your coffee.",
      image: "/images/events/event2.jpg"
    },
    {
      title: "Live Music Friday",
      date: "Every Friday",
      time: "6:00 PM - 8:00 PM",
      description: "Local musicians perform while you enjoy your evening coffee.",
      image: "/images/events/event3.jpg"
    }
  ];