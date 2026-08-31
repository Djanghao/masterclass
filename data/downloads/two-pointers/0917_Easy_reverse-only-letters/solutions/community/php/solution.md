# Simple PHP solution beats 100% ;)

**Author:** karouSan
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-only-letters/solutions/5939242/](https://leetcode.com/problems/reverse-only-letters/solutions/5939242/)

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
     * @return String
     */
    function reverseOnlyLetters($s) {
        $characters = str_split($s);
        $letters = array_filter($characters, fn($character) => ctype_alpha($character));

        $result = [];
        foreach($characters as $character) {
            if (ctype_alpha($character)) {
                $result[] = array_pop($letters);
            } else {
                $result[] = $character;
            }
        }

        return implode('', $result);
    }
}
```