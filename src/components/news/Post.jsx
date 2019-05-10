import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

class Post extends Component {
    render() {
        return (
            <div className='post'>
                <post-title>{ this.props.title }</post-title>
                <post-text>{ this.props.content }</post-text>
                <hr />
                <post-link><a href = { this.props.id } >Read More</a></post-link>
                <post-date>Posted: { this.props.date }</post-date>
            </div>
        );
    }
}

Post.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.string,
    date: PropTypes.string
};


export default Post;