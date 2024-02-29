
function get_teams(){
    jsonData =
        [{
        "name": "Committee",
        "description": "",
        "members": [
          {
            "name": "Harry Shakesheff",
            "photoUrl": "./members/harry-shakesheff.jpg",
            "position": "President"
          },
          {
            "name": "Dhillon Dhass Zhao",
            "photoUrl": "./members/dhillon-das.jpg",
            "position": "Vice President"
          },
          {
            "name": "Rafael Augusto Delicoli Franco",
            "photoUrl": "./members/rafael-franco.jpg",
            "position": "Chief Engineer"
          },
          {
            "name": "Adithya Vadakkadath",
            "photoUrl": "./members/adithya-vadakkadath.jpg",
            "position": "Project Manager"
          },
          {
            "name": "Manahil Ullah",
            "photoUrl": "./members/manahil-ullah.jpg",
            "position": "Project Manager"
          },
          {
            "name": "Barış Gürel",
            "photoUrl": "./members/baris-gurel.jpg",
            "position": "Treasurer"
          },
          {
            "name": "Neha Phillip",
            "photoUrl": "./members/neha-philip.jpg",
            "position": "General Secretary & Inlcusivity Officer"
          },
          {
            "name": "Mai Hamza",
            "photoUrl": "./members/mai-hamza.jpg",
            "position": "Social Secretary"
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