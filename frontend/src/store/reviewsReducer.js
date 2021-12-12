import { csrfFetch } from './csrf';

const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS'
const ADD_REVIEWS = 'reviews/ADD_REVIEWS'
const REMOVE_REVIEWS = 'reviews/REMOVE_REVIEWS'


// ACTIONS
export const loadReviews = (reviews) => ({
    type: LOAD_REVIEWS,
        reviews,
  });

export const addReview = (review) => ({

    type: ADD_REVIEWS,
    review,
});

export const removeReview = (review) => ({
    type: REMOVE_REVIEWS,
    review,
});


//SELECTOR

export const getReviews = () => async (dispatch) => {
  // console.log( getReviews,"aaassss")
    // const res = await csrfFetch('/api/reviews');
    const res = await fetch('/api/reviews');
    console.log(res,"resssss")
    const reviews = await res.json();
    dispatch(loadReviews(reviews));
  }

  export const addtheReview = (newReview, id) => async (dispatch) => {
  "/:id/addReview"
  console.log(id, "el idddddddd")
  const response = await csrfFetch(`/api/reviews/${id}/add`, {
    method: "POST",
    body: JSON.stringify(newReview),
  });
  const review = await response.json();


  dispatch(addReview(review));
  return review;
}










export const removetheReview = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${id}/delete`, {
      method: 'DELETE'
    });
    if (res.ok) {
      dispatch(removeReview(id))
    }
  }

  const initialState = {};

const reviewsReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD_REVIEWS:

      newState = { ...state }
      console.log("load", newState)
      action.reviews.forEach(review => { newState[review.id] = review })
      return newState
    case ADD_REVIEWS:
      newState = { ...state, [action.review.id]: action.review };
      return newState;
    case REMOVE_REVIEWS:
      newState = { ...state };
      delete newState[action.review];
      return newState;
    default:
      return state;
  }
}

export default reviewsReducer;
