# PHP. T - O(1), M - O(1).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/4753400/](https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/4753400/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function numberOfCuts($n) {
        if($n==1) return 0;
        return $n % 2 == 0 ? $n/2 : $n;
    }
}
```