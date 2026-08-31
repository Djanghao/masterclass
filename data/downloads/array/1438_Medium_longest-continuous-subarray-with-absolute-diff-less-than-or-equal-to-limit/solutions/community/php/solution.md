# Neznaiu kak, no eto rabotaet :)

**Author:** deniadvor
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/solutions/5358929/](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/solutions/5358929/)

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
     * @param Integer $limit
     * @return Integer
     */
    function isLess($nums, $first, $last, $limit, &$err) {
	
        for($i = $first; $i < $last; $i++) {
            if(abs($nums[$i] - $nums[$last]) > $limit) {
                $err = $i;
                return false;
            }
        }
        return true;
    }

    function longestSubarray($nums, $limit) {
        $max = 1;
        
        $j = 1;
        $err = 0;
        for($i = 0; $i < count($nums); $i++) {
            for(; $j < count($nums); $j++) {
                if($nums[$j - 1] === $nums[$j]
                    || $this->isLess($nums, $i, $j, $limit, $err)) {
                    $max = max($max, $j - $i + 1);
                }
                else {
                    $i = $err;
                    break;
                }
            }
        }
        return $max;
    }
}
```