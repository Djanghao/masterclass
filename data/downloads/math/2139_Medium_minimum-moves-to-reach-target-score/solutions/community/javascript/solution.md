# Easy | JavaScript | JS

**Author:** codemasterjin
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/1693024/](https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/1693024/)

---

```
var minMoves = function(target, maxDoubles) {
    if (maxDoubles === 0) return target - 1;
    let count = 0;
    
    while (target > 1) {
        if (target % 2 === 0 && maxDoubles > 0) {
            target /= 2;
            maxDoubles--;
        } else {
            target--;
        }
        
        count++;
    }
    
    return count;
};
```