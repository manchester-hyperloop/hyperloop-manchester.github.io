
function get_teams(){
    jsonData =
        [{
        "name": "Committee",
        "description": "",
        "members": [
          {
            "name": "Harry Shakesheff",
            "photoUrl": "./members/x.jpg",
            "position": "President"
          },
          {
            "name": "Dhillon Dhass Zhao",
            "photoUrl": "./members/x.jpg",
            "position": "Vice President"
          },
          {
            "name": "Rafael Augusto Delicoli Franco",
            "photoUrl": "./members/x.jpg",
            "position": "Chief Engineer"
          },
          {
            "name": "Adithya Vadakkadath",
            "photoUrl": "./members/x.jpg",
            "position": "Project Manager"
          },
          {
            "name": "Manahil Ullah",
            "photoUrl": "./members/x.jpg",
            "position": "Project Manager"
          },
          {
            "name": "Barış Gürel",
            "photoUrl": "./members/x.jpg",
            "position": "Treasurer"
          },
          {
            "name": "Vadan Khan",
            "photoUrl": "./members/x.jpg",
            "position": "Head of Magnetic Levitation"
          },
          {
            "name": "Alexander Neytchev",
            "photoUrl": "./members/x.jpg",
            "position": "Head of Chassis"
          },
          {
            "name": "Nabhanyu Shetti",
            "photoUrl": "./members/x.jpg",
            "position": "Head of Braking"
          },
          {
            "name": "Thomas Johnson",
            "photoUrl": "./members/x.jpg",
            "position": "Head of Magnetic Braking"
          },
          {
            "name": "Tibault Dary-Alabaster",
            "photoUrl": "./members/x.jpg",
            "position": "Head of Full Scale"
          },
          {
            "name": "Max Sheng Che Chang",
            "photoUrl": "./members/x.jpg",
            "position": "Head of Suspension"
          },
          {
            "name": "Rohan Verma",
            "photoUrl": "./members/x.jpg",
            "position": "Head of Electronics and Software"
          },
          {
            "name": "Jacqueline Lin",
            "photoUrl": "./members/x.jpg",
            "position": "Head of Business and Sponsorship"
          }
        ]
      }
    ]

    
    let data = JSON.parse(JSON.stringify(jsonData));
    const container = document.getElementById("container");
    for (var i = 0; i < data.length; i++){

        for (var j = 0; j < data[i].members.length; j++){
            const person_profile = document.createElement("div");


            let image_src = data[i].members[j].photoUrl;
            console.log(image_src)
            if (image_src == "./members/x.jpg"){
              image_src = "./members/temp-profile.png"
            }

            try {
                let image_element = document.createElement("img");
                image_element.src = image_src;
                image_element.width = 150;
                image_element.height = 150;
                image_element.classList.add("member-image")
                person_profile.appendChild(image_element);
                //container.appendChild(image_element);
            } catch (err){
                console.log("image not found");
            }
            

            const name_element = document.createElement("p");
            const person_name = document.createTextNode(data[i].members[j].name);
            name_element.appendChild(person_name);
            name_element.classList.add("member-name")
            person_profile.appendChild(name_element);

            const position_element = document.createElement("p");
            const position_name = document.createTextNode(data[i].members[j].position);
            position_element.appendChild(position_name);
            position_element.classList.add("member-role")
            person_profile.appendChild(position_element);
            person_profile.classList.add("member-div")

            container.appendChild(person_profile);
        }
    }
}