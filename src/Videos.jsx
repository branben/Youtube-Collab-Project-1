import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';


const Videos = () => {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [review, setReview] = useState([])

  function commentHandler(e){
    e.preventDefault()
    setReview([...review, {comment: comment, commenter: name}])
    setName("")
    setComment("")
    }


    let { id } = useParams();
    const opts = {
        height: '390',
        width: '640',
      };
  return (
    <div>
      
      <YouTube videoId={id} opts={opts} />
      <form onSubmit={commentHandler}>
              <h2>Comments Review</h2>
              <div className="note-section">
                <label>
                  <div>Commenter Name</div>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label>
                  <div>Comment</div>
                  <input
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </label>
                <br /> <br />
                <input type="submit" id="add-note" value="Submit" />
              </div>
            </form>
            <ul id="list">
              {review.map((R, index) => {
                return (
                  <div>
                  <li className="show" key={index}>
                    {R.commenter} says,
                    "{R.comment}"
                  </li>
                  </div>
                );
              })}
            </ul>

    </div>
  )
}

export default Videos;
