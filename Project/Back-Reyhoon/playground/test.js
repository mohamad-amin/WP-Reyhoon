const mongoose = require('mongoose');

const Address = require('../model/address')
const Category = require('../model/category')
const Comment = require('../model/comment')
const Food = require('../model/food')
const Restaurant = require('../model/restaurant')

mongoose.connect("mongodb://localhost/playground", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Database Error!"));
db.once("open", function() {
  console.log("Database is alive!");
});

let ad0 = new Address({
    city: 'قزوین',
    area: 'اول',
    addressLine: 'قزوین منطقه اول'
})

let ad11 = new Address({
    city: 'تهران',
    area: 'اول',
    addressLine: 'تهران منطقه اول ۱'
})

let ad12 = new Address({
    city: 'تهران',
    area: 'اول',
    addressLine: 'تهران منطقه اول ۲'
})

let ad13 = new Address({
    city: 'تهران',
    area: 'اول',
    addressLine: 'تهران منطقه اول ۳'
})

let ad14 = new Address({
    city: 'تهران',
    area: 'اول',
    addressLine: 'تهران منطقه اول ۴'
})

let ad21 = new Address({
    city: 'تهران',
    area: 'دوم',
    addressLine: 'تهران منطقه دوم ۱'
})

let ad22 = new Address({
    city: 'تهران',
    area: 'دوم',
    addressLine: 'تهران منطقه دوم ۲'
})

let ad31 = new Address({
    city: 'تهران',
    area: 'سوم',
    addressLine: 'تهران منطقه سوم ۱'
})

let cat1 = new Category({
    name: 'پیتزا'
})

let cat2 = new Category({
    name: 'پاستا'
})

let cat3 = new Category({
    name: 'ساندویچ'
})

let cat4 = new Category({
    name: 'برگر'
})

let cat5 = new Category({
    name: 'کباب'
})

let cat6 = new Category({
    name: 'خورشت'
})

let cat7 = new Category({
    name: 'ایرانی'
})

let cat8 = new Category({
    name: 'خارجی'
})
let cat9 = new Category({
    name: 'گیاهی'
})

let pizza1 = new Food({
   name: 'پیتزا ۱',
   price: 20000, 
   description: 'توضیح',
   foodSet: 'پیتزا'
})
let pizza2 = new Food({
    name: 'پیتزا ۲',
    price: 22000, 
    description: 'توضیح',
    foodSet: 'پیتزا'
 })
let pizza3 = new Food({
    name: 'پیتزا ۳',
    price: 23000, 
    description: 'توضیح',
    foodSet: 'پیتزا'
 })
 let pizza4 = new Food({
    name: 'پیتزا ۴',
    price: 23000, 
    description: 'توضیح',
    foodSet: 'پیتزا'
 })

let past1 = new Food({
    name: 'پاستا ۱',
    price: 24000, 
    description: 'توضیح',
    foodSet: 'پاستا'
 })
let past2 = new Food({
    name: 'پاستا ۲',
    price: 34000, 
    description: 'توضیح',
    foodSet: 'پاستا'
 })
let past3 = new Food({
    name: 'پاستا ۳',
    price: 28000, 
    description: 'توضیح',
    foodSet: 'پاستا'
 })

 let kebab1 = new Food({
    name: 'چلوکباب',
    price: 24000, 
    description: 'توضیح',
    foodSet: 'کباب'
 })
 let kebab2 = new Food({
    name: 'جوجه‌کباب',
    price: 28000, 
    description: 'توضیح',
    foodSet: 'کباب'
 })

 let irani1 = new Food({
    name: 'قیمه',
    price: 14000, 
    description: 'توضیح',
    foodSet: 'خورشت'
 })
 let irani2 = new Food({
    name: 'قورمه',
    price: 14000, 
    description: 'توضیح',
    foodSet: 'خورشت'
 })
 let irani3 = new Food({
    name: 'کتلت',
    price: 14000, 
    description: 'توضیح',
    foodSet: 'خورشت'
 })
 

 let rest0 = new Restaurant({
     name: 'رستوران ۰',
     logo: '',
     openingTime: 0,
     closingTime: 24,
     averageRate: 4.3,
     address: ad0,
     categories: [cat8, cat9],
     foods: [],
     comments: []
 })

 let rest11 = new Restaurant({
    name: 'رستوران ۱۱',
    logo: '',
    openingTime: 0,
    closingTime: 24,
    averageRate: 4.3,
    address: ad11,
    categories: [cat4, cat6, cat7],
    foods: [kebab1, kebab2, irani1, irani2],
    comments: []
})

let rest12 = new Restaurant({
    name: 'رستوران ۱۲',
    logo: '',
    openingTime: 0,
    closingTime: 24,
    averageRate: 3.4,
    address: ad12,
    categories: [cat4, cat6, cat7],
    foods: [kebab1, kebab2, irani1, irani2, irani3],
    comments: []
})

let rest13 = new Restaurant({
    name: 'رستوران ۱۳',
    logo: '',
    openingTime: 12,
    closingTime: 18,
    averageRate: 2.3,
    address: ad13,
    categories: [cat6, cat7],
    foods: [irani1, irani2, irani3],
    comments: []
})

let rest14 = new Restaurant({
    name: 'رستوران ۱۴',
    logo: '',
    openingTime: 9,
    closingTime: 21,
    averageRate: 4.7,
    address: ad14,
    categories: [cat5],
    foods: [kebab1, kebab2],
    comments: []
})

let rest21 = new Restaurant({
    name: 'رستوران ۲۱',
    logo: '',
    openingTime: 0,
    closingTime: 24,
    averageRate: 4.6,
    address: ad12,
    categories: [cat1],
    foods: [pizza1, pizza2, pizza3, pizza4],
    comments: []
})
 
let rest22 = new Restaurant({
    name: 'رستوران ۲۲',
    logo: '',
    openingTime: 0,
    closingTime: 24,
    averageRate: 4.6,
    address: ad13,
    categories: [cat1, cat2, cat3, cat4],
    foods: [pizza1, past1, past2, past3],
    comments: []
})
 
Address.insertMany([ad0, ad11, ad12, ad13, ad14, ad21, ad22, ad31]).then(() => console.log('Saved all!'), err => console.log(err))
Category.insertMany([cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9]).then(() => console.log('Saved all!'), err => console.log(err))
Food.insertMany([pizza1, pizza2, pizza3, pizza4, past1, past2, past3, kebab1, kebab2, irani1, irani2, irani3]).then(() => console.log('Saved all!'), err => console.log(err))
Restaurant.insertMany([rest0, rest11, rest12, rest13, rest14, rest21, rest22]).then(() => console.log('Saved all!'), err => console.log(err))

Address.find({}).exec((err, data) => console.log(data))
Restaurant.find({}).exec((err, data) => console.log(data))
Restaurant.findOne({_id: '5d1e3a9f2d8b64264a4f8b71'}).exec((err, data) => console.log(data))
Restaurant.findById('5d1e3a9f2d8b64264a4f8b71').exec((err, data) => console.log(data))