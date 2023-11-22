function MyButton() {
    function clickHandler() {
        console.log("clicked")
    }

    return (
        <div>
            <button onClick={clickHandler}>Click Me</button>
        </div>
    )
}

export default MyButton;
