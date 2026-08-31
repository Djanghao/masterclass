# Recursive solution with Bitmask DP memoization

**Author:** DemetriSam
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-permutations/solutions/4658634/](https://leetcode.com/problems/special-permutations/solutions/4658634/)

---

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function specialPerm($nums) {
        $len = count($nums);
        $dp = [];

        $dfs = function($visited = 0, $recent = null) use ($len, $nums, &$dfs, &$dp) {
            if(isset($dp[$visited][$recent])) return $dp[$visited][$recent];
            if($visited === ((1 << $len) - 1)) {
                $dp[$visited][$recent] = 1;
                return $dp[$visited][$recent];
            }

            $sum = 0;
            for($i = 0; $i < $len; $i++) {
                if(($visited >> $i) & 1) continue;
                if($visited === 0 || $nums[$i] % $nums[$recent] === 0 || $nums[$recent] % $nums[$i] === 0) {
                    $sum += $dfs($visited | (1 << $i), $i);
                }
            }
            $dp[$visited][$recent] = $sum % (10 ** 9 + 7);
            return $dp[$visited][$recent];
        };

        return $dfs();
    }
}
```