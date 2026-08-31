# easy solution

**Author:** iftixorrustamovv
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/5469440/](https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/5469440/)

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
  int numberOfCuts(int n) {
    if(n == 1){
        return 0;
    }

    return n.isEven ? n ~/ 2 : n;
    }
}
```