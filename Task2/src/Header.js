import './header.css'
function Header(props){
    return(
    <div className="header">
     <brand style={{fontSize:"2.5rem",
     padding:"0.2rem",color:"white"}}>RE@CT</brand>
     <button className="btn" onClick={props.click}>GET USER</button>
    </div>
    );
}

export default Header;