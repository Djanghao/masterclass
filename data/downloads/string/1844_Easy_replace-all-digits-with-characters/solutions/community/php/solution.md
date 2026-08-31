# php easy solution

**Author:** HUkx80QdCK
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-all-digits-with-characters/solutions/5197415/](https://leetcode.com/problems/replace-all-digits-with-characters/solutions/5197415/)

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
    function replaceDigits($s) {
        $l = "";
        $n = 0;
        for($i=0; $i<strlen($s); $i++) {
            if(is_numeric($s[$i])) {
                if(!empty($l)) {
                    $s[$i] = chr(ord(strtolower($l))+intval($s[$i]));
                    $l = "";
                } else {
                    $s[$i] = "a";
                }
            } else {
                $l = $s[$i];
            }
        }
        return $s;
    }
}
```