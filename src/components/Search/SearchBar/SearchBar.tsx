import {
    SearchBarCheckbox, SearchBarCheckboxLabel,
    SearchBarForm,
    SearchBarInput,
    SearchBarLabel, SearchBarSubmit,
    SearchBarTitle,
    SearchBarWrapper
} from "@/components/Search/SearchBar/styles";
import {Button} from "@nextui-org/react";
import {LocationFilter} from "@/components/Filters/LocationFilter/LocationFilter";

export function SearchBar() {
    return <SearchBarWrapper>
        <SearchBarTitle>Encontre aqui o seu novo lar</SearchBarTitle>
        <SearchBarForm>
            <LocationFilter />

        </SearchBarForm>
    </SearchBarWrapper>
}