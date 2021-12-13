import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { getProperties, deletePropertyListing } from "../../store/propertyReducer"
import { getReviews } from '../../store/reviewsReducer';
import { addtheReview, removetheReview } from '../../store/reviewsReducer';
import './PropertyPostPage.css'



const PropertyPostPage = () => {

  const params = useParams();
    const { id } = params;


    const history = useHistory();
  const dispatch = useDispatch();


  //COMMENTS
  const [reviewHeader, setReviewHeader] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser?.id;
  const [errors, setErrors] = useState([]);


const propertiesObj = useSelector(state => state.property);

const properties = Object.values(propertiesObj);
const propertyById = properties.find(property => +property?.id === +id)

//console.log('All Properties' + propertyId)
 const reviewsObj = useSelector(state => state.review)

// console.log(reviewsObj, "reviewsobj")

 const reviews  = Object.values(reviewsObj)
//  console.log(reviews,"testttttt")
  const reviewsForThisPage = reviews.filter((review) => review.propertyId === +id);

// console.log(reviewsForThisPage, "reviewssssss")



useEffect(() => {
    dispatch(getProperties());
    dispatch(getReviews())
  }, [dispatch])

const handleDelete = (id) => {
dispatch(deletePropertyListing(id))
.then(() => { history.push('/propertylistings')})

}
 const reset = () => {
  setReviewHeader('')
   setReviewBody('')
 }

const handleReview = async (e) => {
  e.preventDefault();


  const newReview = {
    userId,
    reviewHeader,
    reviewBody,
    propertyId: propertyById.id
  };

//console.log(id, "propertyID")
 await dispatch(addtheReview(newReview, id))
//  .then(res => {
//   if (res.ok) {
  dispatch(getReviews());
  setErrors([])
  reset()
}
// .catch(async res => {
//   const info = await res.json();
//   setErrors(info.errors)
// })
// };

const handleReviewDelete = (id) => {
  dispatch(removetheReview(id));
  history.push(`/propertylistings/${propertyById.id}`);
}




return (
    <div>


      {sessionUser && sessionUser.id === propertyById?.userId &&
          <NavLink to={`/properties/${id}/edit`}>
            <p></p>
          </NavLink>
        }
        {sessionUser && sessionUser.id === propertyById?.userId &&
          <button onClick={() => handleDelete(id)} className="login-tab">
            DELETE POST
          </button>
        }



        <button className="">
        <NavLink to={`/propertylistings/${id}/edit`}>
          EDIT POST
        </NavLink>
        </button>

      <div className='propertySingleDiv'>
        <img className='propertySingle' key={propertyById?.id} src={propertyById?.imageUrl} alt={propertyById?.city} />
        <div className='textDiv'>
          <p className='name'>{propertyById?.name}</p>
          <p className='address'>{propertyById?.properties?.address}</p>
          <p className='description'>{propertyById?.city}</p>
          <p className='description'>{propertyById?.state}</p>
          <p className='description'>{propertyById?.country}</p>
          <p className='description'>{propertyById?.price}</p>
          <p className='description'>{propertyById?.title}</p>
          <p className='description'>{propertyById?.description}</p>
        </div>

        <div className=''>
            <div className=''>
              {reviewsForThisPage.map(review =>
                <div className='' key={review?.id}>
                  <div id=''>
                    <p className=''>{review?.User?.username}:</p>
                    <textarea className='' id=''>{review?.commentHeader}</textarea>
                  </div>
                  <p className='' id=''>{review?.commentBody}</p>
                  {sessionUser && sessionUser.id === review?.userId &&

                    <button onClick={() => handleReviewDelete(review?.id)} class="className='login-tab">

                     Delete
                    </button>
                  }
                </div>
              )}
            </div>
            </div>












        <div className='commentFormDiv' id='commentFormDiv'>
              {sessionUser &&
                <form onSubmit={handleReview} className='card-form' id='commentsForm'>
                  <div className='errorsDiv'>
                    <ul className='formErrors' >
                      {errors.map((error) => <li key={errors.indexOf(error)} id='erroresComments' className='loginErrors'>{error}</li>)}
                    </ul>
                  </div>
                  <div className="input" id='inputTextComment'>
                    <input
                      className="input-field"
                      id='textComment'
                      onChange={(e) => setReviewHeader(e.target.value)}
                      value={reviewHeader}
                      placeholder='Title'
                    />
                  </div>
                  <div className="input" id='commentsForm'>
                    <textarea
                      id='textCommentArea'
                      className="input-field"
                      onChange={(e) => setReviewBody(e.target.value)}
                      value={reviewBody}
                      placeholder='Review me here...'
                    />
                  </div>
                  <div className='commentButtonDiv'>
                    <button type='submit' className='login-tab'>Submit Review</button>
                  </div>
                </form>
              }
            </div>











      </div>
    </div>






  )


}


export default PropertyPostPage;
