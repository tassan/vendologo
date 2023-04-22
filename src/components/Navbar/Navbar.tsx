import {LogoContainer, MenuContainer, MenuItem, NavbarContainer} from "@/components/Navbar/styles";
import VendoLogoBrand from "@/assets/vendologo.svg";
import SignIn from "@/components/SignIn/SignIn";
import Auth from "@/components/Auth/Auth";

export function Navbar() {
    return (
    <NavbarContainer>
        <LogoContainer>
            <VendoLogoBrand />
        </LogoContainer>
        <MenuContainer>
            <MenuItem>Anuncie seu imóvel</MenuItem>
            <MenuItem>Sobre</MenuItem>
            <MenuItem>Ajuda</MenuItem>
            <Auth />
        </MenuContainer>
    </NavbarContainer>
  )
}