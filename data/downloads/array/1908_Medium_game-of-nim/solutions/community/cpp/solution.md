# C++ easy solution

**Author:** pejmantheory
**Votes:** 1
**Link:** [https://leetcode.com/problems/game-of-nim/solutions/3981736/](https://leetcode.com/problems/game-of-nim/solutions/3981736/)

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
class Solution {
 public:
  bool nimGame(vector<int>& piles) {
    return accumulate(piles.begin(), piles.end(), 0, bit_xor<>()) > 0;
  }
};

```