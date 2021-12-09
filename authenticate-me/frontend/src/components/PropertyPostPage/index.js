import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { getProperties } from "../../store/propertyReducer"



const PropertyPostPage = () => {
    const params = useParams();
    const { id } = params;


    const history = useHistory();
  const dispatch = useDispatch();
console.log("hola")
const propertiesObj = useSelector(state => state.property);

//console.log(propertiesObj, "holaaaaaaaaaaaa")
const properties = Object.values(propertiesObj);
//console.log(properties[0]?.id, "ahora esteeeeeeeeee")
const propertyById = properties.find(property => +property.id === +id)


//console.log(propertyById, "esteeeeeeeeeeee")
useEffect(() => {
    dispatch(getProperties());

  }, [dispatch])




return (
    <div>

        <NavLink to='/propertylistings'>
        <p>Back</p>
      </NavLink>
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
      <button >
        Comment
      </button>
        <button >
        Delete
      </button>
      </div>
    </div>
  )


}


export default PropertyPostPage;
