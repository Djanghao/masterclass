# Solution Check If String Is Transformable With Substring Sort Operations

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/solutions/5174157/](https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/solutions/5174157/)

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
    public function isTransformable($s, $t) {
        $n = strlen($s);
        $pos = array_fill(0, 10, $n);
        
        for ($i = 0; $i < $n; $i++) {
            if ($pos[ord($s[$i]) - ord('0')] == $n) {
                $pos[ord($s[$i]) - ord('0')] = $i;
            }
        }
        
        for ($i = 0; $i < $n; $i++) {
            $num = ord($t[$i]) - ord('0');
            if ($pos[$num] == $n) {
                return false;
            }
            for ($j = 0; $j < $num; $j++) {
                if ($pos[$j] < $pos[$num]) {
                    return false;
                }
            }
            $pos[$num]++;
            while ($pos[$num] < $n && ord($s[$pos[$num]]) - ord('0') != $num) {
                $pos[$num]++;
            }
        }
        
        return true;
    }
}

```