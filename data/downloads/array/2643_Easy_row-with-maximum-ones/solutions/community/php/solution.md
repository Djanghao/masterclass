# Php Easy Solution

**Author:** velvm03
**Votes:** 0
**Link:** [https://leetcode.com/problems/row-with-maximum-ones/solutions/3822630/](https://leetcode.com/problems/row-with-maximum-ones/solutions/3822630/)

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

    /**
     * @param Integer[][] $mat
     * @return Integer[]
     */
    function rowAndMaximumOnes($mat) {
        $result = [];
        foreach($mat as $index => $rows)
        {
            $counts = count(array_keys($rows, "1"));
            $result[$index] = $counts;
        }
        $maxs = array_keys($result, max($result));
        return [$maxs[0], max($result)];
    }
}
```