 import { useEffect } from 'react';
 import { useSelector, useDispatch } from "react-redux"
 import { useParams, useHistory, NavLink } from 'react-router-dom';
 import { getProperties } from "../../store/propertyReducer"

 import PropertyPost from "../PropertyPost";
 import propertyReducer from '../../store/propertyReducer';

 function PropertyListings() {
  const history = useHistory();
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const propertiesObj = useSelector((state) => state.property);
  const properties = Object.values(propertiesObj);

 useEffect(() => {
     dispatch(getProperties());
 }, [dispatch])


   return (
    <div>
      <h1>All Properties</h1>
      { sessionUser &&
        <NavLink exact to="/propertylistings/add" className="">Add a Property</NavLink>
      }
      <div className='imgsContainer'>
        {properties.map(property => (
          <NavLink to={`propertylistings/${property?.id}`} key={property?.id}>
            <div className='imgContainer'>
              <img className='img' key={property?.id} src={property?.imageUrl} alt={""} />
              <p className='imgTitle'>{property?.imageTitle}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

 export default PropertyListings;
