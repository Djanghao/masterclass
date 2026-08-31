# Easy understand JS solution with .every()

**Author:** DmitrySobolevsky
**Votes:** 7
**Link:** [https://leetcode.com/problems/self-dividing-numbers/solutions/658721/](https://leetcode.com/problems/self-dividing-numbers/solutions/658721/)

---

```
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const result = [];
    
    for(let i = left; i <= right; i++){
        String(i).split('').every(number => +number && !(i % number)) && result.push(i);
    }
    
    return result;
};
```