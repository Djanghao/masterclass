# Easy to understand

**Author:** haque_jibon
**Votes:** 0
**Link:** [https://leetcode.com/problems/mice-and-cheese/solutions/5918190/](https://leetcode.com/problems/mice-and-cheese/solutions/5918190/)

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
function miceAndCheese(reward1: number[], reward2: number[], k: number): number {

    let n = reward1.length;
    let ans = 0;

    for (let i = 0; i < n; i++) {
        reward1[i] = reward1[i] - reward2[i]
        ans += reward2[i]
    }

    reward1.sort((a, b) => b - a)

    for (let i = 0; i < k; i++) {
        ans += reward1[i]
    }



    return ans;

};
```