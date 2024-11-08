
function get_teams(){
    jsonData =
        [{
        "name": "Committee",
        "description": "",
        "members": [
          {
            "name": "Barış Gürel",
            "photoUrl": "./members/baris-gurel.jpg",
            "position": "President"
          },
          {
            "name": "Kaustubh Girish",
            "photoUrl": "./members/kaustubh-girish.jpg",
            "position": "Vice President"
          },
          {
            "name": "Rutvik Perepa",
            "photoUrl": "./members/rutvik-perepa.jpg",
            "position": "Chief Engineer"
          },
          {
            "name": "Nabhanyu Shetti",
            "photoUrl": "./members/nabhanyu-shetti.png",
            "position": "Project Manager"
          },
          {
            "name": "Matthew Djong",
            "photoUrl": "./members/matthew-djong.jpg",
            "position": "Project Manager"
          },
          {
            "name": "Neme Okoroafor",
            "photoUrl": "./members/temp-profile.png",
            "position": "Secretary"
          },
          {
            "name": "Matthew Smith",
            "photoUrl": "./members/temp-profile.png",
            "position": "Treasurer"
          },
          {
            "name": "Veronica Mendez",
            "photoUrl": "./members/veronica-mendez.jpg",
            "position": "Inlcusivity & Diversity Officer"
          },
          {
            "name": "Cengizhan Dogan",
            "photoUrl": "./members/temp-profile.png",
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