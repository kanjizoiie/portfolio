import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post.jsx';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.posts
        };
    }
    render() {
        return (
            <section className = 'newsSection'>
                { this.state.posts && this.state.posts.isArray() ? this.state.posts.map((comp, i) => 
                    <Post
                        key = { i }
                        title = { comp.title } 
                        content = { comp.content }
                        id  = { comp.id }
                        date = { comp.date }
                    />
                ): null}
            </section>
        );
    }
}

News.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
        id: PropTypes.string,
        date: PropTypes.string
    }))
};

export default News;