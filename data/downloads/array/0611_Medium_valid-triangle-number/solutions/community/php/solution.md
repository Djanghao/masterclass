# Solution Valid Triangle Number

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-triangle-number/solutions/4757321/](https://leetcode.com/problems/valid-triangle-number/solutions/4757321/)

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
     * @return Integer
     */
    function triangleNumber($nums) {
        sort($nums);
        $ans = 0;
        $n = count($nums);
        
        for ($i = $n - 1; $i >= 2; $i--) {
            $nu = $nums[$i];
            $j = $i - 1;
            $k = 0;
            while ($j > $k) {
                if ($nums[$j] + $nums[$k] > $nu) {
                    $ans += $j - $k;
                    $j -= 1;
                } else {
                    $k += 1;
                }
            }
        }
        
        return $ans;
    }
}

```