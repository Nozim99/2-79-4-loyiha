import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()

  const onClick = (page)=>{
    navigate(page)
  }


  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <h2 onClick={()=>onClick('')} className="text-white Header-title">Nozim</h2>
        <div>
        <span onClick={()=>onClick('about')} className="text-white Header-btn">About</span>
        <span onClick={()=>onClick('contact')} className="text-white mx-4 Header-btn">Contact</span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
