const ClassComponent = ({options}) => {
    return (
        <>
        {options.map((option, index) => (
            <div key = {index} >
            <div className = {`game-instructions ${option.className} || ''}`} >
                {option.content}
            </div>
            <div className = "numbers answer" key = {index} >
                {option.number}
            </div> 
            </div>
        ))}
        </>
    )
}

export default ClassComponent;