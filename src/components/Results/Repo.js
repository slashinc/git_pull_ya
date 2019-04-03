import React from "react";
import {connect} from "react-redux";
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    card: {},
    media: {},
    chip: {
        margin: theme.spacing.unit,
    },
});

class Repo extends React.Component {

    render() {
        const {classes, data} = this.props;
        const chipData = {
            Created_At: data.created_at,
            Forks: data.forks,
            Branch: data.default_branch,
            Open_Issues: data.open_issues,
            Watchers: data.watchers,
            Star_Gazers: data.stargazers_count
        };
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {data.name}
                    </Typography>
                    <div className={classes.root}>
                        {Object.keys(chipData).map((key, i) => {
                            return (
                                <Chip
                                    key={i}
                                    color="primary"
                                    avatar={
                                        <Avatar>{key.substr(0, 2)}</Avatar>
                                    }
                                    label={`${key.replace("_", " ")} --> ${chipData[key]}`}
                                    variant="default"
                                    className={classes.chip}
                                />
                            );
                        })}
                    </div>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" color="secondary" size="medium" onClick={() => {
                        this.props.viewCommits()
                    }}>
                        View Commits
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

const mapStateToProps = (state) => ({});

export default withStyles(styles)(connect(mapStateToProps)(Repo));