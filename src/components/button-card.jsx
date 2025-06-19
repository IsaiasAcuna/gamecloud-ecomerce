import React from 'react'

const ButtonCard = () => {
  return (
    <>
        <button className='btnBuy'>COMPRAR</button>

        <style jsx>{`
            .btnBuy {
            
            padding: 10px;
            width: 100%;
            border: none;
            background-color: red;
            border-radius: 5px;
            color: white;
            margin-top: 5px;
            cursor: pointer;
            }
        `}</style>
    </>
  )
}

export default ButtonCard
