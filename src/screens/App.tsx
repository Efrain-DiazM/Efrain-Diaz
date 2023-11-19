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
    <main className='grid grid-rows h-full w-auto font-roboto'>
      {/* <Navbar /> */}
      {/* <section className='grid grid-rows-[140px_1fr]'> */}
        <Header />
        <section className='grid md:grid-cols-[1fr_18%] grid-rows-[1fr_18%] md:justify h-full'>
          {/* <section className=''>

          </section> */}
          <section className='bg-PersonalGray-100 flex items-center justify-center'>
            <section className="bg-PersonalGray-50 w-full md:h-[80%] h-full md:mx-20 mx-4 rounded-2xl">
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
          <section className='bg-PersonalGray-50 h-full py-4 items-center justify-center'>
          <Navbar />
          </section>
          
        </section>
        
        {/* <Footer /> */}
      {/* </section> */}
    </main>
  );
}

export default App;