# 389. Find the Difference

**Author:** Mahir-Shahriyar
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-difference/solutions/6138455/](https://leetcode.com/problems/find-the-difference/solutions/6138455/)

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
```php []

class Solution {

    /**
     * @param String $s
     * @param String $t
     * @return String
     */
    function findTheDifference($s, $t) {
        // Initialize a variable to hold the XOR result
        $xor = 0;

        // XOR all characters in $s
        for ($i = 0; $i < strlen($s); $i++) {
            $xor ^= ord($s[$i]);
        }

        // XOR all characters in $t
        for ($i = 0; $i < strlen($t); $i++) {
            $xor ^= ord($t[$i]);
        }

        // The remaining value is the ASCII value of the extra character in $t
        return chr($xor);
    }
}



```