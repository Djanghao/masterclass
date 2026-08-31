# Solution Check If Word Is Valid After Substitutions

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/4856830/](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/4856830/)

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
     * @return Boolean
     */
    function isValid($s) {
        $stack = [];
        
        for ($i = 0; $i < strlen($s); $i++) {
            $char = $s[$i];
            
            if ($char == 'c') {
                if (end($stack) == 'b' && prev($stack) == 'a') {
                    array_pop($stack);
                    array_pop($stack);
                } else {
                    return false;
                }
            } else {
                array_push($stack, $char);
            }
        }
        
        return empty($stack);
    }
}

$solution = new Solution();
echo $solution->isValid("aabcbc");

```