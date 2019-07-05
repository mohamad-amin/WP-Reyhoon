import React, {Component} from 'react';
import { Grid, Typography, Paper, Button, CardActionArea } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

const maxWidth = 392

class FoodItem extends Component {

    render() {

        let onRight = this.props.ind % 2 == 0
        let name = this.props.food.name
        let price = this.props.food.price
        let description = this.props.food.description

        return (
            <Paper style={{
                width: maxWidth, 
                display: 'inline-block', 
                textAlign: 'start', 
                marginTop: 8, 
                marginBottom: 8,
                marginLeft: onRight && 8,
                marginRight: !onRight && 8
                }}>
                <CardActionArea style={{padding: '16px'}}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item container>
                            <Grid item xs={9}>
                                <Typography variant="body2" style={{fontWeight: 'bold', fontStretch: 'ultra-condensed'}}>{name}</Typography>
                            </Grid>
                            <Grid item container alignItems="baseline" xs={3} style={{direction: 'ltr'}}>
                                <Grid item>
                                    <Typography variant="caption"> تومان</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{fontWeight: 'bold'}}>{price}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item style={{paddingBottom: 16}}>
                            <Typography variant="caption" gutterBottom style={{color: 'grey'}}>{description}</Typography>
                        </Grid>
                        <Grid item>
                            <Button 
                                variant="outlined" 
                                color="secondary" 
                                size="small"
                                style={{ borderRadius: 25, fontSize: 10, borderWidth: '1px'}}
                            >
                                <AddIcon style={{transform: 'scale(0.7)'}}/>
                                افزودن به سبد خرید
                            </Button>
                        </Grid>
                    </Grid>
                </CardActionArea>
            </Paper>
        )
    }

}

export default FoodItem