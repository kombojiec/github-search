import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({user}) => {
console.log(user)
  return(
    <div className="card">
      <img src={user.avatar_url} alt={user.login} className="card__img" />
      <div className="card__info">
        <h3 className="card__title">{user.login}</h3>
        <Link className="card__button" to={`/profile/${user.login}`}>Open</Link>
      </div>
    </div>
  )
}

export default Card;