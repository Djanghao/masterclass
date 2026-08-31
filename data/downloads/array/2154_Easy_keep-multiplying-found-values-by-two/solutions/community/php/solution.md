# Keep Multiplying Found Values by Two (100 | 100)

**Author:** LuisFelipe1
**Votes:** 0
**Link:** [https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/5044515/](https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/5044515/)

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
     * @param Integer[] $nums
     * @param Integer $original
     * @return Integer
     */
    function findFinalValue($nums, $original) {
        
        while(in_array($original, $nums)){
            $original *= 2;        
        }

        return $original;

    }
}
```