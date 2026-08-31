# Solution Check Array Formation Through Concatenation

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/5214517/](https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/5214517/)

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
    public function canFormArray($arr, $pieces) {
        $mp = array();
        
        foreach ($arr as $i => $value) {
            $mp[$value] = $i;
        }
        
        $temp = -1;
        foreach ($pieces as $it) {
            foreach ($it as $pr) {
                if (isset($mp[$pr])) {
                    if ($temp == -1) {
                        $temp = $mp[$pr];
                    }
                    if ($temp++ != $mp[$pr]) return false;
                } else {
                    return false;
                }
            }
            $temp = -1;
        }
        return true;
    }
}

```