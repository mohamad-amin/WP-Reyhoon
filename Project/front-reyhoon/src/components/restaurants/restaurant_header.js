import React, {Component} from 'react'
import { Paper, Typography, Grid, Divider } from '@material-ui/core';
import $ from 'jquery';

import img_logo from '../../assets/images/logo.svg'

const img_size = 80
const width='800px'

class RestaurantHeader extends Component {

    render() {

        let rate = this.props.restaurant.averageRate;
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

        let name = this.props.restaurant.name
        let categories = this.props.restaurant.categories
            .map(cat => cat.name)
            .reduce((x, y) => x + ' • ' + y)
        let address = this.props.restaurant.address.addressLine

        return (
            <div style={{paddingTop: img_size/2, display:'inline-block', position: 'sticky', top: '-270px', zIndex: 10}}>
                <Paper style={{width: width, textAlign: 'center'}}>
                    <Grid container direction="column" spacing={1} style={{width: '800px', padding: 0, margin: 0}}>
                        <Grid item style={{width: '100%'}}>
                            <Paper style={
                                {width: img_size, 
                                height: img_size,
                                marginTop: -img_size/2, 
                                marginRight: -img_size/2, 
                                position: 'absolute', 
                                display: 'inline-block'}}>
                                <img src={img_logo} style={{width: img_size, height: img_size}} />
                            </Paper>
                        </Grid>
                        <Grid item style={{width: '100%'}}>
                            <Typography variant="h4" style={{fontWeight: 'bold', marginTop: img_size / 2 }}>{name}</Typography>
                        </Grid>
                        <Grid item container spacing={3} justify="center" alignItems="center" style={{marginRight: 8, width: '100%'}}>
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
                        <Grid item style={{width: '100%'}}>
                            <Typography variant="body2" gutterBottom style={{fontWeight: 'bold'}}>{categories}</Typography>
                        </Grid>
                        <Grid item style={{width: '100%'}}>
                            <Typography variant="body1" gutterBottom style={{color: 'grey'}}>{address}</Typography>
                        </Grid>
                        <Grid item style={{width: '100%'}}>
                            <Divider style={{color: '#f5f5f5', margin: '4px 0'}} />
                        </Grid>
                        <Grid item container id="options" style={{padding: '8px 5% 16px 5%', width: '100%'}}>
                            <Grid item xs={4}>
                                <a href="#section1">
                                    <Typography variant="body2" style={{color: 'grey'}}>منوی رستوران</Typography>
                                </a>
                            </Grid>
                            <Grid item xs={4}>
                                <a href="#section2">
                                    <Typography variant="body2" style={{color: 'grey'}}>اطلاعات رستوران</Typography>
                                </a>
                            </Grid>
                            <Grid item xs={4}>
                                <a href="#section3">
                                    <Typography variant="body2" style={{color: 'grey'}}>نظرات کاربران</Typography>
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }

}

export default RestaurantHeader