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
    <main className='grid w-screen h-screen font-roboto'>
      {/* <Navbar /> */}
      {/* <section className='grid grid-rows-[140px_1fr]'> */}
        <Header />
        <section className='grid md:grid-cols-[1fr_18%] grid-rows-[1fr_18%]'>
          {/* <section className=''>

          </section> */}
          <section className='bg-PersonalGray-100 flex items-center justify-center h-full'>
            <section className="bg-PersonalGray-50 md:h-[80%] md:w-[85%] mx-4 rounded-2xl">
              <Routes>
                <Route path='/AboutMe' element={<AboutMe />} />
                <Route path='/Experiences' element={<Experiences />} />
                <Route path='/Skills' element={<Skills />} />
                <Route path='/Projects' element={<Projects />} />
                <Route path='/ContactMe' element={<ContactMe />} />
                <Route path='/' element={<Home />} />
                {/* <Route path='*' element={<NotFound />} /> */}
              </Routes>
            </section>
          </section>
          <Navbar />
        </section>
        
        {/* <Footer /> */}
      {/* </section> */}
    </main>
  );
}

export default App;