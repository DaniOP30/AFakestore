import React, { useState } from "react";
import Header from "../Header";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./Narbar.elements";
import {
  FaBattleNet,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <Link to={"/"}>
            <LogoContainer>
              <FaBattleNet />
              <Header  title={"Fake Store"}/>
            </LogoContainer>
          </Link>
          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <Link to={"/"}>
              <MenuItem>
                  <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                      <div>
                        HOME
                      </div>
                  </MenuItemLink>
              </MenuItem>
            </Link>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  
                  LOGIN
                </div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;