import React from "react";
import {connect} from "react-redux";
import Repo from "./Repo";
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {getRepoCommits, handleDialog} from "../../actions/user";
import Commit from "./Commits";


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "100%",
        height: "100%",
    },
});

class Repos extends React.Component {
    handleViewCommits = (username, repo) => {
        return () => {
            this.props.dispatch(
                getRepoCommits({username, repo})
            );
            this.props.dispatch(
                handleDialog(true)
            );
        }
    };

    render() {
        const {classes, repos, user} = this.props;
        return (
            <div className={"p-5"}>
                {
                    repos && user ? (
                        <GridList spacing={16} className={classes.gridList} cols={2}>
                            <Commit/>
                            {

                                repos.map((data, i) => (
                                        <GridListTile style={{height: "auto"}} key={i} cols={1}>
                                            <Repo data={data} viewCommits={this.handleViewCommits(user.login, data.name)}/>
                                        </GridListTile>
                                    )
                                )
                            }
                        </GridList>
                    ) : (<div/>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    repos: state.user.repos,
    user: state.user.user_info,
});

export default withStyles(styles)(connect(mapStateToProps)(Repos));