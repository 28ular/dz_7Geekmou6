import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import '../styles/filmDetail.css'


export const Details = () => {
    const {id} = useParams()
    const [film , setFilms] = useState()
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchFilmDEtailed = async () => {
            try{
                const res = await fetch(`https://swapi.dev/api/films/${id}/`)
                const data = await res.json()
                setFilms(data);
            } catch (e){console.log(e.message)}
            finally {
                setLoading(false);
            }
        }
        fetchFilmDEtailed();
        },[id])
    if (loading) return <p>Loading...</p>
    if(!film) return <p>Film not Found</p>


    console.log(film)

    return (
        <>
            <div className="card_Detail">
                <div className="detail_container">
                    <div className="detail item">
                        <div className="title">{`title: ${film.title}`}</div>
                        <h4>{`release_date: ${film.release_date}`}</h4>
                        <h2>{`director: ${film.director}`}</h2>
                        <h2>{`producer: ${film.producer}`}</h2>
                    </div>
                </div>
            <button onClick={() => navigate(-1)}>вернутся назад</button>
            </div>

        </>
    )
}