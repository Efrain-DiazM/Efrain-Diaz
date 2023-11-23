import { Route, Routes } from 'react-router-dom';

import Header  from '../components/header';
import Navbar from '../components/navbar';
import AboutMe from './AboutMe';
import Experiences from './Experiences';
import Skills from './Skills';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Home from '../components/Home';

function App() {
  return (
    <main className='grid grid-rows h-auto w-auto font-roboto'>
        <Header />
        <section className='grid md:grid-cols-[1fr_auto] grid-rows-[1fr_auto] md:justify h-full'>
          <section className='bg-PersonalGray-100 flex items-center justify-center'>
            <section className="bg-PersonalGray-50 w-full h-auto md:h-auto md:mx-20 mx-4 rounded-2xl">
              <Routes>
                <Route path='/AboutMe' element={<AboutMe />} />
                <Route path='/Experiences' element={<Experiences />} />
                <Route path='/Skills' element={<Skills />} />
                <Route path='/Projects' element={<Projects />} />
                <Route path='/ContactMe' element={<ContactMe />} />

                <Route path='/' element={<Home />} />
              </Routes>
            </section>
          </section>
          <section className='bg-PersonalGray-100 h-full py-8 self-center'>
          <Navbar />
          </section>
          
        </section>
    </main>
  );
}

export default App;