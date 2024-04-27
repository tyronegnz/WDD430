"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pokemonNameInput = document.getElementById("pokemonName");
            const pokemonName = pokemonNameInput.value.toLowerCase();
            const response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            if (!response.ok) {
                throw new Error("Could not fetch resource");
            }
            const data = yield response.json();
            const pokemonSprite = data.sprites.front_default;
            const imgElement = document.getElementById("pokemonSprite");
            if (imgElement) {
                imgElement.src = pokemonSprite;
                imgElement.style.display = "block";
            }
            else {
                throw new Error("Image element not found");
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
