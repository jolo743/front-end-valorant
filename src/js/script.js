/*
ALL CHARACTERS
*/ 
async function connection() {
    try {
        const response = await fetch("http://127.0.0.1:8000/characters/");

        if (!response.ok) {
            throw new Error("Error: No se ha podido obetener los datos.");
        }

        const data = await response.json();

        const container = document.getElementById("characters");

        container.innerHTML = "";

        data.forEach(character => {
            container.innerHTML += `
                <div class="card">
                    <img src="${character.img}" alt="${character.name}" class="character-img">

                    <p><strong>ID:</strong></p> ${character.id}
                    
                    <h2>${character.name}</h2>

                    <p><strong>Rol:</strong></p> 
                    ${character.role}

                    <p><strong>Descripción:</strong></p>
                    ${character.description}

                    <p><strong>Habilidad:</strong></p>
                    ${character.abilities}
                </div>
            `;
        })
        
    } catch (error) {
        console.error(error);
    }
}

connection();

/*
CREATE CHARACTER
*/
async function createCharacter() {
    const character = {
        name: document.getElementById("name").value,
        role: document.getElementById("role").value,
        img: document.getElementById("img").value,
        description: document.getElementById("description").value,
        abilities: document.getElementById("abilities").value
    };

    await fetch("http://127.0.0.1:8000/characters/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(character)
    });

    connection(); // recarga lista
}

/*
GET BY ID
*/
async function getCharacterById() {
    const id = document.getElementById("searchId").value;

    const res = await fetch(`http://127.0.0.1:8000/characters/${id}`);

    if (!res.ok) {
        document.getElementById("singleCharacter").innerHTML = "Not found";
        return;
    }

    const c = await res.json();

    document.getElementById("singleCharacter").innerHTML = `
        <div class="card">
            <img src="${c.img}" width="150">
            <h3>${c.name}</h3>
            <p>${c.role}</p>
            <p>${c.description}</p>
            <p>${c.abilities}</p>
        </div>
    `;
}

/*
UPDATE CHARACTER
*/
/*Load Character from ID*/
async function loadCharacterForEdit() {
    const id = document.getElementById("updateId").value;

    try {
        const res = await fetch(`http://127.0.0.1:8000/characters/${id}`);

        if (!res.ok) {
            throw new Error("Personaje no encontrado");
        }

        const c = await res.json();

        // rellenar inputs
        document.getElementById("update-name").value = c.name;
        document.getElementById("update-role").value = c.role;
        document.getElementById("update-img").value = c.img;
        document.getElementById("update-description").value = c.description;
        document.getElementById("update-abilities").value = c.abilities;

    } catch (error) {
        console.error(error);
    }
}

/*funcion PUT*/
async function updateCharacter() {
    const id = document.getElementById("updateId").value;

    const updatedCharacter = {
        name: document.getElementById("update-name").value,
        role: document.getElementById("update-role").value,
        img: document.getElementById("update-img").value,
        description: document.getElementById("update-description").value,
        abilities: document.getElementById("update-abilities").value
    };

    try {
        const res = await fetch(`http://127.0.0.1:8000/characters/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedCharacter)
        });

        if (!res.ok) {
            throw new Error("El personaje no se ha podido actualizar.");
        }

        const data = await res.json();
        console.log("Updated:", data);

        connection(); // recargar lista

    } catch (error) {
        console.error(error);
    }
}

/*
DELETE CHARACTER
*/
async function deleteByInput() {
    const id = document.getElementById("deleteId").value;

    await fetch(`http://127.0.0.1:8000/characters/${id}`, {
        method: "DELETE"
    });

    connection();
}