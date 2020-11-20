import React from 'react';
import Link from "gatsby-link"
import { graphql } from 'gatsby';

export default function Template({data}){
    const post=data.markdownRemark

    return(
        <div>
            <Link to="/blog">Go Back</Link>
            <hr/>
            <h1>{post.frontmatter.title}</h1>
            <h4>Posted by {post.frontmatter.author}</h4>
            <div dangerouslySetInnerHTML={{__html: post.html}}/>
        </div>
    )
}

export const postQuery=graphql`

query ($path:String){
    markdownRemark(frontmatter: {path:{eq:$path}}){
        html
        frontmatter{
            
            title
            author
            date
        }
    }
}

`