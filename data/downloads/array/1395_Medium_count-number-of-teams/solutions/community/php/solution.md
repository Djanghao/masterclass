# PHP O(N^2)

**Author:** acctionjoe
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-number-of-teams/solutions/3209384/](https://leetcode.com/problems/count-number-of-teams/solutions/3209384/)

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
     * @param Integer[] $rating
     * @return Integer
     */
    function numTeams($rating) {
        $ans = 0;
        for($j = 1; $j < count($rating) - 1; $j++){
            $l_big = $l_small = $r_big = $r_small = 0;
            for($i = 0; $i < $j; $i++){
                if($rating[$i] < $rating[$j]) $l_small++;
                else $l_big++;
            }
            for($k = $j + 1; $k < count($rating); $k++){
                if($rating[$j] < $rating[$k]) $r_big++;
                else $r_small++;
            }
            $ans += $l_big * $r_small + $l_small * $r_big;
        }
        return $ans;
    }
}
```