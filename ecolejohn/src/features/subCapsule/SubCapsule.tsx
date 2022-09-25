import { FC } from 'react';
import './subCapsule.scss';

interface ComponentsProps {
  child: any
}

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- //
const SubCapsule : FC<ComponentsProps> = ({ child }) => {
  return (
    <>
      <div className='subCapsule'>
        {child}
      </div>
    </>
  );
}

export default SubCapsule;