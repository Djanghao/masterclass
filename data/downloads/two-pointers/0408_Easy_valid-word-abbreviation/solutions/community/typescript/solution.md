# Typescript | Javascript | With comments | Two pointers

**Author:** OsidAbu-Alrub
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-word-abbreviation/solutions/2545921/](https://leetcode.com/problems/valid-word-abbreviation/solutions/2545921/)

---

```
function validWordAbbreviation(word: string, abbr: string): boolean {
  if(abbr.length > word.length) return false;
  let i = 0;
  let j = 0;
  while(i < word.length && j < abbr.length){
    if(word[i] === abbr[j]){
      i++;
      j++;
      continue;
    }
    
    let numberOfSkips = 0;
    while(!isNaN(Number(abbr[j])))
    {
      numberOfSkips = (numberOfSkips * 10) + Number(abbr[j]);
      
      // Abbreviations with leading zeros are invalid
      if(numberOfSkips === 0)
        return false;
      
      j++;
    }
    
    
    // skip "numberOfSkips" chars from word
    i = numberOfSkips + i;
    
    // if the current char in word (after the skips)
    // doesn't equal the char in abbr
    // then this is an invalid abbrevation
    if(word[i] !== abbr[j])
      return false;
  }
  
  // I need to make sure that I reached the end of both strings
  // to ensure this is a valid abbrevation
  return i === word.length && j === abbr.length;
};
```