
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {addNumber,removeNr,interogareApi} from '../redux/editNumbers'

const Home =()=>{
    const dispatch = useDispatch();
    const data =useSelector( state=>state.edit_numbers.data )
    const pending =useSelector( state=>state.edit_numbers.pending )
    const error =useSelector( state=>state.edit_numbers.error )
    const posts =useSelector( state=>state.edit_numbers.posts )


    const Creste =()=>{
        dispatch(addNumber()) 
    }
    const Scade =()=>{
        dispatch(removeNr())
    }
      //Get post from api
  useEffect(()=>{
    dispatch(interogareApi());
  },[])

  console.log(pending,error,posts)
    return(
        <>
        <h2>Pagina Home commi test</h2>
        <div>
            <button onClick={()=>Creste()}>Creste</button>
             <h3>{data}</h3>
            <button onClick={()=>{
                Scade()
            }}>Scade</button>
        </div>
        <ul style={{display:"grid"}}>
            {
                posts?.map((item,index)=>{return(
                <li style={{margin:10}} key={index}>{item.id}</li>
                )})
            }
        </ul>

        </>
    )
}

export  default Home;