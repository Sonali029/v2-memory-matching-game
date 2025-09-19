import react, {useState, useEffect} from "react";

const Square = ({card, color, flipped, matched, onClick}) => {

    const [hide, setHide] = useState(null);

    useEffect(() => {
        if (matched) {
            const timer = setTimeout(() => {
                setHide(true);
            }, 500)
            return () => {clearTimeout(timer)};
        }
    }, [matched])

    if (hide) {
        return <div className = "card-hidden" />
    }
   
    return (
        <div className = {`card ${flipped ? "flipped" : " "}`} onClick = {onClick}>
            <div className = "card-face card-front" style = {{backgroundColor : color.backgroundColor , color : color.color}}>★</div>
            <div className = "card-face card-back">
                {card ? (
                    <div className = "card-symbol"> {card.symbol}
                    </div>
                ) : " "}
            </div>
        </div>
    )
}

export default Square;