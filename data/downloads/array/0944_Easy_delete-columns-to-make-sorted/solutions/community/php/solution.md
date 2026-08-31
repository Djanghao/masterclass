# Solution Delete Columns to Make Sorted

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/4829674/](https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/4829674/)

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
     * @param String[] $strs
     * @return Integer
     */
    function minDeletionSize($strs) {
        $n = count($strs);
        $m = strlen($strs[0]);
        $count = 0;
        
        for ($j = 0; $j < $m; $j++) {
            for ($i = 0; $i < $n - 1; $i++) {
                if ($strs[$i][$j] > $strs[$i + 1][$j]) {
                    $count++;
                    break;
                }
            }
        }
        
        return $count;
    }
}

```