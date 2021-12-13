import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Redirect, useHistory, useParams } from "react-router-dom";
import { editPropertyListing } from "../../store/propertyReducer";
import { getProperties } from "../../store/propertyReducer";

import "./EditPropertyPost.css"
import logo from './logo.png'

function EditPropertyPost() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { id } = useParams();
  const homeObj = useSelector((state) => state.home);


  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [title, setTitle] = useState();
  const [imageUrl, setImageUrl] = useState();
  const sessionUser = useSelector((state) => state.session.user);




  const propertiesObj = useSelector(state => state.property)


  const properties = Object.values(propertiesObj);

  const propertyById = properties.find(property => +property.id === +id);



//const { id, userId, name, address, city, state, country, price, description, title, imageUrl } = propertyById;

// function inputDefault( name, address, city, state, country, price, description, title, imageUrl) {
// setName(name);
// setAddress(address);
// setCity(city);
// setState(state);
// setCountry(country);
// setPrice(price);
// setDescription(description);
// setTitle(title);
// setImageUrl(imageUrl);
// }


  useEffect(() => {
    dispatch(getProperties());
    //inputDefault( name, address, city, state, country, price, description, title, imageUrl);
 }, [dispatch])

  const userId = sessionUser?.id;


  const handleSubmit = (event) => {

      event.preventDefault();

    const data = {
      userId,
      name,
      address,
      city,
      state,
      country,
      price,
      description,
      title,
      imageUrl,
    };


    dispatch(editPropertyListing(data, id))

    history.push(`/propertylistings/${id}`)

  };


  if (!sessionUser) return (
    <Redirect to="/" />
  );
  return (
    <>
      <div className="Post">

        <form onSubmit={handleSubmit}>
          <h1>Edit Poperty Listing</h1>
          <div className="input-group">
            <label>Name:</label>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Address:</label>
            <input
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>City:</label>
            <input
              name="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>State:</label>
            <input
              name="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Country:</label>
            <input
              name="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Price:</label>
            <input
              name="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Description:</label>
            <input
              name="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Title:</label>
            <input
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Image URL:</label>
            <input
              name="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <div>
          <button className="primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditPropertyPost;
