import React from "react";
import {connect} from "react-redux";
import User from "./User";
import Repos from "./Repos";
import Grid from "@material-ui/core/Grid";

class Search extends React.Component {

    render() {
        return (
            <div>
                <Grid container style={{flexGrow:1}} spacing={16}>
                    <Grid item md={4}>
                        <User/>
                    </Grid>
                    <Grid item md={8}>
                        <Repos/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {};

};

export default connect(mapStateToProps)(Search);