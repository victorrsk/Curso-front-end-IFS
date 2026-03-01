function Test({btn_color, btn_value, ...props}){
    return (
    <>
    <button style={{'background-color': btn_color}} {...props}>{btn_value}</button>
    </>
    )
}

export default Test