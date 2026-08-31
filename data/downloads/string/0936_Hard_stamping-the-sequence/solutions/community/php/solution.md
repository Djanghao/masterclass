# Solution Stamping The Sequence

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/stamping-the-sequence/solutions/4829585/](https://leetcode.com/problems/stamping-the-sequence/solutions/4829585/)

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
     * @param String $stamp
     * @param String $target
     * @return Integer[]
     */
    function movesToStamp($stamp, $target) {
        $tchar = str_split($target);
        $schar = str_split($stamp);
        $count = 0;
        $visited = array_fill(0, count($tchar), false);
        $res = [];
        
        while ($count != count($tchar)) {
            $isChange = false;
            for ($i = 0; $i <= count($tchar) - count($schar); $i++) {
                if (!$visited[$i] && $this->canReplace($tchar, $i, $schar)) {
                    $count = $this->replace($tchar, $i, count($schar), $count);
                    $visited[$i] = true;
                    $isChange = true;
                    $res[] = $i;
                    if ($count == count($tchar)) {
                        break;
                    }
                }
            }
            if (!$isChange) {
                return [];
            }
        }
        
        return array_reverse($res);
    }
    
    function canReplace($tchar, $pos, $schar) {
        for ($i = 0; $i < count($schar); $i++) {
            if ($tchar[$i + $pos] != '?' && $tchar[$i + $pos] != $schar[$i]) {
                return false;
            }
        }
        return true;
    }
    
    function replace(&$tchar, $pos, $len, $count) {
        for ($i = 0; $i < $len; $i++) {
            if ($tchar[$i + $pos] != '?') {
                $tchar[$i + $pos] = '?';
                $count++;
            }
        }
        return $count;
    }
}

```