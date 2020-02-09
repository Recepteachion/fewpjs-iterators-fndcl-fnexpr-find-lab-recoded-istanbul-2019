const testVar = {}

function testFunc() {
  return "hi"
}
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function superbowlWin(Array){
  
  for (let i=0;i<Array.length;i++){
    if (Array.find(el => el.result ==="W")){
      Array[i].year
    }
  }
}
