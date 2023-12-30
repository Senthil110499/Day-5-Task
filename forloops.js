
let bio=[{
    "name": "Senthil S",
    "father's name": "Selvaraj K",
    "mother's name": "Shanthi S",
    "email": "ssenthil8760650010@gmail.com",
    "phone": 8760650010,
    "degree": "B.E-Mechanical Engineering",
},
    {
    "name": "Guvi",
    "address": "1/32,Kottamangalam,Udumalpet(tk)",
    "pinCode": 642201,
    "phone": 9876543210,
    "city": "Tiruppur",
    "state": "Tamilnadu",
    "country": "India",
},
    {
    "name": "Geek",
    "interest":"SI Engine",
    "technical": "C,AutoCAD",
    "country": "India",
    "language's known": "Tamil,English",
    "hobbies": "Playing Cricket",
}
]

//   for loop

   for (let i = 0; i < bio.length; i++) {

      let obj = bio[i];
     console.log(obj.phone);
     console.log(obj.name);
     console.log(obj.email);

}

 //for In
// "=>" - only for difference purpose.

for (let key in bio) {

  console.log((key,"=>",bio[key]).name);
  console.log(bio[key].email);
 
}

//for Of

for (let arr of Object.keys(bio)) {
     
    console.log(arr,bio[arr].country);
    console.log(bio[arr]);
    console.log(bio[arr].name);

}
 

//for Each
// a,b,c(value,index,array)

bio.forEach(function (bio,b,c) {
     
    console.log(bio.name);
    console.log(bio,b,c);

 });


