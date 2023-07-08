import logo from '../assets.js/nba-logo.png';

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt="nba" />
        <h1>NBA Legends</h1>
    </div>
  )
}

export default Header