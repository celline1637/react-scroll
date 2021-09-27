import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarItem,
  SidebarLinks,
  SidebarBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarItem>
            <SidebarLinks to="/about">About</SidebarLinks>
          </SidebarItem>
          <SidebarItem>
            <SidebarLinks to="/discover">Discover</SidebarLinks>
          </SidebarItem>
          <SidebarItem>
            <SidebarLinks to="/services">Services</SidebarLinks>
          </SidebarItem>
          <SidebarItem>
            <SidebarLinks to="/signup">Sign Up</SidebarLinks>
          </SidebarItem>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to="signin">Sign In</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
