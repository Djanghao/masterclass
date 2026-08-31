# Solution Distinct Subsequences II

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-subsequences-ii/solutions/4829622/](https://leetcode.com/problems/distinct-subsequences-ii/solutions/4829622/)

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
     * @param String $s
     * @return Integer
     */
    function distinctSubseqII($s) {
        $mod = 1000000007;
        $n = strlen($s);
        $record4DeDup = array_fill(0, 26, 0);
        $curRes = 1;
        
        for ($i = 0; $i < $n; $i++) {
            $addCount = $curRes;
            $curRes = (($curRes + $addCount) % $mod - $record4DeDup[ord($s[$i]) - ord('a')] % $mod + $mod) % $mod;
            $record4DeDup[ord($s[$i]) - ord('a')] = $addCount;
        }
        
        return ($curRes - 1 + $mod) % $mod;
    }
}

```