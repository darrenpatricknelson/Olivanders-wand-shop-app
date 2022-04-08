import { Link, useLocation } from 'react-router-dom';

function Menu(props) {
  const components = props.components;
  const location = useLocation();
  console.log(location);
  return (
    <div className="MenuList">
      <nav>
        {components
          .map((component, key) => {
            return (
              <Link key={key} className="navLinks" to={'/' + component}>
                {component}
              </Link>
            );
          })
          .filter((component) => location.pathname !== component)}
      </nav>
    </div>
  );
}

export default Menu;

// I am happy with the rest of my code, however I cant figure out how to hide the page names
