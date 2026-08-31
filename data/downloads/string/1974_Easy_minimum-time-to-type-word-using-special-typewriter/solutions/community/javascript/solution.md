# Javascript, easy to follow solution

**Author:** a8e
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/1503240/](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/1503240/)

---

```
var minTimeToType = function(word) {
  let ops = 0;
  let cur = 'a';
  
  for(const char of word) {
    const diff = Math.abs(cur.charCodeAt(0) - char.charCodeAt(0));
    if(diff > 13) {
      ops += 26 - diff + 1;
    } else {
      ops += diff + 1;
    }
    
    cur = char;
  }
  
  return ops;
};
```