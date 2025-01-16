import AppLayout from './Componets/Layout/AppLayout';
import './App.css';
import { InsuranceProvider } from './context/InsuranceContext';



function App() {
  return (
    <InsuranceProvider>
      <AppLayout />
    </InsuranceProvider>
  );
}

export default App;
