import { csrfFetch } from "./csrf"

const LOAD_PROPERTIES = "home/LOADPROPERTIES";
const CREATE_PROPERTY = "property/CREATEPROPERTY"
const EDIT_PROPERTY = " property/EDITPROPERTY"


export const loadProperties = (properties) => {
    return { type: LOAD_PROPERTIES, properties }

}

 export const createProperty = (property) => {
     return { type: CREATE_PROPERTY, property }

 }

 export const editProperty = (property) => {
    return { type:  EDIT_PROPERTY, property }

}


export const getProperties = () => async (dispatch) => {
    const response = await fetch("/api/properties", {

     });
     const properties = await response.json();
     dispatch(loadProperties(properties));

     return properties;
 }



 export const createPropertyListing = (data) => async (dispatch) => {
     console.log("create pro dataaaaaaaaaaa", data)
     const response = await csrfFetch("/api/properties", {
         method: "POST",
         body: JSON.stringify(data)
     });
    //  const property = await response.json();
    //  dispatch(createProperty(property));

    //  return property;
 }

 export const editPropertyListing = (data, listingId) => async (dispatch) => {
    console.log("create pro dataaaaaaaaaaa", data)
    const response = await csrfFetch(`/api/properties/${listingId}`, {
        method: "PUT",
        body: JSON.stringify(data)
    });
   //  const updatedProperty = await response.json();
   //  dispatch(createProperty(property));

   //  return updatedProperty;
}

const initialState = {};


const propertyReducer = (state={initialState}, action ) => {
    let newState;
    switch (action.type) {
         case LOAD_PROPERTIES:


             newState = { ...state };
             action.properties.forEach((property) => {
                 newState[property.id] = property;
             })
             return newState;



         case CREATE_PROPERTY:
             newState = { ...state };

             newState[action.property.id] = action.property;
             return newState;



             case EDIT_PROPERTY:
                newState = { ...state };

                newState[action.property.id] = action.property;
                return newState;

                default:
                    return state;

    }
};

export default propertyReducer;
