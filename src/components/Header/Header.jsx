import {Link, NavLink, useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();


    return (
        <div className="header">
            <ul className='list'>
                <li onClick={() => navigate('films')}>Films</li>
                <li><a href="https://www.youtube.com/shorts/EcsU-9OpNMY?feature=share">jonh pork👀</a></li>
                <li><a href="https://t.me/uu_mrts">contacts</a></li>
            </ul>
        </div>
    )
}