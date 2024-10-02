const getBooks=async()=>
{
    try{
        let endpoint=apiLists.bookSearch;
        return await apiCall(endpoint,false);
    }
    catch(error)
    {
        //Error HAndling
    }
}


const getBookById=async(bookId)=>
    {
        try{
            let endpoint=apiLists.bookSearchById;
            const params=new URLSearchParama();
            params.append('bookId',bookId);
            return await apiCall(endpoint,false);
        }
        catch(error)
        {
            //Error HAndling
        }
    }

    const apiCall= async (endPoint,params)=>
    {
        const url=process.env.SERVICE_URL_LOCAL;
        let headers={
            "Accept": "application/json",
            "Content-Type":"application/json;charset=UTF-8",
          //  "Authorization":'Bearer ${sessionStorage.getItem("token")} ',
        //    ...header
        };
            let req={params:params, headers:headers}
            return await axios.get(url+endPoint,req)
            .then(response=>handleResponse(response)
            .then(data=>data))
            .catch(error=>handleError(error))
        
    }
const handleResponse=(response)=>
{
    if(response.status===200 || response.status===201 )
        return response;
}
    let result={

        getBooks, getBookById
    }

    export default result;