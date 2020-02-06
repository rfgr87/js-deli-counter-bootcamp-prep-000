function takeANumber(line,name){
  var number = line.length + 1
  var string;
  string = `Welcome, ${name}. You are number ${number} in line.`
  return string
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    var name;
    name = katzDeliLine[0];
    katzDeliLine.shift()
    return name;
  }
}

function currentLine(line){
  var string;
  var line_names;
  var name;
  for(let i = 0; i < line.length; i++){
    name = line[i];
    line_names + ", " + line_names;
    line_names = `${i+1}. ${name}`;
  }
   string = "The line is currently: "
}
