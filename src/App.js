import { useEffect, useState } from 'react';
import './App.css';
import EmojiData from './EmojiData';

function App() {
  const [input,setInput]=useState('');
  const [data,setData]=useState([]);
  const [successMsg,setSuccessMsg]=useState('50%');
  useEffect(()=>{
    const filteredData=EmojiData.filter(emoji=>emoji.description.toLowerCase().includes(input.toLowerCase()))
    setData(filteredData);
  },[input]);

  
  const handleInput=(e)=>{
    setInput(e.target.value);
  }
 

  return (
    <div className="App">
     {/* search */}
     <div className="input" value={input} onChange={handleInput} style={!input?{height:'100vh'}:{height:'10rem'}}>{
       !input &&
       <div className="emojis">
       <p>😎</p>
       <p>😇</p>
       <p>😍</p>
       <p>😊</p>
     </div>
     }
      
       <input type="text" placeholder='Search Emoji' />{
         !input &&
         <p style={{color:'white',marginTop:'10px',fontWeight:'400'}}>Find Your Favourite Emoji  <span style={{color:'#8400ff'}}>!!</span></p>
       }
      {
        //  successMsg &&
         <p className='success' style={{bottom:successMsg}} >Copied to clipboard 👍🏻</p>

       }
     </div>
      {/* result */}
      <div className="result">
        {
          data.map((data,index)=>{
            if(input)
            return(
              <div key={index} className='searchResult'onClick={()=>{
                navigator.clipboard.writeText(data.emoji)
                setSuccessMsg('20px');
                setTimeout(()=>{
                  setSuccessMsg('50%')
                },1500)
              }}>
                <p className='copyToClipboard'>Click to copy</p>
              <p className='emoji'>{data.emoji}</p>
              <p className='emojiDesc'>{data.description}</p>
              </div>
            )
           
})
        }
      </div>
    </div>
  );
}

export default App;
