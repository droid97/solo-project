import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editPropertyListing } from "../../store/propertyReducer";
import { useParams } from "react-router";
import "./EditPropertyPost.css"
import logo from './logo.png'



function EditPropertyPost() {
    const history = useHistory();
    const dispatch = useDispatch();

    const { listingId } = useParams();
    const propertyObj = useSelector((state) => state.property);
    const specificProperty = propertyObj[listingId]

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

    const userId = sessionUser?.id;

    const handleSubmit = (event) => {
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


        dispatch(editPropertyListing(data, listingId));

        history.push(`/listings/${listingId}`);

        event.preventDefault();
    };
    return (

        <>
            <div className="Post">
                <img src={logo} className="logo" alt="" />

                 <form onSubmit={handleSubmit}>
                    <h1>Edit Listing</h1>
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
                            name="state"
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
                    <button className="primary">Submit</button>
                </form>
            </div>
        </>
    );
}

export default EditPropertyPost;
