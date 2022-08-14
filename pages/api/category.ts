// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { JokesApiService } from '../../services'

type Data = {
  data: any
  error: ""
}


export async function getData (name: string | undefined)  {
  
// get data
try {
 const res = await JokesApiService.getCategoryByName(name)
  return {
    data: res.data,
    error: ""
}
} catch (error: any) {
  console.log(error);
  if(error.response && error.response.status === 404) {
      return {
            data: {},
            error: `No jokes for category ${name} found.`
        } 
  }
}

}


 export default async function  handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
     
  let data = getData(req.body.name)

  res.status(200).json(data)
}
