import React, { Component } from 'react';
import Post from './Post.jsx';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.posts
        };
    }
    render() {
        console.log(this.state.posts);
        return (
            <section className = 'newsSection'>
                { this.state.posts ? this.state.posts.map((comp, i) => 
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

export default News;