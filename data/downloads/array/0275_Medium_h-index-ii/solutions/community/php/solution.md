# Solution H-Index II

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/h-index-ii/solutions/4697487/](https://leetcode.com/problems/h-index-ii/solutions/4697487/)

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
     * @param Integer[] $citations
     * @return Integer
     */
    function hIndex($citations) {
        $n = count($citations);
        $left = 0;
        $right = $n - 1;
        
        while ($left <= $right) {
            $mid = $left + intval(($right - $left) / 2);
            $papers = $n - $mid;
            
            if ($citations[$mid] == $papers) {
                return $papers;
            } elseif ($citations[$mid] < $papers) {
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }
        
        return $n - $left;
    }
}

```