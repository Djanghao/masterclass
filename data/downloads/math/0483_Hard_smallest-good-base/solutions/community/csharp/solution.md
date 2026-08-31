# Solution for this problem.

**Author:** crazyycoder805
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-good-base/solutions/5073388/](https://leetcode.com/problems/smallest-good-base/solutions/5073388/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
var smallestGoodBase = function(n) {
    const num = BigInt(n);
    const maxM = Math.floor(Math.log2(Number(num)));
    
    for (let m = maxM; m > 1; m--) {
        let k = BigInt(Math.floor(Math.pow(Number(num), 1 / m)));
        let sum = BigInt(1);
        let cur = BigInt(1);
        
        for (let i = 1; i <= m; i++) {
            cur *= k;
            sum += cur;
        }
        
        if (sum === num) return k.toString();
    }
    
    return (num - BigInt(1)).toString();
};

```