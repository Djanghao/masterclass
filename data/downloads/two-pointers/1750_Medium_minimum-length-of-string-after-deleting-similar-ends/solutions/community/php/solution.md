# 1750. Minimum Length of String After Deleting Similar Ends - PHP

**Author:** Jinzo_
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/solutions/4827047/](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/solutions/4827047/)

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
    function minimumLength($s) {
        $length = strlen($s);
        $i = 0;
        $j = $length - 1;
        $removed = false;
    
    while ($i < $j) {
        // Find prefix
        while ($i < $j && $s[$i] == $s[$i + 1]) {
            $i++;
        }
        // Find suffix
        while ($i < $j && $s[$j] == $s[$j - 1]) {
            $j--;
        }
        // If prefix and suffix match, remove them
        if ($s[$i] == $s[$j]) {
            // Remove prefix and suffix
            $s = substr($s, $i + 1, $j - $i - 1);
            $i = 0;
            $j = strlen($s) - 1;
            $removed = true;
        } else {
            // If prefix and suffix don't match, break the loop
            break;
        }
    }
    // If characters were removed, return the remaining length of string
    if ($removed) {
        return strlen($s);
    } else {
        // If no characters were removed, return the original length of string
        return $length;
    }
    }
}
```