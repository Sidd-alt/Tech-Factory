import React from 'react';
import PartitionOne from '../Intro/PartitionOne/PartitionOne';
import PartitionTwo from '../Intro/PartitionTwo/PartitionTwo';
import './Intro.css'

function Intro(props) {
    return (
        <div className="Intro">
            <PartitionOne />
            <PartitionTwo/>
        </div>
    );
}
export default Intro;

// function Intro(props) {
//     return (
//         <div>
//             <div className="row">
//                 <div className="column">
//                     <div className="PartitionOne">
//                         <PartitionOne />
//                     </div>
//                 </div>
//                 <div className="column">
//                     <div className="PartitionTwo">
//                         <PartitionTwo/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

