import { Route, Routes } from 'react-router-dom';

import Header  from '../components/header';
import Navbar from '../components/navbar';
import AboutMe from './AboutMe';
import Experiences from './Experiences';

function App() {
  return (
    <main className='grid grid-row w-screen h-screen font-roboto'>
      {/* <Navbar /> */}
      <section className='grid grid-rows-[140px_1fr]'>
        <Header />
        <section className='grid grid-cols-[1fr_120px]'>
          {/* <section className=''>

          </section> */}
          <section className='bg-PersonalGray-50 flex items-center justify-center h-full'>
            <section className="bg-PersonalGray-100 h-[80%] w-[85%]">
              <Routes>
                <Route path='/' element={<AboutMe />} />
                <Route path='/Experiences' element={<Experiences />} />
                {/* <Route path='/tables' element={<Tables />} />
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/signIn' element={<SignIn />} />
                <Route path='*' element={<NotFound />} /> */}
              </Routes>
              {/* <h1 className="text-2xl font-bold">Efrain Diaz</h1> */}
            </section>
            
          </section>
          <Navbar />
        </section>
        
        {/* <Footer /> */}
      </section>
    </main>
  );
}

export default App;