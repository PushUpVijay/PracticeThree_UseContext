import {useState,useContext,createContext} from 'react';

const ThemeContext=createContext(null);
function App() {
  const [theme,setTheme]=useState('light');
  return (
    
    <ThemeContext.Provider value={theme}>
      <Form/>
      <label>
        Use Dark Mode
        <input type="checkbox" checked={theme==='dark'} onChange={(e)=>{setTheme(e.target.checked ? 'dark':'light')}}/>
      </label>
    </ThemeContext.Provider>
    
  );

}
function Form(){
  return(
  <Panel title="Welcome">
    <Button>Sign Up</Button>
    <Button>Sign In</Button>
  </Panel>
  )

}
function Panel({title,children}){
  const theme=useContext(ThemeContext);
  const className='panel-'+theme;
  return(
    <section className={className}>
      <h1>{title}</h1>
      {children}
     
    </section>
    
     
    
   
  )
}
  function Button({children}){
    const theme=useContext(ThemeContext);
    const className='button-'+theme;
    return(
      <button className={className}>{children}</button>
    )

  }



export default App;
