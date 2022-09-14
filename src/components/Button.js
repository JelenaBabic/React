import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

// export const Button = ({children, type, onclick, buttonStyle, buttonSize}) => {
//     const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

//     const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

//     return(
//         <Link to='/sign-up' className='btn-mobile'>
//             <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//                     onClick={onClick}
//                     type={type} 
//                       >
//                 {children}
//             </button>
//         </Link>
//     )
// };

function Button(props) {
    const checkButtonStyle = STYLES.includes(props.buttonStyle) ? props.buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(props.buttonSize) ? props.buttonSize : SIZES[0];

    return (
        <Link to={props.path} className='btn-mobile'>
          <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={props.onClick}
            type={props.type}
          >
            {props.children}
          </button>
        </Link>
      );
}
export default Button;
