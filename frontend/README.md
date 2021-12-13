# Lodging - A Air BnB Clone
[Lodgin]https://lodging-me.herokuapp.com/)

[Wiki](https://github.com/EricGartner47/QuoraClone-GroupProject/wiki)

## At A Glance
Korra is a full stack web application that allows logged users to:
 - Post a Cabin for rent.
 - Edit a posted property only by the posting user
 - Delete a posted property only by the posting user
 - Post a review to a property
 - Edit a review to a property


## Application Architecture
Lodgin is built with React Redux frontend and an Express backend. 

## Frontend Technologies Used 
Korra uses React to generate the HTML elements, and then we use CSS to handling the styling of those elements.

## Backend Technologies Used
We used an Express server to handle the backend communication because we have the most experience with this language for backend development. We used PostgreSQL because it is easy for us to use and manipulate with sequelize. Again, we used sequelize because of the ease of use as well as our familiarity with the language.
 


### Post a Property
An authorized user can post a property with a topic that can then be seen by any logged in user. Only the authorized user may then edit or delete the posted property.



### Post a Review 
An authorized user may post a review  to a posted property. Only the authorized user can then delete the property to the posted property.


