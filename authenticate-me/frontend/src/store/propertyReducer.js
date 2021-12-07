import { csrfFetch } from "./csrf"


const CREATE_PROPERTY = "property/CREATEPROPERTY"


export const createProperty = (property) => {
    return { type: CREATE_PROPERTY, property }

}



export const createPost = (data) => async (dispatch) => {
    const response = await csrfFetch("/api/properies", {
        method: "POST",
        body: JSON.stringify(data)
    });
    const property = await response.json();
    dispatch(createPost(property));

    return property;
}



const initialState = {};


const propertyReducer = () => {
    let newState;
    switch (action.type) {
        case LOAD_PROPERIES:


            newState = { ...state };
            action.properties.forEach((property) => {
                newState[property.id] = property;
            })
            return newState;



        case CREATE_PROPERTY:
            newState = { ...state };


    }
};

export default propertyReducer;
