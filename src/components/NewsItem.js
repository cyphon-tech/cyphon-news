import React, { Component } from 'react'

export class NewsItem extends Component {
 
    
    render() {
        let {title,descripton,imageUrl,newsUrl,author,date}=this.props;
        return (
            <div className="my-3">
                <div className="card" >
  <img src={!imageUrl?"https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21hbGwlMjBwaWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{descripton}</p>
    <p className="card-text"><small className="text-muted">by {!author ?"Unknown" : author} on {new Date(date).toGMTString() }</small> </p>
    
    
    <a rel="noreferrer" href={newsUrl}target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
            </div>
        ) 
    }
}

export default NewsItem
