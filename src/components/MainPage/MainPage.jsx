import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const MainPage = () => {
const navigate = useNavigate();
const [input, setInput] = useState("");
document.body.style.background = input

    return (
        <>
            <input
                style={{padding:10 , border:"1px solid black" , borderRadius:"10px" , marginBottom:"10px"}}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="write bg..."
            />
        <div className="mainPage">
            <div className="container_main">
                <div className="main_item">
                    <div className="title_"><h1>_Films_</h1></div>
                    <div className="greet"><p>добро пожаловать на сайт фильмов тут вы увидите свои любимые фильмы , <br/> а также сможете посмотреть их детально . <strong>посмотреть кто режиссер кто директор фильма и его рейтинг</strong></p></div>
                    <Button type={"primary"} onClick={() => navigate('/films')}>посмотреть сейчас</Button>
                </div>
            </div>
        </div>

        </>
    )


}