import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';
import { JokesApiService } from '../../services'
import styles from '../../styles/jokes.module.css'
import {Back} from "../../components"

interface Props {
  data: {
    categories: Array<string>,
    created_at: string,
    icon_url: string,
    id: string,
    updated_at: string,
    url: string,
    value: string
  }
  
}



const Jokes: NextPage<Props> = ({data}) => {
    const router = useRouter();

    

    const refreshData = () => {
        router.replace(router.asPath);
    }
   
  return (
    <div>
      <Head>
        <title>Random jokes</title>
        <meta name="description" content="Jokes app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <Back /> 
      </div>
     <div className={styles.main}>
       
     <h2>Random jokes</h2>
     
     <p>{data.value  ? data.value : "" }</p>
     {data.value  ?
     <button className={styles.jokebtn} onClick={refreshData}> More jokes</button> : ""
    }
     </div>    
   </div>
  )
}


export async function getStaticProps() {    
  
   try {
      const res = await JokesApiService.getRandommJoke();
      return {
      props: {
      data: res.data,
    },
  }
  }  catch (error) {
      console.log(error);
  }
     return {
      props: {
       data: {},
    },
  } 
  
}

export default Jokes
