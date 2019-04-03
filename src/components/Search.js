import React from "react";
import {connect} from "react-redux";
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "../styles/Search.css"
import Button from '@material-ui/core/Button';
import {getUser} from "../actions/user";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {},
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});


class Search extends React.Component {
    handleInputChange = event => {
        event.preventDefault();
        const username = this.username.value;
        if (username.length > 0)
            this.props.dispatch(
                getUser(username)
            );
    };
    componentDidMount(){
        this.username.focus();
    }
    render() {
        const {classes} = this.props;
        return (
            <div className="p-5">
                <form style={{display:"inline"}} onSubmit={this.handleInputChange}>
                    <TextField
                        id="username-entry"
                        inputRef={el => this.username = el}
                        label="Username"
                        placeholder="Enter the Git Username to get repos"
                        className={classes.textField}
                        fullWidth
                        margin="normal"
                        helperText="Click on Search to find the user"

                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button type={"submit"} color={"primary"} size="large">
                        Search User
                    </Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default withStyles(styles)(connect(mapStateToProps)(Search));