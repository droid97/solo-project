 import { useEffect } from 'react';
 import { useSelector, useDispatch } from "react-redux"
 import { useHistory, NavLink } from 'react-router-dom';
 import { getProperties } from "../../store/propertyReducer"
 import { Redirect } from "react-router-dom";



 function PropertyListings() {
  const history = useHistory();
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const propertiesObj = useSelector((state) => state.property);

  const properties = Object.values(propertiesObj);

 useEffect(() => {
     dispatch(getProperties());
 }, [dispatch])

 if (!sessionUser) return (
  <Redirect to="/" />
);
   return (
    <div>
   
      { sessionUser &&
        <NavLink exact to="/propertylistings/add" className=""></NavLink>
      }
      <div className='imgsContainer'>
        {properties.map(property => (
          <NavLink to={`propertylistings/${property?.id}`} key={property?.id}>
            <div className='imgContainer'>
              <img className='img' key={property?.id} src={property?.imageUrl} alt={property?.name} />
              <p className='imgTitle'>{property?.name}</p>

            </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

 export default PropertyListings;
