import React from "react";
import {connect} from "react-redux";
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import VisitIcon from '@material-ui/icons/VisibilityTwoTone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocationIcon from '@material-ui/icons/LocationCity';
import FollowIcon from '@material-ui/icons/UnfoldLess';


const styles = theme => ({
    card: {
        maxWidth: 400,
        backgroundColor: theme.palette.background.paper,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    inline: {
        display: 'inline',
    },
});

class User extends React.Component {
    state = {expanded: false};

    handleExpandClick = () => {
        this.setState(state => ({expanded: !state.expanded}));
    };

    render() {
        const {user, classes} = this.props;
        return (
            <div className={"p-5"}>
                {
                    user ? (
                        <Card className={classes.card}>
                            <CardHeader
                                avatar={
                                    <Avatar src={user.avatar_url} aria-label="Recipe" className={classes.avatar}/>
                                }
                                title={user.name}
                                subheader={user.company}
                            />
                            <CardContent>
                                <Typography component="p">
                                    {user.bio ? user.bio : "No bio available for the user"}
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.actions} disableActionSpacing>
                                <IconButton aria-label="Visit Profile" href={user.html_url} target="_blank">
                                    <VisitIcon/>
                                </IconButton>
                                <IconButton
                                    className={classnames(classes.expand, {
                                        [classes.expandOpen]: this.state.expanded,
                                    })}
                                    onClick={this.handleExpandClick}
                                    aria-expanded={this.state.expanded}
                                    aria-label="Show more"
                                >
                                    <ExpandMoreIcon/>
                                </IconButton>
                            </CardActions>
                            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <List className={classes.root}>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                                <Avatar><LocationIcon/></Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary="Location"
                                                secondary={
                                                    <React.Fragment>
                                                        <Typography component="span" className={classes.inline}
                                                                    color="textPrimary">
                                                            {user.location}
                                                        </Typography>
                                                    </React.Fragment>
                                                }
                                            />
                                        </ListItem>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                                <Avatar><FollowIcon/></Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary="Followers | Following"
                                                secondary={
                                                    <React.Fragment>
                                                        <Typography component="span" className={classes.inline}
                                                                    color="textPrimary">
                                                            {user.followers} | {user.following}
                                                        </Typography>
                                                    </React.Fragment>
                                                }
                                            />
                                        </ListItem>
                                    </List>
                                </CardContent>
                            </Collapse>
                        </Card>
                    ) : (<div>No Users</div>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user.user_info
});

export default withStyles(styles)(connect(mapStateToProps)(User));
