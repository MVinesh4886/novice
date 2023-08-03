/*function stringPatternSearch(text, pattern){
    let count = 0
    for(let i=0; i<text.length; i++){
        for(let j=0 ; j<pattern.length;j++){
            const match = pattern[j]
            if(match !== text[i+j]){
                break;
            }
            if(j=== pattern.length-1){
                count++
            }
        }
    }
    return count;
}
console.log(stringPatternSearch("lollipop","lol"))*/

/*function countPattern(text, pattern) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (text.substring(i, i + pattern.length) === pattern) {
        count++;
      }
    }
    return count;
  }
  console.log(countPattern("lollipop is lol for the lolly in lolld","lol"))*/

  function countPattern(text, pattern) {
    let count = 0;
    let j = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === pattern[j]) {
        j++;
        if (j === pattern.length) {
          count++;
          j = 0;
        }
      }
    }
    return count;
  }
  console.log(countPattern("lollipop is lol for the lolly in lolld","lol"))