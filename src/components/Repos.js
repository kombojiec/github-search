import React from 'react';

const Repos = ({repos}) => {
  const repositories = repos.map(repo => (
    <li className="repo__item" key={repo.id}>
      <a 
        href={repo.html_url} 
        target="_blank"
        rel="noreferrer"
        className="repo__link"
      >{repo.name}</a>
    </li>
  ))
  return(
    <div className="repo">
      <h1 className='repo__title'>Rpositories</h1>
      <ul className="repo__list">
        {repositories}
      </ul>
    </div>
    
  )
}

export default Repos;