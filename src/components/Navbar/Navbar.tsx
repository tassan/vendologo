import {LogoContainer, MenuContainer, MenuItem, NavbarContainer} from "@/components/Navbar/styles";
import VendoLogoBrand from "@/assets/vendologo.svg";

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
            <MenuItem href={"/api/auth/login"}>Entrar</MenuItem>
        </MenuContainer>
    </NavbarContainer>
  )
}