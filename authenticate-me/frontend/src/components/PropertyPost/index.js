import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPropertyListing } from "../../store/propertyReducer";
import "./PropertyPost.css"
import logo from './logo.png'



function PropertyPost() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [price, setPrice] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [errors, setValidationErrors] = useState([]);

  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser?.id;

  console.log(userId, "aadddddddd")
  const validate = () => {
    const errors = [];

    if (!price) {
      errors.push("Price is requiered")
    }

    if (!imageUrl) {
      errors.push("please provide an image")

    }

    if (!name) errors.push('Please provide a name');
    if (!address) errors.push('Please provide a valid address');
    if (!city) errors.push('Please provide a city');
    if (!state) errors.push('Please provide a state');
    if (!country) errors.push('Please provide a country');
    if (!description) errors.push('Please provide a description');
    if (!title) errors.push('Please provide a title');




    return errors

  }
  const onSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    //onClose();

    //if (errors.length > 0) return setValidationErrors(errors);

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
    console.log("kkkkkkkkaa", data)

      history.push("/propertylistings");

    return dispatch(createPropertyListing(data));

  }


  return (
    <div className="Post">
      <img src={logo} className="logo" alt="" />
      {errors.length > 0 && (
        <div>
          The following errors were found:
          <ul>
            {errors.map(error => <li key={error}>{error}</li>)}
          </ul>
        </div>
      )}

      <form onSubmit={onSubmit}>
        <h1>Property Post</h1>
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
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />

        </div>

        <div className="input-group">
          <label>State:</label>
          <input
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />

        </div>

        <div className="input-group">
          <label>Country:</label>
          <input
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />

        </div>

        <div className="input-group">
          <label>Price:</label>
          <input
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

        </div>
        <div className="input-group">
          <label>Title:</label>
          <input
            name="description"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

        </div>

        <div className="input-group">
          <label>Description:</label>
          <input
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

        </div>


        <div className="input-group">
          <label>Image URL:</label>
          <input
            name="description"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />

        </div>

        <button className="primary">Submit</button>
      </form>


    </div>
  )
}


export default PropertyPost;
