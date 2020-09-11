import React from 'react';

 function SpreadOperator() {
     // 1st way of using spread operator
     const fullname=['john','Deo'];
     const biodata=[1,...fullname,26,'male']
     //2nd way of using spread operator
     const shootergames=['call og duty','pubg','evil'];
     var[first,...remamining]=shootergames; //access elements of shootergames through spread operator
     //object to object spread operator
     const FullName={
         fname:"shivi",
         lname:"joshi",
     };
     const BioData={
         id:1,
         ...FullName,
         age:22,
         gender:'female'
     };
     console.log(BioData);
    return (
        <div>
            <h6> Check console for Spread operator output</h6>
        </div>
    )
}
export default SpreadOperator;
