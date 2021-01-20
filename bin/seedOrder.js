require("dotenv").config();
require("./../config/dbConnection");
const Order = require("./../models/Order");
const Company = require("./../models/Company");
const User = require("./../models/User");

const orders = [
  {
    name: "Coca-Cola n 2020",
    number: "PO193946891",
    date: new Date("January 12, 2021 09:45:22"),
    season: "Jan 2020",
    category: "Beverages",
    paymentTerms: {
      firstPaymentAmount: 50,
      secondPaymentAmount: 50,
      firstPaymentDate: new Date("February 7, 2021 09:00:00"),
      secondPaymentDate: new Date("March 7, 2021 09:00:00"),
    },
    deliveryWindow: {
      startDate: new Date("February 15, 2021 09:00:00"),
      endDate: new Date("February 28, 2021 09:00:00"),
    },
    currency: "EUR",
    users: [],
    comments: [{
      
    }],
    documents: [],
    items: [
      {
        itemName: "Diet Coke 2L",
        price: 0.55,
        quantity: 50,
      },
      {
        itemName: "Coca Light 33mL x 6",
        price: 0.85,
        quantity: 45,
      },
      {
        itemName: "Fanta 1L",
        price: 0.2,
        quantity: 80,
      },
    ],
    steps: [
      {
        stage: "submitted",
        date: new Date("January 14, 2021 08:40:00"),
      },
    ],

    paymentHistory: [
      { payment: "unpaid", date: new Date("January 4, 2021 09:00:00") },

      {
        payment: "partially paid",
        date: new Date("January 18, 2021 09:00:00"),
      },
    ],
  },

  {
    name: "Danone Dec 2020",
    number: "PO2930183",
    date: new Date("December 20, 2020 15:45:22"),
    season: "Dec 2020",
    category: "Snacks",
    paymentTerms: {
      firstPaymentAmount: 30,
      secondPaymentAmount: 70,
      firstPaymentDate: new Date("December 23, 2020 09:00:00"),
      secondPaymentDate: new Date("December 31, 2020 09:00:00"),
    },
    deliveryWindow: {
      startDate: new Date("January 25, 2021 09:00:00"),
      endDate: new Date("February 4, 2021 09:00:00"),
    },
    currency: "EUR",
    users: [],
    comments: [],
    documents: [],
    items: [
      {
        itemName: "Activia Yogurt 4 x 25g",
        price: 0.5,
        quantity: 100,
      },
      {
        itemName: "Danao 50mL",
        price: 0.75,
        quantity: 40,
      },
      {
        itemName: "Danone Strawberry 4 x 25g",
        price: 0.44,
        quantity: 75,
      },
    ],
    steps: [
      {
        stage: "submitted",
        date: new Date("December 21, 2020 15:45:22"),
      },
      {
        stage: "shipped",
        date: new Date("December 23, 2020 10:20:59"),
      },
    ],

    paymentHistory: [
      { payment: "unpaid", date: new Date("December 21, 2020 09:00:00") },

      {
        payment: "partially paid",
        date: new Date("December 22, 2020 09:00:00"),
      },

      { payment: "fully paid", date: new Date("December 29, 2020 09:00:00") },
    ],
  },

  {
    name: "Mondelez Dec 2020",
    number: "PO39204811",
    date: new Date("December 28, 2020 10:45:18"),
    season: "Dec 2020",
    category: "Snacks",
    deliveryWindow: {
      startDate: new Date("February 4, 2021 09:00:00"),
      endDate: new Date("February 20, 2021 09:00:00"),
    },
    currency: "EUR",
    users: [],
    comments: [],
    documents: [],
    items: [
      {
        itemName: "Petit Lu 100g",
        price: 1.1,
        quantity: 150,
      },
      {
        itemName: "Oreos Classic",
        price: 1.51,
        quantity: 95,
      },
      {
        itemName: "Cadbury Milk Bars 200g",
        price: 0.96,
        quantity: 80,
      },
    ],
    steps: [
      {
        stage: "submitted",
        date: new Date("December 28, 2020 16:46:18"),
      },
    ],
    paymentTerms: {
      firstPaymentAmount: 30,
      secondPaymentAmount: 70,
      firstPaymentDate: new Date("January 1, 2021 09:00:00"),
      secondPaymentDate: new Date("February 5, 2021 09:00:00"),
    },
    paymentHistory: [
      { payment: "unpaid", date: new Date("December 21, 2020 09:00:00") },

      // { payment: "partially paid",
      //   date: new Date("December 22, 2020 09:00:00")
      // },

      // { payment: "fully paid",
      //   date: new Date("December 29, 2020 09:00:00")
      // },
    ],
  },

  {
    name: "Coca-Cola Jan 2020",
    number: "PO193946891",
    date: new Date("January 12, 2021 09:45:22"),
    season: "Jan 2020",
    category: "Beverages",

    deliveryWindow: {
      startDate: new Date("February 15, 2021 09:00:00"),
      endDate: new Date("February 28, 2021 09:00:00"),
    },
    currency: "EUR",
    users: [],
    comments: [],
    documents: [],
    items: [
      {
        itemName: "Diet Coke 2L",
        price: 0.55,
        quantity: 50,
      },
      {
        itemName: "Coca Light 33mL x 6",
        price: 0.85,
        quantity: 45,
      },
      {
        itemName: "Fanta 1L",
        price: 0.2,
        quantity: 80,
      },
    ],
    steps: [
      {
        stage: "submitted",
        date: new Date("January 14, 2021 08:40:00"),
      },
    ],

    paymentTerms: {
      firstPaymentAmount: 30,
      secondPaymentAmount: 70,
      firstPaymentDate: new Date("January 1, 2021 09:00:00"),
      secondPaymentDate: new Date("February 5, 2021 09:00:00"),
    },
    paymentHistory: [
      { payment: "unpaid", date: new Date("December 21, 2020 09:00:00") },

      {
        payment: "partially paid",
        date: new Date("December 22, 2020 09:00:00"),
      },

      { payment: "fully paid", date: new Date("December 29, 2020 09:00:00") },
    ],
  },

  {
    name: "Danone Dec 2020",
    number: "PO2930183",
    date: new Date("December 20, 2020 15:45:22"),
    season: "Dec 2020",
    category: "Snacks",

    deliveryWindow: {
      startDate: new Date("January 1, 2021 09:00:00"),
      endDate: new Date("February 4, 2021 09:00:00"),
    },
    currency: "EUR",
    users: [],
    comments: [],
    documents: [],
    items: [
      {
        itemName: "Activia Yogurt 4 x 25g",
        price: 0.5,
        quantity: 100,
      },
      {
        itemName: "Danao 50mL",
        price: 0.75,
        quantity: 40,
      },
      {
        itemName: "Danone Strawberry 4 x 25g",
        price: 0.44,
        quantity: 75,
      },
    ],
    steps: [
      {
        stage: "submitted",
        date: new Date("December 21, 2020 15:45:22"),
      },
      {
        stage: "shipped",
        date: new Date("January 2, 2021 14:20:33"),
      },
    ],
    paymentTerms: {
      firstPaymentAmount: 30,
      secondPaymentAmount: 70,
      firstPaymentDate: new Date("January 1, 2021 09:00:00"),
      secondPaymentDate: new Date("February 5, 2021 09:00:00"),
    },
    paymentHistory: [
      { payment: "unpaid", date: new Date("December 21, 2020 09:00:00") },

      {
        payment: "partially paid",
        date: new Date("December 31 , 2020 09:00:00"),
      },

      { payment: "fully paid", date: new Date("January 17, 2021 09:00:00") },
    ],
  },

  {
    name: "Mondelez Dec 2020",
    number: "PO39204811",
    date: new Date("December 28, 2020 10:45:18"),
    season: "Dec 2020",
    category: "Snacks",

    deliveryWindow: {
      startDate: new Date("February 4, 2021 09:00:00"),
      endDate: new Date("February 20, 2021 09:00:00"),
    },
    currency: "EUR",
    users: [],
    comments: [],
    documents: [],
    items: [
      {
        itemName: "Petit Lu 100g",
        price: 1.1,
        quantity: 150,
      },
      {
        itemName: "Oreos Classic",
        price: 1.51,
        quantity: 95,
      },
      {
        itemName: "Cadbury Milk Bars 200g",
        price: 0.96,
        quantity: 80,
      },
    ],
    steps: [
      {
        stage: "submitted",
        date: new Date("December 28, 2020 16:46:18"),
      },
    ],

    paymentTerms: {
      firstPaymentAmount: 30,
      secondPaymentAmount: 70,
      firstPaymentDate: new Date("January 1, 2021 09:00:00"),
      secondPaymentDate: new Date("February 5, 2021 09:00:00"),
    },
    paymentHistory: [
      { payment: "unpaid", date: new Date("December 21, 2020 09:00:00") },

      {
        payment: "partially paid",
        date: new Date("December 31 , 2020 09:00:00"),
      },

      { payment: "fully paid", date: new Date("January 17, 2021 09:00:00") },
    ],
  },

  {
    name: "Coca-Cola Jan 2020",
    number: "PO193946891",
    date: new Date("January 12, 2021 09:45:22"),
    season: "Jan 2020",
    category: "Beverages",

    deliveryWindow: {
      startDate: new Date("February 15, 2021 09:00:00"),
      endDate: new Date("February 28, 2021 09:00:00"),
    },
    currency: "EUR",
    users: [],
    comments: [],
    documents: [],
    items: [
      {
        itemName: "Diet Coke 2L",
        price: 0.55,
        quantity: 50,
      },
      {
        itemName: "Coca Light 33mL x 6",
        price: 0.85,
        quantity: 45,
      },
      {
        itemName: "Fanta 1L",
        price: 0.2,
        quantity: 80,
      },
    ],
    steps: [
      {
        stage: "submitted",
        date: new Date("January 14, 2021 08:40:00"),
      },
    ],
    paymentTerms: {
      firstPaymentAmount: 30,
      secondPaymentAmount: 70,
      firstPaymentDate: new Date("January 1, 2021 09:00:00"),
      secondPaymentDate: new Date("February 5, 2021 09:00:00"),
    },
    paymentHistory: [
      { payment: "unpaid", date: new Date("December 21, 2020 09:00:00") },

      {
        payment: "partially paid",
        date: new Date("December 31 , 2020 09:00:00"),
      },

      { payment: "fully paid", date: new Date("January 17, 2021 09:00:00") },
    ],
  },

  {
    name: "Danone Dec 2020",
    number: "PO2930183",
    date: new Date("December 20, 2020 15:45:22"),
    season: "Dec 2020",
    category: "Snacks",

    deliveryWindow: {
      startDate: new Date("January 25, 2021 09:00:00"),
      endDate: new Date("February 4, 2021 09:00:00"),
    },
    currency: "EUR",
    users: [],
    comments: [],
    documents: [],
    items: [
      {
        itemName: "Activia Yogurt 4 x 25g",
        price: 0.5,
        quantity: 100,
      },
      {
        itemName: "Danao 50mL",
        price: 0.75,
        quantity: 40,
      },
      {
        itemName: "Danone Strawberry 4 x 25g",
        price: 0.44,
        quantity: 75,
      },
    ],
    steps: [
      {
        stage: "submitted",
        date: new Date("December 21, 2020 15:45:22"),
      },
      {
        stage: "shipped",
        date: new Date("December 23, 2020 10:20:59"),
      },
    ],

    paymentTerms: {
      firstPaymentAmount: 30,
      secondPaymentAmount: 70,
      firstPaymentDate: new Date("January 1, 2021 09:00:00"),
      secondPaymentDate: new Date("February 5, 2021 09:00:00"),
    },
    paymentHistory: [
      { payment: "unpaid", date: new Date("December 21, 2020 09:00:00") },

      {
        payment: "partially paid",
        date: new Date("December 31 , 2020 09:00:00"),
      },

      { payment: "fully paid", date: new Date("January 17, 2021 09:00:00") },
    ],
  },

  {
    name: "Mondelez Dec 2020",
    number: "PO39204811",
    date: new Date("December 28, 2020 10:45:18"),
    season: "Dec 2020",
    category: "Snacks",

    deliveryWindow: {
      startDate: new Date("February 4, 2021 09:00:00"),
      endDate: new Date("February 20, 2021 09:00:00"),
    },
    currency: "EUR",
    users: [],
    comments: [],
    documents: [],
    items: [
      {
        itemName: "Petit Lu 100g",
        price: 1.1,
        quantity: 150,
      },
      {
        itemName: "Oreos Classic",
        price: 1.51,
        quantity: 95,
      },
      {
        itemName: "Cadbury Milk Bars 200g",
        price: 0.96,
        quantity: 80,
      },
    ],
    steps: [
      {
        stage: "submitted",
        date: new Date("December 28, 2020 16:46:18"),
      },
    ],
    paymentTerms: {
      firstPaymentAmount: 30,
      secondPaymentAmount: 70,
      firstPaymentDate: new Date("January 1, 2021 09:00:00"),
      secondPaymentDate: new Date("February 5, 2021 09:00:00"),
    },
    paymentHistory: [
      { payment: "unpaid", date: new Date("December 21, 2020 09:00:00") },

      {
        payment: "partially paid",
        date: new Date("December 31 , 2020 09:00:00"),
      },

      { payment: "fully paid", date: new Date("January 17, 2021 09:00:00") },
    ],
  },

  {
    name: "Coca-Cola Jan 2020",
    number: "PO193946891",
    date: new Date("January 12, 2021 09:45:22"),
    season: "Jan 2020",
    category: "Beverages",

    deliveryWindow: {
      startDate: new Date("February 15, 2021 09:00:00"),
      endDate: new Date("February 28, 2021 09:00:00"),
    },
    currency: "EUR",
    users: [],
    comments: [],
    documents: [],
    items: [
      {
        itemName: "Diet Coke 2L",
        price: 0.55,
        quantity: 50,
      },
      {
        itemName: "Coca Light 33mL x 6",
        price: 0.85,
        quantity: 45,
      },
      {
        itemName: "Fanta 1L",
        price: 0.2,
        quantity: 80,
      },
    ],
    steps: [
      {
        stage: "submitted",
        date: new Date("January 14, 2021 08:40:00"),
      },
    ],

    paymentTerms: {
      firstPaymentAmount: 40,
      secondPaymentAmount: 60,
      firstPaymentDate: new Date("January 1, 2021 09:00:00"),
      secondPaymentDate: new Date("February 5, 2021 09:00:00"),
    },
    paymentHistory: [
      { payment: "unpaid", date: new Date("December 21, 2020 09:00:00") },

      {
        payment: "partially paid",
        date: new Date("December 31 , 2020 09:00:00"),
      },

      { payment: "fully paid", date: new Date("January 17, 2021 09:00:00") },
    ],
  },

  {
    name: "Danone Dec 2020",
    number: "PO2930183",
    date: new Date("December 20, 2020 15:45:22"),
    season: "Dec 2020",
    category: "Snacks",

    deliveryWindow: {
      startDate: new Date("January 25, 2021 09:00:00"),
      endDate: new Date("February 4, 2021 09:00:00"),
    },
    currency: "EUR",
    users: [],
    comments: [],
    documents: [],
    items: [
      {
        itemName: "Activia Yogurt 4 x 25g",
        price: 0.5,
        quantity: 100,
      },
      {
        itemName: "Danao 50mL",
        price: 0.75,
        quantity: 40,
      },
      {
        itemName: "Danone Strawberry 4 x 25g",
        price: 0.44,
        quantity: 75,
      },
    ],
    steps: [
      {
        stage: "submitted",
        date: new Date("December 21, 2020 15:45:22"),
      },
      {
        stage: "shipped",
        date: new Date("January 2, 2020 14:20:33"),
      },
    ],
    paymentTerms: {
      firstPaymentAmount: 40,
      secondPaymentAmount: 60,
      firstPaymentDate: new Date("January 1, 2021 09:00:00"),
      secondPaymentDate: new Date("February 5, 2021 09:00:00"),
    },
    paymentHistory: [
      { payment: "unpaid", date: new Date("December 21, 2020 09:00:00") },

      {
        payment: "partially paid",
        date: new Date("December 31 , 2020 09:00:00"),
      },

      // { payment: "fully paid",
      //   date: new Date("January 17, 2021 09:00:00")
      // },
    ],
  },
  {
    name: "Mondelez Dec 2020",
    number: "PO39204811",
    date: new Date("December 28, 2020 10:45:18"),
    season: "Dec 2020",
    category: "Snacks",

    deliveryWindow: {
      startDate: new Date("February 4, 2021 09:00:00"),
      endDate: new Date("February 20, 2021 09:00:00"),
    },
    currency: "EUR",
    users: [],
    comments: [],
    documents: [],
    items: [
      {
        itemName: "Petit Lu 100g",
        price: 1.1,
        quantity: 150,
      },
      {
        itemName: "Oreos Classic",
        price: 1.51,
        quantity: 95,
      },
      {
        itemName: "Cadbury Milk Bars 200g",
        price: 0.96,
        quantity: 80,
      },
    ],
    steps: [
      {
        stage: "submitted",
        date: new Date("December 28, 2020 16:46:18"),
      },
    ],

    paymentTerms: {
      firstPaymentAmount: 40,
      secondPaymentAmount: 60,
      firstPaymentDate: new Date("January 1, 2021 09:00:00"),
      secondPaymentDate: new Date("March 5, 2021 09:00:00"),
    },
    paymentHistory: [
      { payment: "unpaid", date: new Date("December 21, 2020 09:00:00") },

      {
        payment: "partially paid",
        date: new Date("December 31 , 2020 09:00:00"),
      },

      // { payment: "fully paid",
      //   date: new Date("January 17, 2021 09:00:00")
      // },
    ],
  },

  {
    name: "Coca-Cola Jan 2020",
    number: "PO193946891",
    date: new Date("January 12, 2021 09:45:22"),
    season: "Jan 2020",
    category: "Beverages",

    deliveryWindow: {
      startDate: new Date("February 15, 2021 09:00:00"),
      endDate: new Date("February 28, 2021 09:00:00"),
    },
    currency: "EUR",
    users: [],
    comments: [],
    documents: [],
    items: [
      {
        itemName: "Diet Coke 2L",
        price: 0.55,
        quantity: 50,
      },
      {
        itemName: "Coca Light 33mL x 6",
        price: 0.85,
        quantity: 45,
      },
      {
        itemName: "Fanta 1L",
        price: 0.2,
        quantity: 80,
      },
    ],
    steps: [
      {
        stage: "submitted",
        date: new Date("January 14, 2021 08:40:00"),
      },
    ],
    paymentTerms: {
      firstPaymentAmount: 40,
      secondPaymentAmount: 60,
      firstPaymentDate: new Date("January 1, 2021 09:00:00"),
      secondPaymentDate: new Date("February 5, 2021 09:00:00"),
    },
    paymentHistory: [
      { payment: "unpaid", date: new Date("January 12, 2021 09:00:00") },

      // { payment: "partially paid",
      //   date: new Date("December 31 , 2020 09:00:00")
      // },

      // { payment: "fully paid",
      //   date: new Date("January 17, 2021 09:00:00")
      // },
    ],
  },

  {
    name: "Danone Dec 2020",
    number: "PO2930183",
    date: new Date("December 20, 2020 15:45:22"),
    season: "Dec 2020",
    category: "Snacks",

    deliveryWindow: {
      startDate: new Date("January 25, 2021 09:00:00"),
      endDate: new Date("February 4, 2021 09:00:00"),
    },
    currency: "EUR",
    users: [],
    comments: [],
    documents: [],
    items: [
      {
        itemName: "Activia Yogurt 4 x 25g",
        price: 0.5,
        quantity: 100,
      },
      {
        itemName: "Danao 50mL",
        price: 0.75,
        quantity: 40,
      },
      {
        itemName: "Danone Strawberry 4 x 25g",
        price: 0.44,
        quantity: 75,
      },
    ],
    steps: [
      {
        stage: "submitted",
        date: new Date("December 21, 2020 15:45:22"),
      },
      {
        stage: "shipped",
        date: new Date("December 23, 2020 10:20:59"),
      },
    ],

    paymentTerms: {
      firstPaymentAmount: 40,
      secondPaymentAmount: 60,
      firstPaymentDate: new Date("January 1, 2021 09:00:00"),
      secondPaymentDate: new Date("February 5, 2021 09:00:00"),
    },
    paymentHistory: [
      { payment: "unpaid", date: new Date("December 21, 2020 09:00:00") },

      {
        payment: "partially paid",
        date: new Date("December 31 , 2020 09:00:00"),
      },

      { payment: "fully paid", date: new Date("January 19, 2021 09:00:00") },
    ],
  },

  {
    name: "Mondelez Dec 2020",
    number: "PO39204811",
    date: new Date("December 28, 2020 10:45:18"),
    season: "Dec 2020",
    category: "Snacks",

    deliveryWindow: {
      startDate: new Date("February 4, 2021 09:00:00"),
      endDate: new Date("February 20, 2021 09:00:00"),
    },
    currency: "EUR",
    users: [],
    comments: [],
    documents: [],
    items: [
      {
        itemName: "Petit Lu 100g",
        price: 1.1,
        quantity: 150,
      },
      {
        itemName: "Oreos Classic",
        price: 1.51,
        quantity: 95,
      },
      {
        itemName: "Cadbury Milk Bars 200g",
        price: 0.96,
        quantity: 80,
      },
    ],
    steps: [
      {
        stage: "submitted",
        date: new Date("December 30, 2020 10:20:59"),
      },
    ],

    paymentTerms: {
      firstPaymentAmount: 40,
      secondPaymentAmount: 60,
      firstPaymentDate: new Date("December 31 , 2020 09:00:00"),
      secondPaymentDate: new Date("February 5, 2021 09:00:00"),
    },

    paymentHistory: [
      { payment: "unpaid", date: new Date("December 28, 2020 09:00:00") },

      {
        payment: "partially paid",
        date: new Date("December 30 , 2020 09:00:00"),
      },

      { payment: "fully paid", date: new Date("January 17, 2021 09:00:00") },
    ],
  },

  {
    name: "Coca-Cola Jan 2020",
    number: "PO193946891",
    date: new Date("January 12, 2021 09:45:22"),
    season: "Jan 2020",
    category: "Beverages",

    deliveryWindow: {
      startDate: new Date("February 15, 2021 09:00:00"),
      endDate: new Date("February 28, 2021 09:00:00"),
    },
    currency: "EUR",
    users: [],
    comments: [],
    documents: [],
    items: [
      {
        itemName: "Diet Coke 2L",
        price: 0.55,
        quantity: 50,
      },
      {
        itemName: "Coca Light 33mL x 6",
        price: 0.85,
        quantity: 45,
      },
      {
        itemName: "Fanta 1L",
        price: 0.2,
        quantity: 80,
      },
    ],
    steps: [
      {
        stage: "submitted",
        date: new Date("January 16, 2021 08:40:00"),
      },
    ],

    paymentTerms: {
      firstPaymentAmount: 30,
      secondPaymentAmount: 70,
      firstPaymentDate: new Date("January 1, 2021 09:00:00"),
      secondPaymentDate: new Date("February 5, 2021 09:00:00"),
    },
    paymentHistory: [
      { payment: "unpaid", date: new Date("January 12, 2021 09:00:00") },

      // { payment: "partially paid",
      //   date: new Date("January 12, 2021 09:00:00")
      // },

      // { payment: "fully paid",
      //   date: new Date("January 17, 2021 09:00:00")
      // },
    ],
  },
  {
    name: "Danone Dec 2020",
    number: "PO2930183",
    date: new Date("December 20, 2020 15:45:22"),
    season: "Dec 2020",
    category: "Snacks",

    deliveryWindow: {
      startDate: new Date("January 1, 2021 09:00:00"),
      endDate: new Date("February 4, 2021 09:00:00"),
    },
    currency: "EUR",
    users: [],
    comments: [],
    documents: [],
    items: [
      {
        itemName: "Activia Yogurt 4 x 25g",
        price: 0.5,
        quantity: 100,
      },
      {
        itemName: "Danao 50mL",
        price: 0.75,
        quantity: 40,
      },
      {
        itemName: "Danone Strawberry 4 x 25g",
        price: 0.44,
        quantity: 75,
      },
    ],
    steps: [
      {
        stage: "submitted",
        date: new Date("December 21, 2020 15:45:22"),
      },
      {
        stage: "shipped",
        date: new Date("December 25, 2020 10:20:59"),
      },
    ],

    paymentTerms: {
      firstPaymentAmount: 30,
      secondPaymentAmount: 70,
      firstPaymentDate: new Date("January 1, 2021 09:00:00"),
      secondPaymentDate: new Date("February 5, 2021 09:00:00"),
    },
    paymentHistory: [
      { payment: "unpaid", date: new Date("December 20, 2020 09:00:00") },

      {
        payment: "partially paid",
        date: new Date("December 31 , 2020 09:00:00"),
      },

      // { payment: "fully paid",
      //   date: new Date("January 17, 2021 09:00:00")
      // },
    ],
  },
  {
    name: "Mondelez Dec 2020",
    number: "PO39204811",
    date: new Date("December 28, 2020 10:45:18"),
    season: "Dec 2020",
    category: "Snacks",

    deliveryWindow: {
      startDate: new Date("February 4, 2021 09:00:00"),
      endDate: new Date("February 20, 2021 09:00:00"),
    },
    currency: "EUR",
    users: [],
    comments: [],
    documents: [],
    items: [
      {
        itemName: "Petit Lu 100g",
        price: 1.1,
        quantity: 150,
      },
      {
        itemName: "Oreos Classic",
        price: 1.51,
        quantity: 95,
      },
      {
        itemName: "Cadbury Milk Bars 200g",
        price: 0.96,
        quantity: 80,
      },
    ],
    steps: [
      {
        stage: "submitted",
        date: new Date("December 30, 2020 10:20:59"),
      },
    ],
    paymentTerms: {
      firstPaymentAmount: 30,
      secondPaymentAmount: 70,
      firstPaymentDate: new Date("January 1, 2021 09:00:00"),
      secondPaymentDate: new Date("February 5, 2021 09:00:00"),
    },
    paymentHistory: [
      { payment: "unpaid", date: new Date("December 28, 2020 09:00:00") },

      {
        payment: "partially paid",
        date: new Date("December 31 , 2020 09:00:00"),
      },

      // { payment: "fully paid",
      //   date: new Date("January 17, 2021 09:00:00")
      // },
    ],
  },
];

Order.deleteMany()
  .then(async () => {
    const retailerCompanies = await Company.find({ companyType: "retailer" });
    function getRandom(arg) {
      return Math.floor(Math.random() * Math.floor(arg.length));
    }
    for (let i = 0; i < orders.length; i++) {
      const randomRetailerCo = getRandom(retailerCompanies);
      const randomRetailerCoUser = getRandom(
        retailerCompanies[randomRetailerCo].userList
      );
      const randomRetailerCoSeason = getRandom(
        retailerCompanies[randomRetailerCo].seasonList
      );
      const randomRetailerCoCategory = getRandom(
        retailerCompanies[randomRetailerCo].categoryList
      );
      orders[i].retailerCompany = retailerCompanies[randomRetailerCo];
      orders[i].retailerContact =
        retailerCompanies[randomRetailerCo].userList[randomRetailerCoUser];
      orders[i].users.push(
        retailerCompanies[randomRetailerCo].userList[randomRetailerCoUser]
      );
      orders[i].season =
        retailerCompanies[randomRetailerCo].seasonList[randomRetailerCoSeason];
      orders[i].category =
        retailerCompanies[randomRetailerCo].categoryList[
          randomRetailerCoCategory
        ];
    }
  })
  .then(async () => {
    const insertedOrders = await Order.insertMany(orders);
    console.log(`ok : ${insertedOrders.length} orders inserted`);
  })
  .catch((err) => {
    console.log(err);
  });
