import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './capsule.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Kart from '../kart/kart';
import SubCapsule from '../subCapsule/SubCapsule';
import Actu from '../component/actu';
import NousEcoleJohn from '../component/nousEcoleJohn';
import HorsLesMurs from '../component/horsLesMurs';
import Equipe from '../component/equipe';
import Inscription from '../component/inscription';
import Events from '../component/events';

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
          <SubCapsule child={<Actu />}/>
          <SubCapsule child={<NousEcoleJohn />}/>
          <SubCapsule child={<HorsLesMurs />}/>
          <SubCapsule child={<Equipe />}/>
          <SubCapsule child={<Inscription />}/>
          <SubCapsule child={<Events />}/>
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