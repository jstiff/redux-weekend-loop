





       
       

      export const Change = (event) => {
          console.log("clicked")
            console.log(event.target.value)
            this.setState({
                input: event.target.value
           })
       
        };
        
        export const Click = (event, type, page) => {
            console.log('clicked', event)
            this.props.dispatch({
                type: "ADD_PAGE1",
                payload: this.state.input
            })
            this.props.history.push(page);
        }

       
       
       
       