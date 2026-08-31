# Fastest PHP solution (3 ms, beats 88.89%; 18.9 mb, beats 100%)

**Author:** jampire
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-letter-to-appear-twice/solutions/3816405/](https://leetcode.com/problems/first-letter-to-appear-twice/solutions/3816405/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function repeatedCharacter($s) {
        $map = [];
        foreach (str_split($s) as $ch) {
            if (isset($map[$ch])) {
                return $ch;
            }
            $map[$ch] = 1;
        }
        
        return '';
    }
}
```