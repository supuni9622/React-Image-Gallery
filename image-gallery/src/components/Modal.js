import React, { useCallback } from 'react'

const Modal = ({selectedImg, setSelectedImg}) => {

    const handleClick = useCallback((e)=> {
        
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null)
        }

    },[setSelectedImg])

    return (
        <div className='backdrop' onClick={handleClick}>
            <img src={selectedImg} alt='enlarged pic'/>
        </div>
    )
}

export default Modal
