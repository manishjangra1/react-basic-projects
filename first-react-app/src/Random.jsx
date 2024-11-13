function Random(){

    let number = Math.floor(Math.random()*10)
    return  <h1 style={{'background-color': '#ABCDEF'}}>{number}</h1>
}

export default Random;