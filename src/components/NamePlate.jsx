import React from 'react';

// const NamePlate = (props) => {
//     const {showAge, user} = props;
//   return <div>
//       <p>
//           My name is {showAge && user.name} 
//       </p>
//   </div>;
// };

// export default NamePlate;

const NamePlate = ({showAge, user}) => {  
    return <div>
        <p>
            My name is {showAge && user.name} 
        </p>
    </div>;
  };
  
  export default NamePlate;