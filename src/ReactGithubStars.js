/*!
 * ReactGithubStars component
 * usage: <ReactGithubStars username="torvalds" defaultColor={true} displayBorder={true} />
 * Copyright(c) 2016 MSMFSD
 * MIT Licensed
 */
import React, { Component, PropTypes } from 'react'
import 'whatwg-fetch'
import './GithubProfile.css'

const API_ROOT = 'https://api.github.com/users'

/**
 * @class ReactGithubStars
 * @extends {Component}
 */
export default class ReactGithubStars extends Component {

  static propTypes = {
    username: PropTypes.string.isRequired,
    defaultColor: PropTypes.bool.isRequired,
    displayBorder: PropTypes.bool.isRequired
  }

  state = {
    stars: null,
    loading: true
  }

  componentDidMount() {
    this.loadGithubRepoStars(this.props.username)
  }

  componentWillReceiveProps(newProps) {
    this.setState({ loading: true })
    this.loadGithubRepoStars(newProps.username)
  }

  /**
   * Fetch Github users total repo stars count
   * @param {string} username - valid Github username
   */
  loadGithubRepoStars(username) {
    const githubEndpoint = `${API_ROOT}/${username}/repos?per_page=100`
    fetch(githubEndpoint)
        .then((response) => {
          response.json().then((data) => {
            const totalStars = data.reduce((prev, curr) => {
              return prev + curr.stargazers_count
            }, 0)
            this.setState({
              stars: totalStars,
              loading: false
            })
          })
        }).catch((response) => {
          if (response || response.status === 404) {
            this.setState({
              stars: 0,
              loading: false
            })
          }
        })
  }

  render() {
    return (
      <div className={this.state.loading ? 'rgsContainer' : 'rgsContainer rgsShow'}>
        <div className={this.props.displayBorder ? 'rgs rgsDisplayBorder' : 'rgs'}>
          <div className={this.props.defaultColor ? 'rgsStar rgsDefaultstar' : 'rgsStar rgsAltstar'}></div>
          <div className={this.props.defaultColor ? 'rgsCount' : 'rgsCount rgsAltcolor'}>{this.state.stars}</div>
        </div>
      </div>
    )
  }
}
