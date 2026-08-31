# One raw solution

**Author:** Xayrulloh
**Votes:** 1
**Link:** [https://leetcode.com/problems/lexicographical-numbers/solutions/5815912/](https://leetcode.com/problems/lexicographical-numbers/solutions/5815912/)

---

![image.png](./images/0.png)

# Intuition
1. Create an array by n length
2. Convert it to string (easy way to sorting)
3. Sort

# Complexity
- Time complexity: O(NLogN)
- Space complexity: O(n)

# Code
```typescript []
const lexicalOrder = (n: number): number[] => new Array(n).fill(0).map((deeng, i) => i + 1).map(String).sort().map(Number);

```