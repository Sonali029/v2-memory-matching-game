const MainComponent = ({heading, para, onClick, button, className, children, buttonClass}) => {
    return (
        <>
        <div className = {className ? `numbers ${className}` : "numbers"} >
            {heading}
        </div>
        <div className="game-instructions">
            {para}
        </div>
        {children}
        <div className = {buttonClass ? `play-button ${buttonClass}` : "play-button"} onClick = {onClick} >
            {button}
        </div>
        </>
    )
}

export default MainComponent;