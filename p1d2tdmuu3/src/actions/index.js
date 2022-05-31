const url = "http://localhost:8900"

export function Courses(){
    const output = fetch(`${url}/courses`,{method:'GET'})
    .then(response => response.json())

    return{
        type:'GET_COURSES',
        payload:output
    }
}

export function PostDate(name,phone,email,subject){

    var random = Math.floor(Math.random()*1000)
    var data = {
            id:random,
            name: name,
            phone:phone ,
            email:email,
            subject:subject,
    }
      fetch(`${url}/enquiries`,{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
      })

      .then((response) => response.json())


      return{
          type:'POST_FORM',
          payload: ''
      }
}