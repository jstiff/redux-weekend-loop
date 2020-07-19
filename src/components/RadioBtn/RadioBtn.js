import React, {Component} from 'react';



class RadioBtn extends Component{

    render(){
        return(
            <>
                <input value={this.props.value} onClick={(event) => this.props.BtnChange(event)} type="radio"  className="radioBtn" style={{width:"40px",margin:"30px"}} />
            </>
        )
    }
}


export default RadioBtn;