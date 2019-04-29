import React from 'react';
// import faker from 'faker';

class Comment extends React.Component{
    render(){
        const {faker,name,date,sentences} = this.props;
        return(
            <div className="comment">
               <a href="/" className="avatar">
                    <img src={ faker.image.avatar() } alt=""/>
               </a>
               <div className="content">
                   <a href="" className="author">
                       {name}
                   </a>
                   <div className="metadata">
                       <span className="date">{date}</span>
                   </div>
                   <div className="text">{sentences}</div>
               </div>
            </div>
        )
    }
}

export default Comment;