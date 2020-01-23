import React from 'react';
import './blog.css';

class Blog extends React.Component{
    constructor(){
        super();
        this.state = {
            properti : [
                {
                    id : 1,
                    blog : "https://images.unsplash.com/photo-1500630417200-63156e226754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    title : "Lorem ipsum dolor sit amet consectetur adipisicing elit"
                },
                {
                    id : 2,
                    blog : "https://images.unsplash.com/photo-1569429379053-761000e13c17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    title : "Lorem ipsum dolor sit amet consectetur"
                },
                {
                    id : "3",
                    blog : "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    title : "Lorem ipsum dolor"
                }
            ]
        }
    }

    render(){
        const data = this.state.properti;
        return(
            <>
                {/* <div className="empety"><p>code in blog</p></div> */}
                <div className="blog-title">
                    <h2>Blog</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="card-blog">
                    {data.map(item => (
                        <div key={item.id} className="card-body">
                            <div className="card-child">
                                <img src={item.blog} alt="blog-detail"></img>
                                <div className="second-title">
                                    <h3>{item.title}</h3>
                                    <a href="!">Selengkapnya ></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="next-blog"><a href="!">Lihat Semua Artikel</a></div>
            </>
        );
    }
}

export default Blog;