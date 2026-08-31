# PHP.T-O(n),M-O(n).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4889418/](https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4889418/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function isSubstringPresent($s) {
        $d = [];
        for($i=0;$i<strlen($s)-1;$i++){
            if($s[$i]===$s[$i+1] || isset($d[$s[$i].$s[$i+1]])) return true;
            $d[$s[$i+1].$s[$i]] = true;
        }
        return false;
    }
}
```