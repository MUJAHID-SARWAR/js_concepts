const myObject = {
    js : 'javaScript',
    Cpp : 'C++',
    rb : 'Ruby on Rails',
    swift : 'swift by apple'
}

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
}

let coding = ['c++' , 'php' , 'js' , 'java']

for (const key in coding) {
//   console.log(coding[key])
}
 
  // Map is not iterable
  
const map = new Map ()

map.set ('Pak' , 'Paistan')
map.set ('IN' , 'India')
map.set ('GR' , 'Germany')

for (const key in map) {
  console.log(key)
}
