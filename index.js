function scuberGreetingForFeet(distance){
  // Write your code here!
    let messageDistance;
    if (distance <= 400) {
      messageDistance = 'This one is on me!';
    }else if (distance > 2000, distance < 2500) {
      messageDistance = 'I will gladly take your thirty bucks.';
    }else if (distance > 2500) {
      messageDistance = 'No can do.';
    } 
    return messageDistance;
}

function ternaryCheckCity(city){
  // Write your code here!
  const messageDestination = city === 'NYC' ? "Ok, sounds good." : "No go.";
  return messageDestination;
}

function switchOnCharmFromTip(tipAmount){
  // Write your code here!
  let tipMessage;
  switch (tipAmount) {
    case 'generous':
      tipMessage = "Thank you so much.";
      break;
    case 'not as generous':
      tipMessage = "Thank you.";
      break;
    default:
      tipMessage = "Bye.";
      break;
  }
  return tipMessage;
}