# Simplest solution ever

**Author:** pozitronik
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/5702771/](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/5702771/)

---

# Intuition
It is literally easiest "medium" problem, I've ever solved.

# Complexity
- Time complexity:
$$O(n^2)$$ (worst case)

- Space complexity:
$$O(1)$$

# Code
```php []
class Solution {

    /**
     * @param String $s
     * @param String $part
     * @return String
     */
    function removeOccurrences($s, $part) {
        $partLen = strlen($part);
        while (false !== $pos = strpos($s, $part)) {
            $s = substr_replace($s, "", $pos, $partLen);
        }
        return $s;
    }
}
```