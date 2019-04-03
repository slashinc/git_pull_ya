import React, {Component} from 'react';
import Search from "./Search";
import Results from "./Results";
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
    palette: {
        primary: {main: blue[500]}, // Purple and green play nicely together.
        secondary: {main: '#11cb5f'}, // This is just green.A700 as hex.
        type: "light"
    },
    typography: {useNextVariants: true},
});

const styles = theme => ({
    root: {
        flexGrow: 1,
    }
});

class App extends Component {
    render() {
        const {classes} = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <Grid container className={classes.root} spacing={16}>
                    <Grid item xs={12}>
                        <Search/>
                    </Grid>
                    <Grid item xs={12}>
                        <Results/>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(App);
