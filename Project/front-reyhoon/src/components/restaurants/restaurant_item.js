import React, {Component} from 'react'
import { withStyles } from '@material-ui/styles'
import {Link} from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'

import img_logo from '../../assets/images/logo.svg'
import { CardActionArea} from '@material-ui/core';

const maxWidth = 275
const buttonBarColor = '#f5f5f5'
const imgWidth = 74
const imgHeight = 74

class RestaurantItem extends Component {

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

        let closed = this.props.restaurant.closed

        let categories = this.props.restaurant.categories
            .map(cat => cat.name)
            .reduce((x, y) => x + ' • ' + y)

        let url = closed? null : '/restaurant/' + this.props.restaurant._id;

        return (
            <div style={{display: 'inline-block', padding: 8, flexGrow: 1}}>
                <CardActionArea>
                    <Link to={url} >
                    <Paper style={{ margin: 'auto', width: maxWidth, padding: 16, backgroundColor: closed && 'lightgrey'}}>
                        <Grid container spacing={2} direction="column">
                            <Grid container spacing={1}>
                                <Grid item>
                                    <Paper style={{width: imgWidth, height: imgHeight}}>
                                        <img src={img_logo} style={{width: imgWidth, height: imgHeight}} />
                                    </Paper>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h5" style={{fontWeight: 'bold'}} gutterBottom>{this.props.restaurant.name}</Typography>
                                    <Grid container spacing={1} alignItems="center">
                                        <Grid item>
                                            <div className="rating-stars">
                                                {rateHtml}
                                            </div>
                                        </Grid>
                                        <Grid item>
                                            <Typography 
                                                gutterBottom 
                                                variant="body2" 
                                                style={{color: 'gold', fontWeight: 'bold', marginTop: 4}}>
                                                {this.props.restaurant.averageRate}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Typography variant="body2" gutterBottom>{categories}</Typography>
                                    <Typography 
                                        variant="body2" 
                                        gutterBottom 
                                        style={{ color: 'grey', paddingBottom: 10}}>
                                        {this.props.restaurant.address.addressLine}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container justify="center" 
                                style={{backgroundColor: closed ? 'lightgrey' : buttonBarColor}} 
                                spacing={2}>
                                <Grid item>
                                    <Button 
                                        variant="outlined" 
                                        color="secondary" 
                                        style={{ borderRadius: 25, paddingLeft: 30, paddingRight: 30, visibility: closed && 'hidden'}}
                                        onClick={this.onRestClick}
                                    >
                                        شروع سفارش
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                    </Link>
                </CardActionArea>
            </div>
        )
    }

}

export default RestaurantItem