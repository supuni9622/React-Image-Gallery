import React,{useState, useEffect, useCallback} from 'react'
import useFirestore from '../hooks/useFirestore'
import ImageGrid from './ImageGrid'

const Pagination = (props) => {

    const {docs } = useFirestore('images')

    const [currentPage, setCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState(null)

    useEffect(()=> {
        const startingPage =  1
        const data = docs
        const pageSize = 15
        let pageCount = parseInt(data.length/ pageSize)

        if(data.length % pageSize > 0){
            pageCount ++
        }
        setCurrentPage(startingPage)
        setPageCount(pageCount)

    },[docs])

    const onSetCurrentPage = useCallback((num) => {
       setCurrentPage(num)
    },[setCurrentPage])

    const createControls = useCallback(()=> {
        let controls = []
        const pageCountValue = pageCount
        for(let i=1; i <= pageCountValue; i++){
            const baseClassName = 'pagination-controls__button';
            const activeClassName = i === currentPage ? `${baseClassName}--active` : '';
            controls.push(
              <div
                className={`${baseClassName} ${activeClassName}`}
                onClick={() => onSetCurrentPage(i)}
              >
                {i}
              </div>
            );
          }
          return controls
    },[currentPage, pageCount])

    const createPaginatedData = useCallback(() => {

        const data = docs
        const pageSize = 15
        const currentPageNumber = currentPage
        const upperLimit = currentPageNumber * pageSize
        const dataSlice = data.slice((upperLimit - pageSize), upperLimit)

        return dataSlice;
      },[currentPage, docs])
    
      console.log("Data " + createPaginatedData())
    return (
        <div className='pagination'>
               <ImageGrid dataValues ={createPaginatedData()} setSelectedImg={props.setSelectedImg}/>

            <div className='pagination-controls'>
                {createControls()}
            </div>
      </div>
    )
}

export default Pagination
