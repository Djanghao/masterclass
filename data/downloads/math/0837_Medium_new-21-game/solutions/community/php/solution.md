# PHP Dynamic Programming

**Author:** BuggyAjax
**Votes:** 0
**Link:** [https://leetcode.com/problems/new-21-game/solutions/3562994/](https://leetcode.com/problems/new-21-game/solutions/3562994/)

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
     * @param Integer $n
     * @param Integer $k
     * @param Integer $maxPts
     * @return Float
     */
    function new21Game($n, $k, $maxPts) {
        $arr[0] = 1;
        $score = $k > 0 ? 1 : 0;
        for ($i = 1; $i <= $n; $i++) {
            $arr[$i] = $score/$maxPts;
            if ($i < $k) {
                $score += $arr[$i];
            }
            if ($i-$maxPts >= 0 && $i-$maxPts < $k) {
                $score -= $arr[$i-$maxPts];
            }
        }
        $ans = 0;
        for ($idx = $k; $idx <= $n; $idx++) {
            $ans += $arr[$idx];
        }
        return $ans;
    }
}
```