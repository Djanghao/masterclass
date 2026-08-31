# [JS] Simple and Easy Approach

**Author:** andsat
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/5317134/](https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/5317134/)

---

# Intuition
We can utilize Set, if the length is different from our initial digit string, it means that there are duplicates

# Approach
- for loop a to b (say inside variable i)
- i is converted to a string
- make another variable with Set of i
- check length
- if same res +=1
- else ignore

# Complexity
- Time complexity:
  $$O((b - a + 1) * log b) $$

- Space complexity:
  $$O(b)$$

# Code
```
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var numberCount = function(a, b) {
    let res = 0
    for(let i = a; i <= b; i+=1) {
        const str = String(i)
        const set = new Set([...str])
        if(set.size === str.length) {
            res+=1
        }
    }

    return res

};
```