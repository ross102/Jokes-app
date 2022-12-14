import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import { JokesApiService } from '../services'

import styles from '../styles/Home.module.css'


interface Props {
  data: Array<string>;
}

const Home: NextPage<Props> = ({data}) => {
   
  return (
    <div>
      <Head>
        <title>Laugh small</title>
        <meta name="description" content="Jokes app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
     <div data-testid="main-page" className={styles.main}>
     <h2>Jokes Category</h2>
     <ul>
      {
        data && data.length > 0 ? data.map((el, i) => {
          
        return  <li data-testid="nav-links" key={i}> 
                 <Link data-testid="btns" href={`/jokes/${el}`}> 
                {el}
                 </Link>
               </li>
        })
        : 
        ""
      }
      </ul>
     </div>    
   </div>
  )
}


export async function getStaticProps() {
  // get data
  try {
   const res = await JokesApiService.getAllCategories();

    return {
    props: {
      data: res.data,
    },
  }
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      data: [],
    },
  }
  
}

export default Home
