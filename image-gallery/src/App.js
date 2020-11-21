import React , {useState} from 'react'
import Title from './components/Title'
import UploadForm from './components/UploadForm'
import ImageGrid from './components/ImageGrid'
import Modal from './components/Modal'
import Pagination from './components/Pagination'

const App = () => {

  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      {/* <ImageGrid setSelectedImg={setSelectedImg} /> */}
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
      <Pagination setSelectedImg={setSelectedImg}/>
    </div>
  );
}

export default App;
