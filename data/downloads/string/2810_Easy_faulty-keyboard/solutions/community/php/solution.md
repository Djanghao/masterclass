# Runtime 9ms Beats 85.71%

**Author:** velvm03
**Votes:** 0
**Link:** [https://leetcode.com/problems/faulty-keyboard/solutions/4434654/](https://leetcode.com/problems/faulty-keyboard/solutions/4434654/)

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
     * @return String
     */
    function finalString($s) {
        $str = '';
    foreach(str_split($s) as $k => $ch)
    {
        if($ch == 'i') 
        {
            $str = strrev($str);
            continue;
        }
        $str .= $ch;
    }
    return $str;
    }
}
```