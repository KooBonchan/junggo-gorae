import newStyled from "@emotion/styled";
import { Button } from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router";

const StyledNavLink = newStyled(NavLink)`
  text-decoration: none;
  font-color: #aaffff;
`;

export function Header() {
    let navigate = useNavigate();
    
    return (
      <nav>
        <StyledNavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <Button>Home</Button>
        </StyledNavLink>
        <StyledNavLink to="/product">
          <Button>Products</Button>
        </StyledNavLink>
        <StyledNavLink to="/about">
          <Button>About Us</Button>
        </StyledNavLink>
        
      </nav>
    );
  }
  
  
  