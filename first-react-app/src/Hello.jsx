function Hello(){

    let name = "Manish"
    let fullName = () =>{
        return "Manish Jangra"
    }

    return <h3>Hello this is {fullName()} speaking</h3>
}
export default Hello;