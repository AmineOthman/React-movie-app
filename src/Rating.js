import React from 'react'



const Rating = ({count}) => {
    let starsHtml = []
    for(let i = 0; i < 5; i++) {
        if(i < count) {
            starsHtml.push(<span key={i}>★</span>)
        }
        else {
            starsHtml.push(<span key={i}>☆</span>)
        }
    }
    return (
        <div>{starsHtml}</div>
    )
}

export default Rating;