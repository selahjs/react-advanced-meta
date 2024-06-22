import { useEffect, useState } from "react";
import "./App.css";
interface IParams {
  render: any;
  url?: any;
}

// the component who is going to use the render prop / data fetcher can choose how to display/render the data
// we can easiliy reuse the component 
const DataFetcher = ({ render, url }: IParams) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if (url.includes("people")) {
      setData(["Mubarek", "Redwan", "Selahadin"]);
    } else {
      setData(["React", "Angular"]);
    }
  }, []);

  return render(data);
};

const People = () => {
  return (
    <>
      <DataFetcher
        url={"http://example.com/people"}
        render={(data: any) => {
          if (!data.length) {
            return <p>loading...</p>;
          }
          return (
            <div style={{ border: 'solid'}}>
              <p>I'm using this component to list the data</p>
              <hr />
              <h2>People</h2>
              <p>There are {data.length} people, which are:</p>
              <ul>
                {data.map((d) => (
                  <li>{d}</li>
                ))}
              </ul>
            </div>
          );
        }}
      />
    </>
  );
};
const Languages = () => {
  return (
    <div style={{ border: 'solid', marginTop: 1}}>
      <DataFetcher
        url={"http://example.com/languages"}
        render={(data: any) => (
          <div>
            <p>I'm using this component to show number of data</p>
            <hr />
            <p>there are {data.length} frontend libraries</p>
          </div>
        )}
      />
    </div>
  );
};

function App() {
  return (
    <div>
      <header>Using render props</header>
      <hr />
      <People />
      <Languages />
    </div>
  );
}

export default App;
