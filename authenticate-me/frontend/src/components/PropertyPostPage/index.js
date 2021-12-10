import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { getProperties, deletePropertyListing } from "../../store/propertyReducer"



const PropertyPostPage = () => {
    const params = useParams();
    const { id } = params;

    const history = useHistory();
  const dispatch = useDispatch();
const propertiesObj = useSelector(state => state.property);

const properties = Object.values(propertiesObj);
const propertyById = properties.find(property => +property.id === +id)


useEffect(() => {
    dispatch(getProperties());

  }, [dispatch])

const handleDelete = (id) => {
dispatch(deletePropertyListing(id))
.then(() => { history.push('/propertylistings')})

}


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
        <NavLink to={`/propertylistings/${id}/edit`}>
        <button>
          Edit
        </button>
      </NavLink>
        <button onClick={() => handleDelete(id)}>
        Delete
      </button>
      </div>
    </div>
  )


}


export default PropertyPostPage;
