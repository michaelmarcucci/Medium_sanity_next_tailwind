import Link from 'next/link'
import React from 'react'
import { Post } from "../typings";

interface Props {
  posts: [Post];
}

function Posts() {
  return (
    <div>
      {posts.map(post => (
        <Link key={post.} >
        </Link>
      ))}
    </div>
  )
}

export default Posts