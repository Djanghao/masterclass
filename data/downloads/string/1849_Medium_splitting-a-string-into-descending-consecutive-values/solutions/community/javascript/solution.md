# Javascript, concise, faster than 100%

**Author:** mikasa12343
**Votes:** 1
**Link:** [https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/2015681/](https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/2015681/)

---

Explanantion:
Create a recursive function that accepts the following parameters:
prev: the prev number, initialised as null
i: the current starting index
count: the count of numbers we identify from the string so far

Each recursion, we aim to identify a substring that can be translated to a number that satisfies the criteria (i.e. number === prev-1), if that is possible, we recursively call the function split, until we reach the end of the string. 
```
function splitString(s){
  
  function split(prev,i,count){
    if (i === s.length && count >= 2) return true

    for (let j=i+1; j<=s.length; j++){
      const currNum = parseInt(s.slice(i,j))
      if (prev === null && currNum !== 0 || currNum === prev - 1){
        if (split(currNum,j,count+1)) return true
      }
    }
    return false
  }
  return split(null,0,0)
}

```