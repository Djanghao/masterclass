# javascript backtracking easy

**Author:** interdailytop19
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-unique-word-abbreviation/solutions/806045/](https://leetcode.com/problems/minimum-unique-word-abbreviation/solutions/806045/)

---

The basic idea is backtrack to gerenate a abbreviation list (leetcode 320), then check if the abbreviation is valid whith every word in dictionary (leetcode 408).
Note if keep the whole abbreviation lst will use too much memory, so only keep the minimum vaild answer.

```
/**
 * @param {string} target
 * @param {string[]} dictionary
 * @return {string}
 */
var minAbbreviation = function(target, dictionary) {
  let res = ''
  let min_count = Number.MAX_SAFE_INTEGER;
  
  // reference leetcode 320 Generalized Abbreviation
  const _backtrack = function(c_string, start, count) {
    if(start == target.length) {
      if(count != 0) {
        c_string += count;
      }
      
      let abbr_letter_count = 0;
      for(let i = 0; i < c_string.length; i++) {
        if(c_string[i] >= '0' && c_string[i] <= '9') {
          let temp = i;
          while(c_string[temp] >= '0' && c_string[temp] <= '9') {
            temp++;
          }
          i = temp - 1;
        }
        abbr_letter_count++;
      }
        
      if(res.length && abbr_letter_count >= min_count) {
        return;
      } else {
        for(let word of dictionary) {
          if(validWordAbbreviation(word, c_string)) {
            return;
          }
        }
        res = c_string;
        min_count = abbr_letter_count;
      }
      return;
    }
    
    _backtrack(c_string, start+1, count+1);
    _backtrack(c_string+(count != 0 ? count : '')+target[start], start+1, 0);
  }
  
  _backtrack('', 0, 0);
  return res;
};

// reference leetcode 408. Valid Word Abbreviation
var validWordAbbreviation = function(word, abbr) {
  let j = 0;
  for(let i = 0; i < abbr.length; i++) {
    if(abbr[i] >= '0' && abbr[i] <= '9') {
      if(abbr[i] == '0') {
        return false;
      }
      let temp = i;
      while(abbr[temp] >= '0' && abbr[temp] <= '9') {
        temp++;
      }
      j += parseInt(abbr.substring(i, temp));
      i = temp - 1;
      continue;
    }
    
    if(abbr[i] != word[j]) {
      return false;
    }
    j++;
  }
  return j == word.length;
};
```