

const Button = ({ onClick, texto }) => {

    return (
        <>
            <button onClick={onClick} className='btnBuy'>{texto}</button>

            <style jsx>{`
                .btnBuy {
            
                    padding: 10px;
                    width: 100%;
                    border: none;
                    background-color: #E12D26;
                    border-radius: 5px;
                    color: white;
                    font-weight: 800;
                    margin-top: 5px;
                    cursor: pointer;
                    letter-spacing: 1.5px
                }
            `}</style>
        </>
    )
}

export default Button
