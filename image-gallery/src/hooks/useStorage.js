// Custom hook for store in firebase

import {useState, useEffect } from 'react'
import {projectStorage} from '../firebase/config'

// Handling file upload and return useful values
const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        // References
        const storageRef = projectStorage.ref(file.name)
        
        // Upload to firebase storage 
        //Here pass 3 arguments (snap, err)
        storageRef.put(file).on('state_changed', (snap)=> {
            let presentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(presentage)
        }, (err) =>{
            setError(err)
        }, async() => {
            const url = await storageRef.getDownloadURL()
            setUrl(url)
        })
    }, [file])

    return {progress, error, url}
 }

 export default useState
  