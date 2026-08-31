# Bottom Up Solution

**Author:** bajinatu1234
**Votes:** 0
**Link:** [https://leetcode.com/problems/4-keys-keyboard/solutions/5959583/](https://leetcode.com/problems/4-keys-keyboard/solutions/5959583/)

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
```typescript []
function maxA(n: number): number {
    const dp:number[] = Array.from({length:n+1}, (val,idx) => idx) as number[];
    for(let i = 0; i <= n -3; i++) {
                    for (let j = i + 3; j <= Math.min(n, i + 6); j++) {
                dp[j] = Math.max(dp[j], (j - i - 1) * dp[i]);
            }
    }

    return dp[n];

};
```