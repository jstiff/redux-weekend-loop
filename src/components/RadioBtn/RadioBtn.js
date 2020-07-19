import React, {Component} from 'react';



class RadioBtn extends Component{

    render(){
        return(
            <>
                <input onClick={(event) => this.props.BtnChange(event)} type="radio"  className="radioBtn" style={{width:"40px",margin:"30px"}} />
            </>
        )
    }
}


export default RadioBtn;