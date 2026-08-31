# JS using map

**Author:** Gift369
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/1711458/](https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/1711458/)

---

```
var findLonely = function(nums) {
    let countMap = new Map();
    let result = [];
    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    for (let num of nums) {
        if (!countMap.has(num - 1) && !countMap.has(num + 1) && countMap.get(num) === 1) {
            
            result.push(num);
        }
        
    }
    return result;
};
```