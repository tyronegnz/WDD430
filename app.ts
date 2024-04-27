async function fetchData(): Promise<void> {
    try {
        const pokemonNameInput = document.getElementById("pokemonName") as HTMLInputElement;
        const pokemonName = pokemonNameInput.value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite") as HTMLImageElement;

        if (imgElement) {
            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";
        } else {
            throw new Error("Image element not found");
        }
    } catch (error) {
        console.error(error);
    }
}
