import {useUsers} from "../../store/info.js";
import {useEffect} from "react";
import {Film} from "./Film.jsx";

export const Filmsist = () => {

    const {items , fetchUsers , error , loading } = useUsers()

    useEffect(() => {

        fetchUsers()

    },[error])

    console.log('asdas')
    console.log(items)
    if (loading) return <p>Loading...</p>
    return(
        <>
        <h1></h1>

            {
                items.map((f) => <Film key={f.episode_id} item={f}  id={f.episode_id} />)
            }
        </>
    )
}