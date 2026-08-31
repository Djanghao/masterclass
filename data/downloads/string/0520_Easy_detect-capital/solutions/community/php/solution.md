# Typical php code without using any functions.!!!!!!

**Author:** shallabh
**Votes:** 0
**Link:** [https://leetcode.com/problems/detect-capital/solutions/5919168/](https://leetcode.com/problems/detect-capital/solutions/5919168/)

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
     * @param String $word
     * @return Boolean
     */
    function detectCapitalUse($word) {
        $result = false;

        if (strtoupper($word) === $word) { 
        $result = true;
        } elseif (strtolower($word) === $word) { 
            $result = true;
        } elseif (strtoupper($word[0]) === $word[0] && strtolower($word[1]) === $word[1]) { 
            $result = true;
            for ($i = 1; $i < strlen($word); $i++) {
                if (strtoupper($word[$i]) === $word[$i]) {
                    $result = false;
                    break;
                }
            }
        }

    return $result;
    }
}

```