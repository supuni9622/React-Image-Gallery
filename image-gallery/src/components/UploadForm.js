import React, {useState,useCallback, useMemo} from 'react'
import ProgressBar from './ProgressBar'

const UploadForm = () => {

    const [file, setFile] = useState(null)
    const [error, setError] =useState('')

    const types = useMemo(() => ['image/jpeg', 'image/png'], [])

    const onChangeHandle = useCallback((e) => {
        
        const selected = e.target.files[0]
        console.log(selected)

        // Check if one file uploaded and that file is type of png or jpeg
        if(selected && types.includes(selected.type)){
           setFile(selected)
           setError('')
        }else {
            setFile(null)
            setError("Please select an image file (png or jpeg")
        }

    },[setFile,types])

    return (
        <div>
            <form>
                <input type='file' onChange={onChangeHandle}/>
            </form>
            <div className='output'>
                { error && 
                    <div className='error'>
                        {error}
                    </div>
                }
                { file && 
                    <div className=''>
                        {file.name}
                    </div>
                }
                { file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </div>
    )
}


export default UploadForm

