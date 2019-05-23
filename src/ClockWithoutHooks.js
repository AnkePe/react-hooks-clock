import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            date: new Date(),                 
        }
    }

    componentDidMount() {
        this.timerID = setInterval( () => this.tick(), 1000 )    
    };

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <>
                <h2>Hi there!</h2>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>                
            </>
        )
    }
}

 export default Clock 


//  class Clock extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { 
//             date: new Date(),
//             // width: window.innerWidth,       
//         }

//         // this.handleResize = this.handleResize.bind(this)
//     }

//     componentDidMount() {
//         this.timerID = setInterval( () => this.tick(), 1000 )
//         // window.addEventListener('resize', this.handleResize)
//     };

//     componentWillUnmount() {
//         clearInterval(this.timerID)
//         // window.removeEventListener('resize', this.handleResize)
//     }

//     tick() {
//         this.setState({
//             date: new Date()
//         })
//     }

//     // handleResize() {
//     //     this.setState({
//     //         width: window.innerWidth
//     //     })
//     // }

//     render() {
//         return (
//             <>
//                 <h2>Hi there!</h2>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//                 {/* <h3>Window width is {this.state.width}.</h3> */}
//             </>
//         )
//     }

// }

// export default Clock 