import {Button, Card} from "antd";
import {useNavigate} from "react-router-dom";
import '../styles/film.css'

export const Film = ( {item , id} ) => {
    const imgUrl = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    const navigate = useNavigate();

    return (
        <>
            <div className="card">
                <div className="container">
                    <div className="item_films">
                        <h2>{`рейтинг: ${id}`}</h2>
                        <div className="title">{item.title}</div>
                        <p>{item.opening_crawl}</p>
                        <img src={imgUrl} alt={item.title} />
                    </div>
                </div>
            </div>
            <Button type="primary" className="details-btn" onClick={() => navigate(`/films/${item.episode_id}`)}>
                подробнее
            </Button>
        </>
    )
}
