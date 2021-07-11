import { useState,useEffect } from 'react';
import './App.css';
import { ChuckQuotes } from './components/ChuckQuotes';
import { SerachBox } from './components/SerachBox';
import { getChuckQuotesByQuery } from './services/getChuckQuotesByQuery';

function App() {

  const [data,setData] = useState([])
  const [queryTerm,setQueryTerm] = useState("")

  useEffect(() => {
    if(queryTerm){
      const func = async () => {
        const res = await getChuckQuotesByQuery(queryTerm)  
        setData(res.result)
      }
      func()
    }
  }, [queryTerm])

  const list = data.map((e) => <ChuckQuotes key={e.id} date={e.created_at} text={e.value} icon={e.icon_url} />)

  const handleSearch = (query) => {
    setQueryTerm(query)
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <SerachBox onSearch={handleSearch}/>
        {list}
      </header>
    </div>
  );
}

export default App;
