import $ from 'jquery'

const BEST_RESTAURANTS_URL = 'http://demo2469824.mockable.io/best-restaurants';
const FOODS_URL = 'http://demo2469824.mockable.io/foods';
const STATUS_SUCCESS = 'success';

const BEST_RESTAURANTS_COUNT = 3;
const BEST_RESTAURANTS_LIST_SELECTOR = '.best-restaurants';
const GOOD_RESTAURANTS_SECTION_SELECTOR = '.good-restaurants';

const HUGE_FOODS_COUNT = 4;
const HUGE_FOODS_SELECTOR = '.type-list';
const SMALL_FOODS_SELECTOR = '.select-type-minimal > div';

function executeOnReady() {
    $(document).ready(function () {
        loadRestaurants();
        loadFoods();
    });
}

function loadRestaurants() {
    $.get(BEST_RESTAURANTS_URL, function(data, status) {
        if (status === STATUS_SUCCESS) {

            var list = data.restaurants;
            var list_element = $(BEST_RESTAURANTS_LIST_SELECTOR)[0];
            list_element.innerHTML = '';

            for (var i = 0; i < BEST_RESTAURANTS_COUNT; i++) {
                list_element.innerHTML += constructBestRestaurantElement(
                    list[i].name,
                    list[i].imgUrl,
                    list[i].address,
                    list[i].foods,
                    list[i].rate,
                    list[i].numOfRates
                );
            }

            var good_restaurants_element = $(GOOD_RESTAURANTS_SECTION_SELECTOR)[0];
            good_restaurants_element.innerHTML = '';

            for (i = BEST_RESTAURANTS_COUNT; i < list.length; i++) {
                if (i % 4 === BEST_RESTAURANTS_COUNT) {
                    good_restaurants_element.innerHTML += '<div>';
                }
                var row = good_restaurants_element.children[Math.floor((i - BEST_RESTAURANTS_COUNT) / 4)];
                row.innerHTML += constructSmallRestaurantElement(list[i].name, list[i].imgUrl);
            }

        }
    });
}

function constructSmallRestaurantElement(name, image) {
    var result = '<a href="#">';
    result += '<div>';
    result += '<img src="' + image + '" />';
    result += '<p>' + name + '</p>';
    result += '</div>';
    result += '</a>';
    return result;
}

function constructBestRestaurantElement(name, image, address, food_types, rate, rating_counts) {
    var result = '<a href="#">';
    result += '<div class="best-restaurants-item">';
    result += '<img src="' + image + '" alt="پیتزا هات"/>';
    result += '<p class="best-restaurants-item-name">' + name + '</p>';
    result += '<div class="rating">';
    result += '<span class="rating-result">' + rate + '</span>';
    result += '<div class="score-stars">';
    result += constructRestaurantRateElement(rate);
    result += '</div>';
    result += '<span class="rating-comments">(' + rating_counts + ')</span>';
    result += '</div>';
    result += '<ul class="restaurant-types">';
    result += constructFoodTypesElement(food_types);
    result += '</ul>';
    result += '<p class="restaurant-address" title="' + address + '">';
    result += address;
    result += '</p>';
    result += '<button>شروع سفارش</button>';
    result += '</div>';
    result += '</a>';
    return result;
}

function constructRestaurantRateElement(rate) {
    var stars = '<i class="fa fa-star star-mark"></i>'.repeat(Math.floor(rate));
    if (Math.floor(rate) !== rate) {
        stars += "<i class=\"fa fa-star star-half\"></i>";
    }
    stars += "<i class=\"fa fa-star star-empty\"></i>".repeat(5 - Math.ceil(rate));
    return stars;
}

function constructFoodTypesElement(food_types) {
    return food_types.map(type => '<li>' + translateFood(type) + '</li>').join('');
}

function loadFoods() {
    $.get(FOODS_URL, function(data, status) {
        if (status === STATUS_SUCCESS) {

            var huge_foods = $(HUGE_FOODS_SELECTOR);
            var small_foods = $(SMALL_FOODS_SELECTOR)[0];
            var list = data.getElementsByTagName('food');

            huge_foods.empty();
            for (var i = 0; i < HUGE_FOODS_COUNT; i++) {
                huge_foods.append(constructHugeFoodElement(getFoodFromXML(list[i])));
            }

            small_foods.innerHTML = '';
            for (i = HUGE_FOODS_COUNT; i < list.length; i++) {
                var name = list[i].getElementsByTagName('name').item(0).innerHTML;
                small_foods.innerHTML += '<a href="#">' + translateFood(name) + '</a>';
            }

        }
    });
}

function constructHugeFoodElement(food) {
    var result = '<a href="#">';
    result += '<div>';
    result += '<h3>' + translateFood(food.name) + '</h3>';
    result += '<p>' + persianDigits(food.count) + ' رستوران فعال' + '</p>';
    result += '</div>';
    result += '</a>';
    var element = $(result);
    element.css({
        'background': 'url(' + food.imgUrl + ') no-repeat 0 0',
        'background-size': 'cover'
    });
    return element;
}

function getFoodFromXML(food) {
    return {
        name: food.getElementsByTagName('name').item(0).innerHTML,
        count: food.getElementsByTagName('count').item(0).innerHTML,
        imgUrl: food.getElementsByTagName('imgUrl').item(0).innerHTML
    }
}

function translateFood(type) {
    switch (type) {
        case 'pizza':
            return 'پیتزا';
        case 'sandwich':
            return 'ساندویچ';
        case 'burger':
            return 'برگر';
        case 'kebab':
            return 'کباب';
        case 'fastfood':
            return 'فست‌فود';
        case 'salad':
            return 'سالاد';
        case 'iranian':
            return 'ایرانی';
        case 'pasta':
            return 'پاستا';
        case 'fish':
            return 'غذای دریایی';
        case 'breakfast':
            return 'صبحانه';
        case 'juice':
            return 'آبمیوه طبیعی';
        case 'steak':
            return 'استیک';
        case 'soup':
            return 'سوپ';
    }
}

function persianDigits(number) {
    var result = '';
    for(var i in number) {
        result += String.fromCharCode(number.charCodeAt(i) + (1776 - 48));
    }
    return result;
}

export default executeOnReady