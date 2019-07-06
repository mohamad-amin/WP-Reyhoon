import React, {Component} from 'react'
import axios from 'axios/index'
import queryString from 'query-string'

import Header from './common/header';
import Footer from './common/footer';

import img_banner from '../assets/images/search-banner.jpg'

import RestaurantHeader from './restaurants/restaurant_header';
import { TextField, Grid, InputAdornment, Typography, Divider, LinearProgress, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import LocationIcon from '@material-ui/icons/LocationOn'
import TimeIcon from '@material-ui/icons/WatchLater'
import FoodItem from './restaurants/food_item'
import { lighten } from '@material-ui/core/styles';
import Comment from './restaurants/comment';
import ScrollableAnchor from 'react-scrollable-anchor'

const width = '800px'

const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      borderRadius: 20,
      backgroundColor: lighten('#ccc', 0.5),
    },
    bar: {
      borderRadius: 20,
      backgroundColor: 'gold',
    },
  })(LinearProgress);

class Restaurant extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query_food: "",
            restaurant: {}
        };
        this.onQueryChanged = this.onQueryChanged.bind(this)
    }

    componentWillMount() {
        axios.get('http://localhost:3001/api/restaurants/' + this.props.match.params.id)
            .then((response) => {
                const rest = response.data;
                this.setState({
                    restaurant: rest
                });
            })
    }

    onQueryChanged(event) {
        this.setState({
            query_food: event.target.value
        })
    }

    render() {

        if (!this.state.restaurant.foods) {
            return <br/>
        }

        let foodSets = {}
        this.state.restaurant.foods.forEach(food => {
            if (food.name.includes(this.state.query_food)) {
                if (!(food.foodSet in foodSets)) {
                    foodSets[food.foodSet] = []
                }
                foodSets[food.foodSet].push(food)
            }
        })

        let foodsPresentation = []
        Object.keys(foodSets).forEach(key => {
            let foodsInThisSet = foodSets[key]
                .map((food, index) => <FoodItem ind={index} key={index} food={food} />)
            foodsPresentation.push((
                <div>
                    <Typography variant="h6" color="textPrimary" style={{fontWeight: 'bold'}}>{key}</Typography>
                    <div style={{width: width}}>
                        {foodsInThisSet}
                    </div>
                    <br />
                </div>
            ))
        })

        let rate = this.state.restaurant.averageRate;
        let rateHtml = [];
        for (let j = 0; j < 5; j++) {
            if (rate <= 0)
                rateHtml.push(<i className="fa fa-star star-empty"/>);
            else if (rate <= 0.5)
                rateHtml.push(<i className="fa fa-star star-half"/>);
            else
                rateHtml.push(<i className="fa fa-star star-mark"/>);
            rate = rate - 1;
        }
        rate += 5

        let name = this.state.restaurant.name
        let address = this.state.restaurant.address.addressLine
        let openTime = this.state.restaurant.openingTime
        let closeTime = this.state.restaurant.closingTime
        let openWindow = 'از ساعت ' + openTime + ' تا ساعت ' + closeTime 

        let comments = [];
        for (let i = 0; i < 5; i++) {
            comments.push(<Comment key={i}/>)
        }

        return (
            <div>
                <Header />
                
                <div
                    style={{
                        background: "url(" + img_banner + ") no-repeat 0 0",
                        backgroundSize: 'cover',
                        height: '18rem'                
                    }}
                />

                <div style={{
                    position: 'absolute', 
                    marginTop: '-150px', 
                    textAlign: 'center', 
                    width: '100%', 
                    display: 'block'
                    }}>
                    
                    <RestaurantHeader restaurant={this.state.restaurant}/>
                    
                    <Grid container direction="column" spacing={2} alignItems="center">
                        
                        <Grid item>
                            <ScrollableAnchor id={'section1'}>
                                <TextField 
                                    placeholder="جستجو در منوی این رستوران" 
                                    rowsMax="1"
                                    style={{width: width, paddingTop: 24}}
                                    onChange={this.onQueryChanged}
                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                        )
                                    }}
                                    />
                            </ScrollableAnchor>
                        </Grid>

                        <Grid item style={{textAlign: 'start'}}>
                            {foodsPresentation}
                        </Grid>

                        <Grid item style={{textAlign: 'start', width: width, padding: 0}}>
                            <br/><br/>
                            <ScrollableAnchor id={'section2'}>
                                <Typography variant="h6" color="textPrimary" style={{fontWeight: 'bold', marginRight: 16}}>اطلاعات رستوران</Typography>
                            </ScrollableAnchor>
                            <Divider />
                            <Typography variant="body1" color="textPrimary" style={{fontWeight: 'bold', margin: '16px 0'}}>{name}</Typography>
                            <Grid container alignItems="center" spacing={1}>
                                <Grid item>
                                    <LocationIcon style={{transform: 'scale(1)'}}/>
                                </Grid>
                                <Grid item>
                                    <Typography variant="caption" color="textPrimary">{address}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container alignItems="center" spacing={1} style={{paddingTop: 12}}>
                                <Grid item>
                                    <TimeIcon style={{transform: 'scale(0.75)'}}/>
                                </Grid>
                                <Grid item>
                                    <Typography variant="caption" color="textPrimary" style={{fontWeight: 'bold'}}>ساعت سفارش‌گیری</Typography>
                                </Grid>
                            </Grid>
                            <Grid container style={{width: '300px', paddingTop: 8, paddingRight: 8}}>
                                <Grid item xs={6}>
                                    <Typography variant="caption" color="textPrimary">همه‌روزه</Typography>
                                </Grid>
                                <Grid item xs={6} style={{direction: 'ltr'}}>
                                    <Typography variant="caption" color="textPrimary">{openWindow}</Typography>
                                </Grid>
                            </Grid>
                            <Divider style={{width: '300px', marginTop: 8, marginRight: 8}}/>
                        </Grid>

                        <br/><br/><br/><br/>

                        <Grid item style={{textAlign: 'start', width: width, padding: 0}}>
                            
                            <ScrollableAnchor id={'section3'}>
                                <Typography variant="h6" color="textPrimary" style={{fontWeight: 'bold', marginRight: 16}}>نظرات کاربران در مورد رستوران</Typography>
                            </ScrollableAnchor>
                            <Divider style={{marginBottom: 16}}/>
                            <Typography variant="caption" color="textSecondary">
                            شما هم می‌توانید بعد از سفارش از این رستوران، نظر خود را درباره‌ی این رستوران ثبت کنید.
                            </Typography>

                            <Grid container direction="column" alignItems="center">

                                <Grid item container spacing={0} alignItems="center" direction="column" 
                                    style={{marginRight: 8, width: '100%', paddingTop: 32, paddingBottom: 16}}>
                                    <Grid item>
                                        <div className="rating-stars" style={{'transform': 'scale(1.4)'}}>
                                            {rateHtml}
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <Typography 
                                            gutterBottom 
                                            variant="h6" 
                                            style={{color: 'gold', fontWeight: 'bold', marginTop: 8}}>
                                            {rate}
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid item style={{width: '500px'}}>
                                    <Divider />
                                    <Grid container alignItems="center" spacing={2}>
                                        <Grid item xs={7}>
                                        <BorderLinearProgress
                                            variant="determinate"
                                            color="secondary"
                                            value={rate / 5 * 100}
                                            style={{margin: '24px 0'}}
                                        />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography variant="body1" style={{fontWeight: 'bold', color: 'gold'}}>{rate}</Typography>
                                        </Grid>
                                        <Grid item xs={3} style={{textAlign: 'left'}}>
                                            <Typography variant="body2" color="textSecondary" style={{fontWeight: 'bold'}}>میانگین آرا</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item style={{width: width, paddingTop: 16}}>
                                    {comments}
                                </Grid>

                            </Grid>

                        </Grid>

                    </Grid>

                    <br/><br/><br/><br/>
                        
                    <div style={{textAlign: 'start'}}>
                        <Footer />
                    </div>

                </div>

            </div>
        )

        // return <h1>Hello!</h1>

    }

}

export default Restaurant