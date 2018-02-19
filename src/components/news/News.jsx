import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post.jsx';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.posts
        }
    }
    render() {
        return (
            <section className = 'news'>
                { this.state.posts.map((comp, i) => <Post
                    key = { i }
                    title = { comp.title } 
                    text = { comp.text }
                    link = { comp.link }
                    date = { comp.date }
                />) }
            </section>
        );
    }
}

News.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
        link: PropTypes.string,
        date: PropTypes.string
    }))
};

export default News;