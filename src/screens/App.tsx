import { Route, Routes } from 'react-router-dom';

import Header  from '../components/header';
import Navbar from '../components/navbar';
import AboutMe from './AboutMe';
import Experiences from './Experiences';
import Skills from './Skills';
import Projects from './Projects';
import ContactMe from './contactMe';

function App() {
  return (
    <main className='grid grid-row-[140px_1fr] w-screen h-screen font-roboto'>
      {/* <Navbar /> */}
      {/* <section className='grid grid-rows-[140px_1fr]'> */}
        <Header />
        <section className='grid grid-cols-[1fr_200px]'>
          {/* <section className=''>

          </section> */}
          <section className='bg-PersonalGray-100 flex items-center justify-center h-full'>
            <section className="bg-PersonalGray-50 h-[80%] w-[85%] rounded-2xl">
              <Routes>
                <Route path='/' element={<AboutMe />} />
                <Route path='/Experiences' element={<Experiences />} />
                <Route path='/Skills' element={<Skills />} />
                <Route path='/Projects' element={<Projects />} />
                <Route path='/ContactMe' element={<ContactMe />} />
                {/* <Route path='/signIn' element={<SignIn />} />
                <Route path='*' element={<NotFound />} /> */}
              </Routes>
              {/* <h1 className="text-2xl font-bold">Efrain Diaz</h1> */}
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