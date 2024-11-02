import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/main.css'
import Listing from './Listing.tsx'
import data from './data/etsy.json'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Listing items={data} />
  </StrictMode>,
)
