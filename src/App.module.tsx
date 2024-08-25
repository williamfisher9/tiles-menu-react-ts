
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Menu from './components/Menu/Menu';

export default function App(){
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Menu />}>
      <Route index element={<Menu />} />
      <Route path="home" element={<Menu />} />
      <Route path="settings" element={<Menu />} />
      <Route path="*" element={<Menu />} />
    </Route>
  </Routes>
</BrowserRouter>
}