# Obviously, simplest and optimal solution for valid parentheses strings

**Author:** pozitronik
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/5698307/](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/5698307/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```php []
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function maxDepth($s) {
        $strlen = strlen($s);
        $currentDepth = 0;
        $maxDepth = 0;
        for ($index = 0; $index < $strlen; $index++) {
            if ($s[$index] === "(") {
                $currentDepth++;
            }
            if ($s[$index] === ")") {
                $currentDepth--;
            }
            if ($maxDepth < $currentDepth) {
                $maxDepth = $currentDepth;
            }
        }
        return $maxDepth;
    }
}
```