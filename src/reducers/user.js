export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_REPO':
            return {
                ...state,
                repos: action.payload
            };
        case 'GET_USER':
            return {
                ...state,
                user_info: action.payload
            };
        case 'GET_COMMITS':
            return {
                ...state,
                commits: action.payload
            };
        case 'SET_DIALOG':
            return {
                ...state,
                open: action.payload
            };
        default:
            return state
    }
}

/*
* avatar_url: "https://avatars2.githubusercontent.com/u/1410106?v=4"
bio: null
blog: "http://shuvalov.info"
company: "Quoine"
created_at: "2012-02-05T14:53:26Z"
email: null
events_url: "https://api.github.com/users/A/events{/privacy}"
followers: 351
followers_url: "https://api.github.com/users/A/followers"
following: 87
following_url: "https://api.github.com/users/A/following{/other_user}"
gists_url: "https://api.github.com/users/A/gists{/gist_id}"
gravatar_id: ""
hireable: null
html_url: "https://github.com/A"
id: 1410106
location: "Ho Chi Minh, Vietnam"
login: "A"
name: "Shuvalov Anton"
node_id: "MDQ6VXNlcjE0MTAxMDY="
organizations_url: "https://api.github.com/users/A/orgs"
public_gists: 126
public_repos: 113
received_events_url: "https://api.github.com/users/A/received_events"
repos_url: "https://api.github.com/users/A/repos"
site_admin: false
starred_url: "https://api.github.com/users/A/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/A/subscriptions"
type: "User"
updated_at: "2019-03-14T14:49:44Z"
url: "https://api.github.com/users/A"
*
*
* */

/*
*
* archive_url: "https://api.github.com/repos/A/.dotfiles/{archive_format}{/ref}"
archived: false
assignees_url: "https://api.github.com/repos/A/.dotfiles/assignees{/user}"
blobs_url: "https://api.github.com/repos/A/.dotfiles/git/blobs{/sha}"
branches_url: "https://api.github.com/repos/A/.dotfiles/branches{/branch}"
clone_url: "https://github.com/A/.dotfiles.git"
collaborators_url: "https://api.github.com/repos/A/.dotfiles/collaborators{/collaborator}"
comments_url: "https://api.github.com/repos/A/.dotfiles/comments{/number}"
commits_url: "https://api.github.com/repos/A/.dotfiles/commits{/sha}"
compare_url: "https://api.github.com/repos/A/.dotfiles/compare/{base}...{head}"
contents_url: "https://api.github.com/repos/A/.dotfiles/contents/{+path}"
contributors_url: "https://api.github.com/repos/A/.dotfiles/contributors"
created_at: "2014-07-31T20:22:08Z"
default_branch: "master"
deployments_url: "https://api.github.com/repos/A/.dotfiles/deployments"
description: "configs and utils"
downloads_url: "https://api.github.com/repos/A/.dotfiles/downloads"
events_url: "https://api.github.com/repos/A/.dotfiles/events"
fork: false
forks: 2
forks_count: 2
forks_url: "https://api.github.com/repos/A/.dotfiles/forks"
full_name: "A/.dotfiles"
git_commits_url: "https://api.github.com/repos/A/.dotfiles/git/commits{/sha}"
git_refs_url: "https://api.github.com/repos/A/.dotfiles/git/refs{/sha}"
git_tags_url: "https://api.github.com/repos/A/.dotfiles/git/tags{/sha}"
git_url: "git://github.com/A/.dotfiles.git"
has_downloads: true
has_issues: true
has_pages: false
has_projects: true
has_wiki: true
homepage: null
hooks_url: "https://api.github.com/repos/A/.dotfiles/hooks"
html_url: "https://github.com/A/.dotfiles"
id: 22483615
issue_comment_url: "https://api.github.com/repos/A/.dotfiles/issues/comments{/number}"
issue_events_url: "https://api.github.com/repos/A/.dotfiles/issues/events{/number}"
issues_url: "https://api.github.com/repos/A/.dotfiles/issues{/number}"
keys_url: "https://api.github.com/repos/A/.dotfiles/keys{/key_id}"
labels_url: "https://api.github.com/repos/A/.dotfiles/labels{/name}"
language: "Shell"
languages_url: "https://api.github.com/repos/A/.dotfiles/languages"
license: null
merges_url: "https://api.github.com/repos/A/.dotfiles/merges"
milestones_url: "https://api.github.com/repos/A/.dotfiles/milestones{/number}"
mirror_url: null
name: ".dotfiles"
node_id: "MDEwOlJlcG9zaXRvcnkyMjQ4MzYxNQ=="
notifications_url: "https://api.github.com/repos/A/.dotfiles/notifications{?since,all,participating}"
open_issues: 2
open_issues_count: 2
owner: {login: "A", id: 1410106, node_id: "MDQ6VXNlcjE0MTAxMDY=", avatar_url: "https://avatars2.githubusercontent.com/u/1410106?v=4", gravatar_id: "", …}
private: false
pulls_url: "https://api.github.com/repos/A/.dotfiles/pulls{/number}"
pushed_at: "2018-12-07T06:49:38Z"
releases_url: "https://api.github.com/repos/A/.dotfiles/releases{/id}"
size: 1420
ssh_url: "git@github.com:A/.dotfiles.git"
stargazers_count: 48
stargazers_url: "https://api.github.com/repos/A/.dotfiles/stargazers"
statuses_url: "https://api.github.com/repos/A/.dotfiles/statuses/{sha}"
subscribers_url: "https://api.github.com/repos/A/.dotfiles/subscribers"
subscription_url: "https://api.github.com/repos/A/.dotfiles/subscription"
svn_url: "https://github.com/A/.dotfiles"
tags_url: "https://api.github.com/repos/A/.dotfiles/tags"
teams_url: "https://api.github.com/repos/A/.dotfiles/teams"
trees_url: "https://api.github.com/repos/A/.dotfiles/git/trees{/sha}"
updated_at: "2019-03-27T17:17:00Z"
url: "https://api.github.com/repos/A/.dotfiles"
watchers: 48
watchers_count: 48*/