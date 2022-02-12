
class Counter extends React.Component{
constructor(props){
    super(props)
    this.state = {
        count: 0,
        totalTaps : 0
    }
    //this.incrementCounter = this.incrementCounter.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)
    this.resetCount = this.resetCount.bind(this)
    this.resetAll = this.resetAll.bind(this)
}
incrementCounter=()=>{
        this.setState({
            count: this.state.count +1,
            totalTaps: this.state.totalTaps +1
        })
    }
decrementCounter(){
    if(this.state.count>0){
        this.setState({
            count: this.state.count -1,
            totalTaps: this.state.totalTaps +1
        })
    }
    else{
        this.setState({
            
            totalTaps: this.state.totalTaps +1
        })
    }
        
}
resetCount(){
    this.setState({
        count: 0,
        
    })
}
resetAll(){
    this.setState({
        count: 0,
        totalTaps: 0
    })
}
render(){

    

return(
            <div class="app">
                <div class="counter">
                    <h1>Counter</h1>
                    <h2 class="count">{this.state.count}</h2>
                    <h4 class="taps">Total taps: {this.state.totalTaps}</h4>
                    <div>
                        <button onClick={this.decrementCounter}>Decrement -</button>
                        <button onClick={this.incrementCounter}>Increment +</button>
                    </div>
                    <div>
                        <button class="reset-count" onClick={this.resetCount}>Reset Count</button>
                        <button class="reset-all" onClick={this.resetAll}>Reset All</button>
                    </div>
                </div>
            </div>
)
}
}
ReactDOM.render(
    <Counter />,
    document.getElementById('root')
)