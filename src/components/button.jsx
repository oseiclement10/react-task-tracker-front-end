const Button = ({text,color,toggler}) => {
    return (
        <button className='btn' style={{backgroundColor:color}} onClick={()=>toggler()}>{text}</button>
    )
}

export default Button;