import React, {Component} from 'react';
import { Typography, Grid, Divider } from '@material-ui/core';
import QuoteIcon from '@material-ui/icons/FormatQuote'

class Comment extends Component {

    render() {

        let rate = 4.3;
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

        return (
            <Grid container direction="column" style={{marginBottom: 16}}>
                <Grid item style={{marginBottom: 16}}>
                    <Divider />
                </Grid>
                <Grid item container>
                    <Grid item xs={6}>
                        <Typography variant="h6" style={{fontWeight: 'bold'}}>نام</Typography>
                    </Grid>
                    <Grid item xs={6} container spacing={1} alignItems="center" justify="flex-end">
                        <Grid item>
                            <Typography 
                                gutterBottom 
                                variant="body1" 
                                style={{color: 'gold', fontWeight: 'bold', marginTop: 8}}>
                                {4.3}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <div className="rating-stars">
                                {rateHtml}
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container alignItems="center" spacing={2}>
                    <Grid item>
                        <QuoteIcon color="secondary"/>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" color="textSecondary">توضیحات</Typography>
                    </Grid>
                </Grid>
                <Grid item container style={{paddingTop: 16}}>
                    <Grid item xs={6}>
                        <Typography variant="caption" color="textSecondary">۴ ماه قبل</Typography>
                    </Grid>
                    <Grid item xs={6} style={{textAlign: 'left', paddingLeft: 12}}>
                        <Typography variant="caption" color="textSecondary">گزارش</Typography>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

}

export default Comment