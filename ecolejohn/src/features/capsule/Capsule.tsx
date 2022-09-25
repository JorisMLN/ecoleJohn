import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './capsule.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Kart from '../kart/kart';
import SubCapsule from '../subCapsule/SubCapsule';
import ContentOne from '../testComponent/contentOne';
import ContentTwo from '../testComponent/contentTwo';
import ContentThree from '../testComponent/contentThree';
import ContentFour from '../testComponent/contentFour';

const Capsule : React.FC = () => {  
  interface State {
    kartState: boolean
  }
  const kartState = useSelector((state: State) => state.kartState);

  useEffect(() => {
    if(kartState === true){
      const kartCapsule : HTMLElement | null = document.getElementById('capsuleKart');
      kartCapsule?.classList.add('containerKartAnim');
      setTimeout(() => {
        kartCapsule?.classList.add('kartVisible');
      }, 1500)
    }
  }, [kartState])

  return (
    <>
      <div className='capsule'>
        <Header />

        {kartState === false ?
        <div className='capsule__container'>
          <SubCapsule child={<ContentOne />}/>
          <SubCapsule child={<ContentTwo />}/>
          <SubCapsule child={<ContentThree />}/>
          <SubCapsule child={<ContentFour />}/>
        </div>
        :
        <div id='capsuleKart' className='capsule__kart'>
          <Kart />
        </div>}

        <Footer />
      </div>
    </>
  );
}

export default Capsule;