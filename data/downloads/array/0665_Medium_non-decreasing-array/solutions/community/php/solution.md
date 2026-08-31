# Solution Non-decreasing Array

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/non-decreasing-array/solutions/4772075/](https://leetcode.com/problems/non-decreasing-array/solutions/4772075/)

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
     * @return Boolean
     */
    function checkPossibility($nums) {
        $count = 0;
        $n = count($nums);
        
        for ($i = 0; $i < $n - 1; $i++) {
            if ($nums[$i] > $nums[$i + 1]) {
                $count++;
                
                if ($count > 1) {
                    return false;
                }
                
                if ($i > 0 && $nums[$i + 1] < $nums[$i - 1]) {
                    $nums[$i + 1] = $nums[$i];
                }
            }
        }
        
        return true;
    }
}

```