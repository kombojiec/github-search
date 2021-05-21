import React, {useContext, useEffect} from 'react';
import Repos from '../components/Repos';
import GithubContext from '../context/github/GithubContext';


const Profile = props => {

  const userName = props.match.params.name;
  const {getUser, getRepos, user, repos} = useContext(GithubContext);
  
  useEffect(() => {
    getUser(userName);
    getRepos(userName);
    // eslint-disable-next-line
  }, [])

  const {name, company, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists} = user;
  console.log(user)

  return(
    <>
      <div className="profile">
        <div className="profile__items">
          <img src={avatar_url} alt={login} className="profile__img" />
          {name && <h1 className="profile__title">{name} </h1>}
          {location && <p className="profile__location"> <strong>Location: </strong> {location} </p>}
        </div>
        <div className="profile__info">
          {bio && <><h2 className="profile__info-title">Biography</h2>
          <p className="profile__info-text">{bio}</p></>}
          <a href={html_url} className="profile__link" target='_blank' rel="noreferrer">View profile</a>
          {login && <p className="profile__name"><strong>Username: </strong> {login} </p>}
          {company && <p className="profile__company"><strong>Company: </strong> {company} </p>}
          {blog && <p className="profile__website"><strong>Website: </strong>{blog}</p>}
          <ul className="profile__statistics">
            <li className="profile__statistic-item"><strong>Followers: </strong> {followers} </li>
            <li className="profile__statistic-item"><strong>Following: </strong> {following} </li>
            <li className="profile__statistic-item"><strong>Repositories: </strong> {public_repos} </li>
            <li className="profile__statistic-item"><strong>Gists: </strong> {public_gists} </li>
          </ul>
        </div>
      </div>
      <Repos repos={repos}/>
    </>
  )
}

export default Profile;