# Solution Partitioning Into Minimum Number Of Deci-Binary Numbers

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/5287657/](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/5287657/)

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
    public function minPartitions($s) {
        $n = strlen($s);
        $maxDigit = PHP_INT_MIN;
        for ($i = 0; $i < $n; $i++) {
            $digit = intval($s[$i]);
            $maxDigit = max($maxDigit, $digit);
        }
        return $maxDigit;
    }
}

```