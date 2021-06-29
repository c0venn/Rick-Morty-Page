const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            API_URL: "https://rickandmortyapi.com/api/character",
            characters: null,
            error: null,
        },
        actions: {
            getCharacters: url => {
                fetch(url)
                    .then((response) => {
                        if (!response.ok) throw new Error("Ha ocurrido un error!...")
                        return response.json()
                    })
                    .then((data) => {
                        setStore({
                            characters: data,
                            error: null
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    })
            }
        }
    }
}

export default getState;