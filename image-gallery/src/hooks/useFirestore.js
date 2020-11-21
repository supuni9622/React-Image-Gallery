import {useState,useEffect} from 'react'
import {projectFirestore} from '../firebase/config'

const useFirestore = (collection) => {

    const [docs, setDocs]  = useState([])

    useEffect(()=>{
        
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap)=> {

                // Set firestore data to access 
                let documents = []
                snap.forEach(doc => {
                    documents.push({...doc.data(), id : doc.id})
                })
                setDocs(documents)
            })

        // useEffect cleanup funcion
        return () => unsub()

    },[collection])

    return { docs }
}

export default useFirestore
