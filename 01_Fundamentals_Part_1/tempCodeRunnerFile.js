function countSmileys(arr) {
  return arr.map(el => (el.includes(':') || el.includes(';')) & (el.includes(')') || el.includes('D'))).length; 
}