import React, {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'


const CryptoSearch =()=>{
const [cryto, setCryto] =useState("")
const [img, setImage]= useState("")
const [name, setName] = useState("")
const[symbol, setSymbol] = useState("")
const[link, setLink] = useState("")
const[usd, setUsd] =useState("")
const[Ngn, setNgn] =useState("")
const[desc, setDesc] = useState("")
const handleSubmit=()=>{
    const url ="https://api.coingecko.com/api/v3/coins/" + cryto;
    axios.get(url).then(res=>{
        const resData =res.data
        setImage(resData.image.large)
        setName(resData.name)
        setNgn("price in naira: ₦ " + resData.market_data.current_price.ngn)
        setSymbol(resData.symbol)
        setLink(resData.links.homepage[0])
        setUsd( "price in USD : $ " + resData.market_data.current_price.usd)
        setDesc(JSON.stringify(resData.description.en))
    })
}
 
function createMarkup(){
    return {__html:desc}
}
    return <>
    
    <div style={{backgroundColor:"black", minHeight:"100vh",color:"white"}}>
<h1 className=' bg-info p-4'>CryptoSearch </h1>
<div className='d-flex justify-content-center'>
    <div className='col-md-4 mt-5'>
    <input type="text" value={cryto} onChange={(e)=> setCryto(e.target.value)} placeholder="enter the cryto currency" required className='form-control'/>
    </div>

</div>
<button onClick={handleSubmit} className='btn btn-secondary px-1 mt-4'> Submit</button>


<div className='mt-5 container-fluid d-flex justify-content-center'>
    <div className='col-md-4 bg-info p-2 rounded'>
<img src={ img} width="150" />
<br />
<h1 className="text-white">
{name}
</h1>
<h2 >
{symbol}
</h2>
<h2>
  <a className="text-white" href={link}  >{ link}</a>
</h2>
<br />
<h2>{usd}</h2>
<h2>  {Ngn}</h2>

    </div>


<div className='col-md-8 my-auto'>
    <div dangerouslySetInnerHTML={createMarkup()}>

    </div>
</div>
</div>
    </div>
    
    
    </>
}
export default CryptoSearch