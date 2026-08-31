# Three line solution on PHP Beats 100.00% O(n) ✌

**Author:** kovolev
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/4133732/](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/4133732/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function minimumDifference($nums, $k) {
        sort($nums);
        
        $ans = 10**5;
        for($l = 0, $r = $k - 1; $r < count($nums); $l++, $r++)
            $ans = min([$ans, $nums[$r] - $nums[$l]]);
        
        return $ans;
    }
}
```