import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

class Post extends Component {
    render() {
        return (
            <div className='post'>
                <post-title>{ this.props.title }</post-title>
                <post-text>{ this.props.text }</post-text>
                <hr />
                <post-link><a href = { this.props.link } >Read More</a></post-link>
                <post-date>{ this.props.date }</post-date>
            </div>
        );
    }
}

Post.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
    date: PropTypes.string
};


export default Post;