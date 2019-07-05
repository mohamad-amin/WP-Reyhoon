import React, {Component} from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox, Typography } from '@material-ui/core';

class CheckBox extends Component {

    render() {
        return (
            <FormControlLabel style={{margin: 0, width: '100%'}}
                control={<Checkbox value="label" checked={this.props.checked} onClick={() => this.props.callback(this.props.cid)} />}
                label={<Typography variant="body1" style={{color: 'black'}}>{this.props.label + " (" + this.props.count + ")"}</Typography>}
            />
        )
    }
}

export default CheckBox