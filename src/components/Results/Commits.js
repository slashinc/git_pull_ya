import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import {connect} from "react-redux";
import {Line} from "react-chartjs-2";
// import Chart from "chart.js";

import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import {handleDialog} from "../../actions/user";

// Chart.defaults.global.defaultFontColor = "#fff";


const actionsStyles = theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5,
    },
});

class TablePaginationActions extends React.Component {
    handleFirstPageButtonClick = event => {
        this.props.onChangePage(event, 0);
    };

    handleBackButtonClick = event => {
        this.props.onChangePage(event, this.props.page - 1);
    };

    handleNextButtonClick = event => {
        this.props.onChangePage(event, this.props.page + 1);
    };

    handleLastPageButtonClick = event => {
        this.props.onChangePage(
            event,
            Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
        );
    };

    render() {
        const {classes, count, page, rowsPerPage, theme} = this.props;

        return (
            <div className={classes.root}>
                <IconButton
                    onClick={this.handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="First Page"
                >
                    {theme.direction === 'rtl' ? <LastPageIcon/> : <FirstPageIcon/>}
                </IconButton>
                <IconButton
                    onClick={this.handleBackButtonClick}
                    disabled={page === 0}
                    aria-label="Previous Page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
                </IconButton>
                <IconButton
                    onClick={this.handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Next Page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
                </IconButton>
                <IconButton
                    onClick={this.handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Last Page"
                >
                    {theme.direction === 'rtl' ? <FirstPageIcon/> : <LastPageIcon/>}
                </IconButton>
            </div>
        );
    }
}

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 500,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});

const TablePaginationActionsWrapped = withStyles(actionsStyles, {withTheme: true})(
    TablePaginationActions,
);

const PaperComponent = (props) => {
    return (
        <Draggable>
            <Paper {...props} />
        </Draggable>
    );
};

class DraggableDialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            rowsPerPage: 1,
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps, nextContext);
        if (nextProps.commit_stats) {
            this.setState({
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
                    datasets: [
                        {
                            backgroundColor: 'rgba(79,178,206,0.2)',
                            borderColor: 'rgb(79,178,206)',
                            borderWidth: 3,
                            label: '#Commits',
                            hoverBackgroundColor: 'rgba(24,66,94,0.4)',
                            hoverBorderColor: 'rgba(24,66,94,1)',
                            data: nextProps.commit_stats[parseInt(this.state.page)]
                        }
                    ]
                },
            })
        }
    }
    handleClose = () => {
        this.setState({page:0,});
        this.props.dispatch(handleDialog(false))
    };

    handleChangePage = (event, page) => {
        this.setState({page,});
    };

    handleChangeRowsPerPage = event => {
        this.setState({page: 0, rowsPerPage: event.target.value});
    };

    render() {
        const {classes} = this.props;
        const {rowsPerPage, page} = this.state;
        return (
            this.props.commit_stats ? (
                <div>
                    <Dialog
                        open={this.props.open}
                        onClose={this.handleClose}
                        PaperComponent={PaperComponent}
                        aria-labelledby="draggable-dialog-title"
                        fullWidth={true}
                        maxWidth={"md"}
                    >
                        <DialogTitle id="draggable-dialog-title">Commits</DialogTitle>
                        <DialogContent>
                            <Paper className={classes.root} elevation={0}>
                                <div className={classes.tableWrapper}>
                                    <Table className={classes.table}>
                                        <TableBody>
                                            <Line  data={{

                                                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
                                                datasets: [
                                                    {
                                                        backgroundColor: 'rgba(79,178,206,0.2)',
                                                        borderColor: 'rgb(79,178,206)',
                                                        borderWidth: 3,
                                                        label: '# Commits in Week',
                                                        hoverBackgroundColor: 'rgba(24,66,94,0.4)',
                                                        hoverBorderColor: 'rgba(24,66,94,1)',
                                                        data: this.props.commit_stats[parseInt(page)]
                                                    }
                                                ]

                                            }}/>
                                            {console.log(this.state, this.props.commit_stats[parseInt(page)], this.props.commit_stats[page])}
                                        </TableBody>
                                        <TableFooter>
                                            <TableRow>
                                                <TablePagination
                                                    colSpan={3}
                                                    rowsPerPageOptions={[10]}
                                                    count={this.props.commit_stats.length}
                                                    rowsPerPage={rowsPerPage}
                                                    page={page}
                                                    SelectProps={{
                                                        native: true,
                                                    }}
                                                    onChangePage={this.handleChangePage}
                                                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                                    ActionsComponent={TablePaginationActionsWrapped}
                                                />
                                            </TableRow>
                                        </TableFooter>
                                    </Table>
                                </div>
                            </Paper>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="secondary">
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            ) : (<div></div>)
        );
    }
}

const mapStateToProps = state => ({
    open: state.user.open ? state.user.open : false,
    commit_stats: state.user.commits
});

export default withStyles(styles)(connect(mapStateToProps)(DraggableDialog));