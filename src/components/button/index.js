import moduleCss from './index.module.scss';

import React from 'react';

// export default class Button extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log(props);
//     }

//     render() {
//         const { children } = this.props;
//         return (
//             <button className={moduleCss.btn}>{children}</button>
//         );
//     }
// }

export default function Button(props) {
    const { children, onClick } = props;

    return (
        <button onClick={onClick} className={moduleCss.btn}>{children}</button>
    );
}