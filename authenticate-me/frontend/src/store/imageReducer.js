
const LOAD_IMAGES = "property/LOAD_LISTINGS";

export const loadImages = (images) => {
    return {type: LOAD_IMAGES, images}
};

export const getImages = () => async (dispatch) => {
const response = await fetch("/api/images");

const images = await response.json();
dispatch(loadImages(images));

}

const initialState = {};

const imageReducer = (state = initialState, action) => {
    switch(action.type) {
case LOAD_IMAGES:

const newState = {...state};
action.images.forEach(image => {
    newState[image.id] = image;

});
    return newState;
    
    default:
        return state;

    }
}



export default imageReducer;
