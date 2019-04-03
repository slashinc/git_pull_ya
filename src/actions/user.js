//https://api.github.com/users/{user}
export const getUser = (username) => dispatch => {
    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (response.ok) {
                response.json().then(data => {
                    dispatch({
                        type: 'GET_USER',
                        payload: data,
                    });
                })
            } else {
                dispatch({
                    type: 'GET_USER',
                    payload: null,
                });
            }
            dispatch(getUserRepos(username));
        })
        .catch(error => {
            console.log(error);
        });
};

//https://api.github.com/users/{user}/repos
export const getUserRepos = (username) => dispatch => {
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => {
            if (response.ok) {
                response.json().then(data => {
                    dispatch({
                        type: 'GET_REPO',
                        payload: data,
                    })
                })
            } else {
                dispatch({
                    type: 'GET_REPO',
                    payload: null,
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
};

//https://api.github.com/repos/{user}/{repo}/stats/participation
export const getRepoCommits = (payload) => dispatch => {
    fetch(`https://api.github.com/repos/${payload.username}/${payload.repo}/stats/participation`)
        .then(response => {
            if (response.ok) {
                response.json().then(data => {
                    let returnable = [];
                    let temp = [];
                    debugger;
                    data.all.map((value, i) => {
                        if (i % 10 === 0 && i !== 0) {
                            returnable.push(temp);
                            temp = [value];
                        } else if (i === data.all.length-1) {
                            temp.push(value);
                            returnable.push(temp);
                        } else
                            temp.push(value);
                        return null;
                    });
                    dispatch({
                        type: 'GET_COMMITS',
                        payload: returnable,
                    })
                })
            } else {
                dispatch({
                    type: 'GET_COMMITS',
                    payload: null,
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const handleDialog = (payload) => dispatch => {
    dispatch({
        type: 'SET_DIALOG',
        payload,
    })
};