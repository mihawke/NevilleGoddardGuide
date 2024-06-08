import { useState } from 'react'
import './App.css'
import background from './assets/bg1.jpg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Introduction from './components/Introduction'
import Books from './components/Books'
import Lectures from './components/Lectures'
import OutOfThisWorld from './pages/OutOfThisWorld'
import AtYourCommand from './pages/AtYourCommand'
import YourFaithIsYourFortune from './pages/YourFaithIsYourFortune'
import FreedomForAll from './pages/FreedomForAll'
import FeelingIsTheSecret from './pages/FeelingIsTheSecret'
import PrayerArtOfBelieving from './pages/PrayerArtOfBelieving'
import PowerOfAwareness from './pages/PowerOfAwareness'
import { AiFillWallet } from 'react-icons/ai'
import LawAndPromise from './pages/LawAndPromise'

function App() {


  return (
    <div className='min-h-screen w-full flex flex-colpy-4'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Introduction />} />
            <Route path='/books' element={ <Books />}/>
            <Route path='/lectures' element={ <Lectures />}/>
            <Route path='/books/out-of-this-world' element={ <OutOfThisWorld />}/>
            <Route path='/books/at-your-command' element={ <AtYourCommand />}/>
            <Route path='/books/your-faith-is-your-fortune' element={ <YourFaithIsYourFortune />}/>
            <Route path='/books/freedom-for-all' element={ <FreedomForAll />}/>
            <Route path='/books/feeling-is-the-secret' element={ <FeelingIsTheSecret />}/>
            <Route path='/books/prayer-the-art-of-believing' element={ <PrayerArtOfBelieving />}/>
            <Route path='/books/the-power-of-awareness' element={ <PowerOfAwareness />}/>
            <Route path='/books/awakened-imagination' element={ <AiFillWallet />}/>
            <Route path='/books/the-law-and-the-promise' element={ <LawAndPromise />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
