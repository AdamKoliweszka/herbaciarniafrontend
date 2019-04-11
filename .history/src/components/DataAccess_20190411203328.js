import axios from "axios";
var DataAccess = {
    adresIPPort: "localhost:8086",
    user: {
        username: "bill",
        password: "abc123"
    },
    getAllTea() {
        return axios
            .get("http://" + this.adresIPPort + "/myapp/Herbaty/Wszystkie", {
                params: null,
                withCredentials: true,
                auth: {
                    username: this.user.username,
                    password: this.user.password
                }
            })
            .then(response => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    },
    getAllTeaById(id) {
        var link = "http://" + this.adresIPPort + "/myapp/Herbaty/Wszystkie/" + id;
        return axios
            .get(link, {
                params: null,
                withCredentials: true,
                auth: {
                    username: this.user.username,
                    password: this.user.password
                }
            })
            .then(response => {
                return response.data;
            });
    },
    addTea(tea) {
        return axios.post(
            "http://" + this.adresIPPort + "/myapp/Herbaty",
            tea, {
                params: null,
                withCredentials: true,
                auth: {
                    username: this.user.username,
                    password: this.user.password
                }
            }
        );
    },
    updateTea(tea) {
        return axios.put(
            "http://" + this.adresIPPort + "/myapp/Herbaty",
            tea, {
                params: null,
                withCredentials: true,
                auth: {
                    username: this.user.username,
                    password: this.user.password
                }
            }
        );
    },
    getAllTeaFiltred(argument) {
        return axios
            .post(
                "http://" + this.adresIPPort + "/myapp/Herbaty/Wszystkie",
                argument, {
                    params: null,
                    withCredentials: true,
                    auth: {
                        username: this.user.username,
                        password: this.user.password
                    }
                }
            )
            .then(response => {
                return response.data;
            });
    },
    getAvaibleTea() {
        return axios
            .get("http://" + this.adresIPPort + "/myapp/Herbaty/Dostepne", {
                params: null,
                withCredentials: true,
                auth: {
                    username: this.user.username,
                    password: this.user.password
                }
            })
            .then(response => {
                return response.data;
            });

    },
    getAvaibleTeaFiltred(argument) {
        return axios
            .post(
                "http://" + this.adresIPPort + "/myapp/Herbaty/Dostepne",
                argument
            )
            .then(response => {
                return response.data;
            });
    },
    getSpecies() {
        return axios
            .get("http://" + this.adresIPPort + "/myapp/GatunkiHerbaty")
            .then(response => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    },
    addSpecies(newSpecies) {
        return axios.post(
            "http://" + this.adresIPPort + "/myapp/GatunkiHerbaty", newSpecies,
            {
                params: null,
                withCredentials: true,
                auth: {
                    username: this.user.username,
                    password: this.user.password
                }
            }
        );
    },
    updateSpecies(species) {
        return axios.put(
            "http://" + this.adresIPPort + "/myapp/GatunkiHerbaty",
            species, {
                params: null,
                withCredentials: true,
                auth: {
                    username: this.user.username,
                    password: this.user.password
                }
            }
        );
    },
    deleteSpecies: function (id) {
        var link = "http://" + this.adresIPPort + "/myapp/GatunkiHerbaty/";
        link += id;
        return axios.delete(link, {
            params: null,
            withCredentials: true,
            auth: {
                username: this.user.username,
                password: this.user.password
            }
        });
    },
    getCountries() {
        return axios
            .get("http://" + this.adresIPPort + "/myapp/KrajePochodzenia")
            .then(response => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    },
    addCountry(newCountry) {
        return axios.post(
            "http://" + this.adresIPPort + "/myapp/KrajePochodzenia", newCountry,
            {
                params: null,
                withCredentials: true,
                auth: {
                    username: this.user.username,
                    password: this.user.password
                }
            }
        );
    },
    updateCountry(country) {
        return axios.put(
            "http://" + this.adresIPPort + "/myapp/KrajePochodzenia",
            country, {
                params: null,
                withCredentials: true,
                auth: {
                    username: this.user.username,
                    password: this.user.password
                }
            }
        );
    },
    deleteCountry: function (id) {
        var link = "http://" + this.adresIPPort + "/myapp/KrajePochodzenia/";
        link += id;
        return axios.delete(link, {
            params: null,
            withCredentials: true,
            auth: {
                username: this.user.username,
                password: this.user.password
            }
        });
    },
    getDostawcy() {
        return axios
            .get("http://" + this.adresIPPort + "/myapp/Dostawcy")
            .then(response => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    },
}
export default DataAccess
//opisanie api serwera

//Herbaty
//Post - pracownik - dodanie herbaty
//Put - pracownik - aktualizacja

//Herbaty/Dostepne
//Get wszyscy
//Post wszyscy - wyszukiwanie z argumentem

//Herbaty/Wszystkie:
//Get pracownik
//Post pracownik - wyszukiwanie z argumentem

//Herbaty/Wszystkie/{id}:
//Get pracownik

//GatunkiHerbaty
//Get wszyscy
//Delete pracownik
//Put pracownik
//Post pracownik

//KrajePochodzenia
//Get wszyscy
//Delete pracownik
//Put pracownik
//Post pracownik
