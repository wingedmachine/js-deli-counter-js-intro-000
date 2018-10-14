function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  return line.length > 0 ? `Currently serving ${line.shift()}.` : "There is nobody waiting to be served!";
}
