import Button from './button'
const Header = ({toggle,onoff}) =>{
    return (
        <header className='header'>
            <h2>Welcome To Task Tracker UI </h2>
            <Button text = {onoff ? "Close Form" : "Add Task"} color = {onoff ? "red" : "black"} toggler={toggle} />
            </header>
    )
}
export default Header;
