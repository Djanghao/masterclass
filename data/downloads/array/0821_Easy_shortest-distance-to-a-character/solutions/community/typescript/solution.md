# TS | JS => Simple linear O(n) solution

**Author:** decpk
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-to-a-character/solutions/5837363/](https://leetcode.com/problems/shortest-distance-to-a-character/solutions/5837363/)

---

# Complexity
- Time complexity: ```O(n)```
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: ```O(n)```
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function shortestToChar(s: string, c: string): number[] {
    let arr = [];
    for(let i = 0; i < s.length; ++i) {
        if(s[i] === c) arr.push(i);
    }

    let result = [], left = 0, right = 0;
    for(let i = 0; i < s.length; ++i) {
        let leftNum = Math.abs(i - arr[left]);
        let rightNum = Math.abs(i - arr[right]);
        
        result.push(Math.min(leftNum, rightNum));

        if(s[i] === c) {
            left = right;
            right = right === arr.length - 1 ? right: right + 1;
        }
    }

    return result;
};
```