# Solution Palindrome Partitioning II

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-ii/solutions/4689036/](https://leetcode.com/problems/palindrome-partitioning-ii/solutions/4689036/)

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
    function minCut($s) {
        $n = strlen($s);
        $dp = array_fill(0, $n, array_fill(0, $n, false));
        $cuts = array_fill(0, $n, 0);
        
        for ($j = 0; $j < $n; $j++) {
            $cuts[$j] = $j;
            for ($i = 0; $i <= $j; $i++) {
                if ($s[$i] == $s[$j] && ($j - $i <= 1 || $dp[$i + 1][$j - 1])) {
                    $dp[$i][$j] = true;
                    if ($i > 0) {
                        $cuts[$j] = min($cuts[$j], $cuts[$i - 1] + 1);
                    } else {
                        $cuts[$j] = 0;
                    }
                }
            }
        }
        
        return $cuts[$n - 1];
    }
}

```