import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

class Post extends Component {
    render() {
        return (
            <div className='post'>
                <h5>{ this.props.title }</h5>
                <p>{ this.props.content }</p>
                <button className='button-first'>Read More</button>
                <div>Posted: { this.props.date }</div>
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