import {
    SearchBarCheckbox, SearchBarCheckboxLabel,
    SearchBarForm,
    SearchBarInput,
    SearchBarLabel, SearchBarSubmit,
    SearchBarTitle,
    SearchBarWrapper
} from "@/components/Search/SearchBar/styles";

export function SearchBar() {
    return <SearchBarWrapper>
        <SearchBarTitle>Encontre aqui o seu novo lar</SearchBarTitle>
        <SearchBarForm>
            <SearchBarLabel>Estado</SearchBarLabel>
            <SearchBarInput type="text" placeholder="Digite o estado" />

            <SearchBarLabel>Cidade</SearchBarLabel>
            <SearchBarInput type="text" placeholder="Digite a cidade" />

            <SearchBarLabel>Região do Imóvel</SearchBarLabel>
            <SearchBarCheckboxLabel>Rural</SearchBarCheckboxLabel>
            <SearchBarCheckbox type="checkbox" placeholder="Rural" />
            <SearchBarCheckboxLabel>Urbana</SearchBarCheckboxLabel>
            <SearchBarCheckbox type="checkbox" placeholder="Urbana" />

            <SearchBarSubmit type="submit" value="Buscar">
                Buscar
            </SearchBarSubmit>
        </SearchBarForm>
    </SearchBarWrapper>
}