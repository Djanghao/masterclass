# simple solution

**Author:** ITPavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-common-factors/solutions/4783955/](https://leetcode.com/problems/number-of-common-factors/solutions/4783955/)

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
function commonFactors($a, $b) {
$count = 0;
$min = min($a , $b);
for ($i = 1 ; $i <= $min; ++$i) if ($a % $i == 0 && $b % $i == 0) $count++;
return $count;  
}
}
```