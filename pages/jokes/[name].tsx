import type { GetServerSidePropsContext, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import { JokesApiService } from '../../services';
import {Back} from "../../components";
import styles from '../../styles/[name].module.css'


interface Props {
    data: {
      categories: Array<string>,
      created_at: string,
      icon_url: string,
      id: string,
      updated_at: string,
      url: string,
      value: string
    },
    error: string
    
  }


  export async function getStaticPaths() {

    const res = await JokesApiService.getAllCategories();
    const data = res.data.map((el: string) => { return { params: {
      name: el
    }} })
         return {
          paths: data,
          fallback: false
        }  
     
  }


  export async function getStaticProps (context:GetStaticPropsContext)  {
    const name = context.params && context.params.name as string
    
  // get data
  try {
   const res = await JokesApiService.getCategoryByName(name)
    return {
    props: {
      data: res.data,
      error: ""
    },
    revalidate: 10
  }
  } catch (error: any) {
    console.log(error);
    if(error.response && error.response.status === 404) {
        return {
            props: {
              data: name,
              error: `No jokes for category ${name} found.`
            },
          } 
    }
  }
  return {
    props: {
      data: {},
      error: ""
    },
  }
  
}


const CategoryName: NextPage<Props> = ({data, error}) => {
  
  return (
    <div>
      <Head>
        <title>Laugh big</title>
        <meta name="description" content="Jokes app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
     <div>
     <div>
      <Back /> 
      </div>
     <div className={styles.main}>
      
      {
        data.categories && data.categories.length > 0 ? 
      <div>
         <h2> {data.categories[0] + " Jokes"} </h2>
        <p> {data.value}</p>
        
     </div>
     : error && error
     }    
      </div>
     </div>    
   </div>
  
  )}


export default CategoryName
