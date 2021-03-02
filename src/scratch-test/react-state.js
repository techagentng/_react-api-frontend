import React, {useState} from 'react';


function Test(){

    const [blogs, setBlog] = useState([
          {'name': "nnamdi", 'state':"", 'author':"Jack doe", 'id':1},
          {'name': "felix", 'state':"", 'author':"Jack doe", 'id':2},
          {'name': "manda", 'state':"", 'author':"Jack doe", 'id':3},
          {'name': "dapo", 'state':"", 'author':"Jack doe", 'id':4}
    ]);

    const handleClick = ()=>{}

    return(
        <div className="App">
            {blogs.map((blog)=> (
                <div className="blog-prev" key={blog.id}>
                     <h1>{blog.name}</h1>
                    <h2>{blog.title}</h2>
                   <p>{blog.author}</p>
                </div>
            ))}

        </div>
    )
}

export default Test;
