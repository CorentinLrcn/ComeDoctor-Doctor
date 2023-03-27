import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { getDocs, query, collection, where } from 'firebase/firestore';
import { db } from '../App';
import '../styles/MyPage.css'


function MyPage() {
    const params = useParams()
    const navigate = useNavigate()

    const [userName, setUserName] = useState('')

    const fetchData = async () => {
        const q = query(collection(db, 'doctors'), where("id", "==", params.idDoctor))
        const records = await getDocs(q)
        return records
    }

    useEffect(() => {
        fetchData().then((response) => {
            response.forEach((res) => {
                setUserName(res.data().name)
            })
        })
    }, [])

    return (
        <div className="App">
            <h1>COME DOCTOR</h1>
            <br />
            <br />
            <h2>Bienvenue {userName}</h2>
            <br />
            <br />
            <br />
            <br />
            <button style={{ color: '#D89D0E' }} onClick={() => alert('Fonctionnalité non disponible')} >Mes rendez-vous</button>
        </div>
    )
}

export default MyPage