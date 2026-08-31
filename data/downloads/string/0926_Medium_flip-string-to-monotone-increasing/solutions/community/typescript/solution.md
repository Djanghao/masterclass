# Simple O(n) Typescript/Javascript Solution

**Author:** wentland
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/3079277/](https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/3079277/)

---


# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const minFlipsMonoIncr = (s: string): number => {
    let min = Infinity;
    let numZeros = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '0') numZeros++; 
        min = Math.min(min, i + 1 - (2 * numZeros))
    }
    min = Math.min(min + numZeros, numZeros, s.length - numZeros);
    return min;
};
```