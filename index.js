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
  var line_lenght
  if(line_length < 1){
    return "The line is currently empty."
  }
  else if(line_length === 1){
    string = `The line is currently: ${line_length}. ${line[0]}`;
    return string
  }
  else{
  string = `The line is currently: 1. ${line[0]}`;
  for(let i = 1; i < line_length; i++){
    name = line[i];
    line_names = string + `, ${i+1}. ${name}`;
    string = line_names
    }
    return string
  }
}
