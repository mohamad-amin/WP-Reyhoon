import React, {Component} from 'react';

import axios from 'axios/index'
import queryString from 'query-string'

import Header from './common/header'
import Footer from './common/footer'
import RestaurantItem from './restaurants/restaurant_item'
import { Grid, Paper, Typography, withStyles, Divider, NativeSelect, Input, OutlinedInput, InputAdornment, TextField } from '@material-ui/core';
import CheckBox from './restaurants/checkbox';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import img_banner from '../assets/images/search-banner.jpg'

const categoriesWidth = 200

const RestaurantFilterInput = withStyles(theme => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    root: {
      borderRadius: 4,
      position: 'relative',
      border: '1px solid #ced4da',
      backgroundColor: '#f6f6f6',
      fontSize: 14,
      paddingLeft: '10px',
      paddingRight: '10px',
      paddingTop: '10px',
      paddingBottom: '10px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: 'red',
      },
    },
  }))(InputBase);

const CategoryFilterInput = withStyles(theme => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      border: '1px solid #ced4da',
      backgroundColor: '#f6f6f6',
      fontSize: 14,
      width: 'max',
      paddingLeft: '10px',
      paddingRight: '10px',
      paddingTop: '10px',
      paddingBottom: '10px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: 'red',
      },
    },
  }))(InputBase);

class Restaurants extends Component {

    constructor (props){
        
        super(props);
        this.state = {};

        const values = queryString.parse(this.props.location.search);

        this.state = {
            city : values.city,
            area : values.area,
            query_restaurant : "",
            query_category : "",
            restaurants : [],
            categories : {}
        };

        this.onChangeAreaChoosed = this.onChangeAreaChoosed.bind(this);
        this.onChangeAreaUnchoosed = this.onChangeAreaUnchoosed.bind(this);
        this.onSearchCategoryChange = this.onSearchCategoryChange.bind(this);
        this.onSearchRestaurantChange = this.onSearchRestaurantChange.bind(this);
        this.onCategoriesSelectChange = this.onCategoriesSelectChange.bind(this);

        console.log('Const called!')

    }

    componentWillMount() {
        axios.get("http://localhost:3001/api/restaurants/?city="+this.state.city+"&area="+this.state.area)
            .then((response) => {
                const restaurants = response.data;
                let categories = {};
                restaurants.forEach(rest => {
                    rest.categories.forEach(category => {
                        if (category._id in categories) {
                            categories[category._id].count++;
                        } else {
                            categories[category._id] = {};
                            categories[category._id].count = 1;
                            categories[category._id].id = category._id;
                            categories[category._id].name = category.name;
                            categories[category._id].checked = false;
                        }
                    })
                });
                this.setState({
                    restaurants : restaurants,
                    categories : categories
                });
            });
    }

    onCategoriesSelectChange(id) {
        this.setState(prev => {
            prev.categories[id].checked = !prev.categories[id].checked;
            return prev;
        })
    }

    onChangeAreaChoosed(){
        this.setState({select_new_area : true})
    }

    onChangeAreaUnchoosed(){
        this.setState({select_new_area : false})
    }

    onSearchRestaurantChange(event){
        this.setState({query_restaurant: event.target.value});
    }

    onSearchCategoryChange(event){
        this.setState({query_category: event.target.value});
    }

    render() {

        if (!this.state.restaurants.name) {
            return <br/>
        }

        let checkedCategories = []; // sorted array of { id , name , count }
        let unCheckedCategories = []; // sorted array of { id , name , count }
        let openRestaurants = []; // array of { id , name , logo , averageRate , categories , address }
        let closedRestaurants = []; // array of { id , name , logo , averageRate , categories , address }

        //calculation
        Object.keys(this.state.categories).forEach( categoryKey => {
            let category = this.state.categories[categoryKey]
            if (category.checked) {
                checkedCategories.push(category);
            } else if (category.name.includes(this.state.query_category)) {
                unCheckedCategories.push(category);
            }
        });
        const compare = (a, b) => b.count - a.count;
        checkedCategories.sort(compare);
        unCheckedCategories.sort(compare);

        const currentHour = (new Date()).getHours();
        
        this.state.restaurants.forEach(restaurant => {
            if (restaurant.name.includes(this.state.query_restaurant)) {
                let categoryIncluded = false;
                checkedCategories.forEach(checkedCat => {
                    restaurant.categories.forEach(restCat => {
                        if (checkedCat.name === restCat.name) {
                            categoryIncluded = true;
                        }
                    });
                });
                if (categoryIncluded || checkedCategories.length === 0) {
                    if (restaurant.openingTime <= currentHour && currentHour <= restaurant.closingTime){
                        restaurant.closed = false;
                        openRestaurants.push(restaurant);
                    }
                    else {
                        restaurant.closed = true;
                        closedRestaurants.push(restaurant);
                    }
                }
            }
        });

        let openRestaurantsPresentation = openRestaurants.map(rest => <RestaurantItem restaurant={rest} key={rest._id}/>);
        let closedRestaurantsPresentation = closedRestaurants.map(rest => <RestaurantItem restaurant={rest} key={rest._id}/>);
        
        let checkedCategoriesPresentation = checkedCategories.map(cat => 
            <CheckBox label={cat.name} checked={true} callback={this.onCategoriesSelectChange} cid={cat.id} count={cat.count}/>
        )
        let unCheckedCategoriesPresentation = unCheckedCategories.map(cat => 
            <CheckBox label={cat.name} checked={false} callback={this.onCategoriesSelectChange} cid={cat.id} count={cat.count}/>
        )

        return (
            <div>
                <Header />
                <div
                    style={{
                        background: "url(" + img_banner + ") no-repeat 0 -3rem",
                        backgroundSize: 'cover',
                        height: '10rem'                
                    }}
                />
                <div style={{backgroundColor: 'white', padding: 30}}>
                    <Grid container spacing={1} style={{padding: '0 10%'}}>
                        <Grid item>
                            <Typography variant="h6">{openRestaurants.length + ' رستوران امکان سرویس‌دهی به'}</Typography>
                        </Grid>
                        <Grid item>
                            <NativeSelect 
                                input={<InputBase 
                                    style={{
                                        fontSize: 20, 
                                        fontWeight: 'bolder', 
                                        marginTop: '-4px',
                                        borderBottom: '1px dashed #ccc'
                                    }}/>
                                }>
                                <option value="">{this.state.city + ', ' + this.state.area}</option>
                            </NativeSelect>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">را دارند</Typography>
                        </Grid>
                    </Grid>
                    <br/>
                    <Divider style={{height: '2px'}}/>
                    <br/>
                    <RestaurantFilterInput
                        placeholder="جست‌وجوی رستوران در این محدوده" 
                        rowsMax="1" 
                        onChange={this.onSearchRestaurantChange}
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        }
                        style={{minWidth: '450px', margin: '0 10%'}} 
                    />
                </div>
                <Grid container spacing={3} style={{padding: '5% 5% 5% 2.5%'}} justify="center">
                    <Grid item xs={2}>
                        <Paper style={{margin: '8px 0'}}>
                            <Typography variant="body2" style={{color: 'black', padding: '10px'}}>فیلتر بر اساس انواع غذا</Typography>
                            <Divider style={{marginBottom: 10}}/>
                            <CategoryFilterInput placeholder="جست‌وجوی دسته‌بندی" rowsMax="1" onChange={this.onSearchCategoryChange}
                                style={{margin: '4px 8px 4px 35px', width: 'auto', display: 'block'}}/>
                            {checkedCategories.length > 0 && checkedCategoriesPresentation}
                            {checkedCategories.length > 0 && <hr/>}
                            {unCheckedCategories.length > 0 && unCheckedCategoriesPresentation}
                        </Paper>
                    </Grid>
                    <Grid item xs={9} style={{paddingLeft: 0, paddingRight: 20}}>
                        <div style={{position: 'relative'}}>
                            {openRestaurantsPresentation}
                        </div>
                        <br/><br/>
                        {closedRestaurants.length > 0 && (
                            <div>
                                <Typography variant="h5" style={{color: 'black', fontWeight: 'bold'}}>رستوران‌های بسته</Typography>
                                <br/>
                                <div style={{position: 'relative'}}>
                                    {closedRestaurantsPresentation}
                                </div>
                            </div>
                        )}
                    </Grid>
                </Grid>
                <Footer />
            </div>
        )
    }

}

export default Restaurants