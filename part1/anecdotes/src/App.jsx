import { useState } from 'react'

const VotedLIst = (props) => {
  return (
    <>
      <br />
      {props?.text}
      <br />
      Has {props?.total} vote
      <br /><br />
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState([]);

  const handleClick = (name='', index='') => {
    if (name === 'vote') {
      setVoted((state) => {
        let newState = [];
        const findData = state.find(a => a.name === index);
        if (findData) {
          newState = state.map(a => 
            a?.name === index ? {...a, total: a?.total + 1}
            : a
          );
        }else{
          newState.push(...state, {name: index, total: 1})
        }
        return newState.sort((a, b) => b.total - a.total);
      });
    }else{
      const maxLength = anecdotes?.length || 1;
      if (name === 'next') {
        if ((selected+1) >= maxLength) {
          setSelected(0); 
        }else{
          setSelected(selected+1);
        } 
      }else{
        if ((selected+1) <= 1) {
          setSelected(maxLength-1); 
        }else{
          setSelected(selected-1);
        }
      }
    }    
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      <button onClick={() => handleClick('back')}>Previous anecdotes</button>
      <button onClick={() => handleClick('next')}>Next anecdotes</button>
      <br />
      <button onClick={() => handleClick('vote', selected)}>Vote</button>
      <br />
      {
        voted?.length ? 
        <h1>Voted Anecdote</h1>
        : <></>
      }
      {
        voted?.length ? 
        voted.map(a =>(
          <VotedLIst key={a?.name} text={anecdotes[a?.name]} total={a?.total}/>
        )) 
        : <></>
      }
    </div>
  )
}

export default App