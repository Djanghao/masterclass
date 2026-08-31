# Simple Solution by  || Beat 99%

**Author:** Abdullo_
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-changing-keys/solutions/5233930/](https://leetcode.com/problems/number-of-changing-keys/solutions/5233930/)

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

# Code Pythoin
```
class Solution:
    def countKeyChanges(self, s: str) -> int:
        c = 0
        j = 1
        count = 0
        st = s.lower()
        while j < len(s):
            if st[c] != st[j]:
                count += 1
            c += 1
            j += 1
        return count
        
```

# Code Php
```
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function countKeyChanges($s) {
        $l = strlen($s);
        $ss = strtolower($s);
        $n = 1;
        $m = 0;
        $ans = 0;
        while ($n < $l) {
            if ($ss[$m] != $ss[$n]) {
                $ans ++;
            }
            $n ++;
            $m ++;
        }
        return $ans;

    }
}
        
```