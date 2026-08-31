# TS solution

**Author:** GennadySX
**Votes:** 0
**Link:** [https://leetcode.com/problems/chalkboard-xor-game/solutions/4623528/](https://leetcode.com/problems/chalkboard-xor-game/solutions/4623528/)

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
function xorGame(nums: number[]): boolean {
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i];
    }
    return xor === 0 || nums.length % 2 === 0;
}
```