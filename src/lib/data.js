export const cafeInfo = {
    name: "All The Time Café",
    slogan: "Di mana passion terhadap kopi bertemu dengan suasana hangat dan mengundang",
    foundedYear: 2018,
    address: "Jalan Kopi 123, Kota Kafe, KK 12345",
    phone: "(555) 123-4567",
    email: "halo@allthetime.com",
    socialMedia: {
      instagram: "https://instagram.com/allthetime",
      facebook: "https://facebook.com/allthetime",
      twitter: "https://twitter.com/allthetime"
    },
    hours: {
      mondayToFriday: "07.00 - 20.00",
      saturday: "08.00 - 22.00",
      sunday: "08.00 - 20.00"
    }
  };
  
  export const menuData = [
    {
      name: "Spesialitas Kopi",
      description: "Minuman kopi signature kami yang dibuat dengan biji kopi segar dan teknik ahli.",
      items: [
        {
          name: "Racikan Signature",
          description: "Racikan rumah kami dengan sentuhan cokelat, karamel, dan secuil citrus.",
          price: 50000,
          image: "/images/menu/coffee1.jpg",
          isPopular: true,
          isVegan: true,
          isGlutenFree: true,
          allergens: []
        },
        {
          name: "Cappuccino Lembut",
          description: "Espresso, susu panas, dan busa susu dengan taburan kayu manis.",
          price: 55000,
          image: "/images/menu/coffee2.jpg",
          isPopular: false,
          isVegan: false,
          isGlutenFree: true,
          allergens: ["Susu"]
        },
        {
          name: "Caramel Macchiato",
          description: "Espresso dengan susu panas, sirup vanila, dan taburan karamel.",
          price: 60000,
          image: "/images/menu/coffee3.jpg",
          isPopular: true,
          isVegan: false,
          isGlutenFree: true,
          allergens: ["Susu"]
        },
        {
          name: "Mimpi Mocha",
          description: "Espresso kaya dengan cokelat, susu panas, dan krim kocok.",
          price: 65000,
          image: "/images/menu/coffee4.jpg",
          isPopular: false,
          isVegan: false,
          isGlutenFree: true,
          allergens: ["Susu"]
        },
        {
          name: "Cold Brew",
          description: "Diseduh selama 24 jam untuk rasa yang lembut, kaya, dengan asam rendah.",
          price: 55000,
          image: "/images/menu/coffee5.jpg",
          isPopular: true,
          isVegan: true,
          isGlutenFree: true,
          allergens: []
        },
        {
          name: "Latte Vanila",
          description: "Espresso, susu panas, dan sirup vanila yang ditambah busa.",
          price: 60000,
          image: "/images/menu/coffee6.jpg",
          isPopular: false,
          isVegan: false,
          isGlutenFree: true,
          allergens: ["Susu"]
        }
      ]
    },
    {
      name: "Minuman Non-Kopi",
      description: "Alternatif menyegarkan bagi mereka yang ingin mencoba sesuatu yang berbeda.",
      items: [
        {
          name: "Matcha Latte",
          description: "Matcha upacara premium dengan susu panas.",
          price: 65000,
          image: "/images/menu/noncoffee1.jpg",
          isPopular: true,
          isVegan: false,
          isGlutenFree: true,
          allergens: ["Susu"]
        },
        {
          name: "Teh Mint Segar",
          description: "Daun mint organik yang diseduh dengan sempurna.",
          price: 45000,
          image: "/images/menu/noncoffee2.jpg",
          isPopular: false,
          isVegan: true,
          isGlutenFree: true,
          allergens: []
        },
        {
          name: "Cokelat Panas",
          description: "Cokelat hitam premium yang dilelehkan ke dalam susu panas dan ditambah krim kocok.",
          price: 55000,
          image: "/images/menu/noncoffee3.jpg",
          isPopular: true,
          isVegan: false,
          isGlutenFree: true,
          allergens: ["Susu"]
        },
        {
          name: "Smoothie Stroberi Segar",
          description: "Stroberi segar diblender dengan yogurt dan madu.",
          price: 65000,
          image: "/images/menu/noncoffee4.jpg",
          isPopular: false,
          isVegan: false,
          isGlutenFree: true,
          allergens: ["Susu"]
        }
      ]
    },
    {
      name: "Pastri & Dessert",
      description: "Kue segar dan camilan manis untuk melengkapi minuman Anda.",
      items: [
        {
          name: "Croissant Mentega",
          description: "Lapisan renyah bermentega yang dipanggang hingga keemasan.",
          price: 40000,
          image: "/images/menu/pastry1.jpg",
          isPopular: true,
          isVegan: false,
          isGlutenFree: false,
          allergens: ["Gluten", "Susu", "Telur"]
        },
        {
          name: "Kue Keping Cokelat",
          description: "Kue lembut dengan potongan cokelat premium.",
          price: 35000,
          image: "/images/menu/pastry2.jpg",
          isPopular: true,
          isVegan: false,
          isGlutenFree: false,
          allergens: ["Gluten", "Susu", "Telur"]
        },
        {
          name: "Muffin Bluberi",
          description: "Muffin lembab penuh dengan bluberi segar.",
          price: 45000,
          image: "/images/menu/pastry3.jpg",
          isPopular: false,
          isVegan: false,
          isGlutenFree: false,
          allergens: ["Gluten", "Susu", "Telur"]
        },
        {
          name: "Roti Pisang Vegan",
          description: "Roti pisang lembab dibuat dengan bahan nabati.",
          price: 50000,
          image: "/images/menu/pastry4.jpg",
          isPopular: false,
          isVegan: true,
          isGlutenFree: false,
          allergens: ["Gluten", "Kacang"]
        },
        {
          name: "Cheesecake Bebas Gluten",
          description: "Cheesecake krim dengan alas bebas gluten dan selai berry.",
          price: 65000,
          image: "/images/menu/pastry5.jpg",
          isPopular: false,
          isVegan: false,
          isGlutenFree: true,
          allergens: ["Susu", "Telur"]
        }
      ]
    },
    {
      name: "Hidangan Ringan",
      description: "Pilihan sempurna untuk sarapan atau makan siang ringan selama kunjungan Anda.",
      items: [
        {
          name: "Roti Alpukat",
          description: "Roti sourdough dengan alpukat tumbuk, tomat ceri, dan microgreens.",
          price: 95000,
          image: "/images/menu/food1.jpg",
          isPopular: true,
          isVegan: true,
          isGlutenFree: false,
          allergens: ["Gluten"]
        },
        {
          name: "Sandwich Sarapan",
          description: "Telur, keju, dan pilihan bacon atau bayam di atas roti brioche.",
          price: 85000,
          image: "/images/menu/food2.jpg",
          isPopular: true,
          isVegan: false,
          isGlutenFree: false,
          allergens: ["Gluten", "Susu", "Telur"]
        },
        {
          name: "Mangkuk Quinoa",
          description: "Mangkuk bergizi dengan quinoa, sayuran panggang, dan saus tahini.",
          price: 110000,
          image: "/images/menu/food3.jpg",
          isPopular: false,
          isVegan: true,
          isGlutenFree: true,
          allergens: ["Wijen"]
        },
        {
          name: "Panini Caprese",
          description: "Mozzarella segar, tomat, daun basil, dan glaze balsamic di ciabatta panggang.",
          price: 110000,
          image: "/images/menu/food4.jpg",
          isPopular: false,
          isVegan: false,
          isGlutenFree: false,
          allergens: ["Gluten", "Susu"]
        }
      ]
    }
  ];
  
  // Gambar Galeri
  export const galleryImages = [
    {
      src: "/images/gallery1.jpg",
      alt: "Interior kafe",
      title: "Ruang Kami yang Nyaman",
      description: "Suasana sempurna untuk bekerja atau bersantai"
    },
    {
      src: "/images/gallery2.jpg",
      alt: "Persiapan kopi",
      title: "Proses Penyeduhan Kopi",
      description: "Menyaksikan barista kami bekerja dengan sihir mereka"
    },
    {
      src: "/images/gallery3.jpg",
      alt: "Seni latte",
      title: "Seni Latte",
      description: "Desain indah di setiap cangkir"
    },
    {
      src: "/images/gallery4.jpg",
      alt: "Tempat duduk kafe",
      title: "Tempat Duduk Luar",
      description: "Nikmati kopi Anda di udara segar"
    },
    {
      src: "/images/gallery5.jpg",
      alt: "Biji kopi",
      title: "Biji Premium",
      description: "Didapatkan dari perkebunan etis di seluruh dunia"
    },
    {
      src: "/images/gallery6.jpg",
      alt: "Pajangan pastri",
      title: "Pastri Segar",
      description: "Dipanggang setiap hari di dapur kami"
    }
  ];
  
  // Anggota Tim
  export const teamMembers = [
    {
      name: "Rabila Anjasmara",
      role: "Pendiri & Kepala Barista",
      bio: "Pecinta kopi dengan pengalaman lebih dari 10 tahun di bidang kopi spesial.",
      image: "/images/founder1.jpg"
    }
  ];
  
  // Acara
  export const upcomingEvents = [
    {
      title: "Malam Degustasi Kopi",
      date: "15 Juni 2025",
      time: "19.00 - 21.00",
      description: "Cicipi biji kopi musiman baru kami dan pelajari asal-usulnya.",
      image: "/images/events/event1.jpg"
    },
    {
      title: "Workshop Seni Latte",
      date: "22 Juni 2025",
      time: "16.00 - 18.00",
      description: "Pelajari dasar-dasar membuat desain indah di kopi Anda.",
      image: "/images/events/event2.jpg"
    },
    {
      title: "Musik Hidup Jumat",
      date: "Setiap Jumat",
      time: "18.00 - 20.00",
      description: "Musisi lokal tampil sementara Anda menikmati kopi malam.",
      image: "/images/events/event3.jpg"
    }
  ];