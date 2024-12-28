import "./App.css";      
import { Data } from "./data";  
import Card from "./Components/Card/Card";        

const App = () => {  
  
  console.log(Data);

  return (  
    <>    
      <h1>Product cards </h1>  

      
      {Data ? (    
        Data.map((e, i) => {  
          return (
            <Card
              key={e.id}
              id={e.id}
              title={e.title}
              description={e.description}
              category={e.category}
              image={e.image}
              rating={e.rating}
            />
          );
        })
      ) : (
        <h1>Data not fetch</h1>
      )}
    </>
  );
};

export default App;