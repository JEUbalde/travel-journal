import './App.css';
import data from './Data';
import Entry from './components/Entry';
import Navbar from './components/Navbar';

function App() {

  const journalEntries = data.map(entry => {
    return(
      <Entry
        title={entry.title}
        location={entry.location}
        googleMapsUrl={entry.googleMapsUrl}
        startDate={entry.startDate}
        endDate={entry.endDate}
        description={entry.description}
        imageUrl={entry.imageUrl}
      />
    )
  })

  return (
    <div>
      <Navbar/>
      {journalEntries}
    </div>
  );
}

export default App;
