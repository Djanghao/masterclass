# TS & JS Simple solution | O(log N)

**Author:** JCeccarelli
**Votes:** 0
**Link:** [https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/solutions/5017495/](https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/solutions/5017495/)

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
function twoEggDrop(n: number): number {
   let sum = 1;
   let tries = 1;

   for (let i = 2; sum < n; i++) {
    sum += i;
    tries++;
   }

   return tries;
};
```