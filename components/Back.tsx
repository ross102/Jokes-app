import React from 'react'

import { useRouter } from 'next/router';


const Back = () => {
    const router = useRouter();

    const goback = () => {
        router.replace("/");
    }
    
    return (
        <div>
           <button onClick={goback}>back</button>
        </div>
    )
}

export default Back

