import React, {useContext} from 'react';
import Card from '../components/Card';
import GithubContext from '../context/github/GithubContext';
import Search from './../components/Search';

const Home = props => {

  const {users, loading} = useContext(GithubContext);
  console.log(users)

  return(
    loading?
    <h1>Loading...</h1>:
    <div className="home">
    <Search />
    <div className="home__cards">
        {users.map((user, i) => <Card key={user.id} user={user}/>)}
      </div>
    </div>
    )
}

export default Home;