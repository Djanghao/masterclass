# simple solution

**Author:** ITPavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/4976552/](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/4976552/)

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
    function minimumCost($cost) {
    $sum = 0;
    rsort($cost);
    for ($i = 0; $i < count($cost); $i++) {
        if (($i + 1) % 3 == 0) {
            continue;
        }
        $sum += $cost[$i];
    }
    return $sum;
}
}
```