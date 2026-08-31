# O(1) space solution for PHP

**Author:** wolfvit
**Votes:** 0
**Link:** [https://leetcode.com/problems/circular-sentence/solutions/5998586/](https://leetcode.com/problems/circular-sentence/solutions/5998586/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```php []
class Solution {

    /**
     * @param String $sentence
     * @return Boolean
     */
    function isCircularSentence($sentence) {
        if ($sentence[0] !== $sentence[strlen($sentence) - 1])
            return false;
        while ($spPos = strpos($sentence, ' ', $spPos + 1)) {
            if ($sentence[$spPos - 1] !== $sentence[$spPos + 1])
                return false;
        }
        return true;
    }
}
```