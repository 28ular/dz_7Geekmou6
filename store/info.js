import {create} from "zustand";

export const useUsers = create((set , get) => ({
    items: [],
    loading: false,
    error: null,
    fetchUsers: async () => {
        try {
            set({loading: true, error: null});
            const res = await fetch("https://swapi.dev/api/films/")
            const data = await res.json()
            set({items: data.results , loading: false, error: null});
        } catch (e) {
            console.log(e.message)
        }
    }

}))