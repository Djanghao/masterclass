# Easy solution

**Author:** alirezasalehizadeh
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/5831452/](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/5831452/)

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
     * @param String[] $words
     * @param Integer $left
     * @param Integer $right
     * @return Integer
     */
    function vowelStrings($words, $left, $right) {
        $vowelChars = ['a', 'e', 'i', 'o', 'u'];

        $c = 0;

        for ($i = $left; $i <= $right; $i++) {
            if (in_array($words[$i][0], $vowelChars) && in_array($words[$i][-1], $vowelChars)) {
                $c++;
            }
        }

        return $c;
    }
}
```