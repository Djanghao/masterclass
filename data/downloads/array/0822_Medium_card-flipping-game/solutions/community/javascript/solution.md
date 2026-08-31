# Javascript using SET

**Author:** nathanguo
**Votes:** 1
**Link:** [https://leetcode.com/problems/card-flipping-game/solutions/936617/](https://leetcode.com/problems/card-flipping-game/solutions/936617/)

---

```
   var dictionary = new Set();
    let size = fronts.length;
    for(let i = 0; i < size; ++i) {
        if (fronts[i] == backs[i]) {
            dictionary.add(fronts[i]);
        }
    }
    let min_num = Number.MAX_VALUE;
    for(let num of fronts) {
        if (!dictionary.has(num)) min_num = Math.min(min_num, num);
    }
    for(let num of backs) {
        if (!dictionary.has(num)) min_num = Math.min(min_num, num);
    }
    return min_num == Number.MAX_VALUE ? 0 : min_num;
```
Initialise a stack
Insert number into the stack if front and back is the same
Find the min value that is not inside the stack

Please upvote if you enjoyed the solution !