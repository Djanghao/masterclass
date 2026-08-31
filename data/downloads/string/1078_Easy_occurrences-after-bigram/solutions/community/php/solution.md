# Solution Occurrences After Bigram

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/occurrences-after-bigram/solutions/4881539/](https://leetcode.com/problems/occurrences-after-bigram/solutions/4881539/)

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
     * @param String $text
     * @param String $first
     * @param String $second
     * @return String[]
     */
    function findOcurrences($text, $first, $second) {
        $result = [];
        $words = explode(" ", $text);
        $n = count($words);
        
        for ($i = 0; $i < $n - 2; $i++) {
            if ($words[$i] == $first && $words[$i + 1] == $second) {
                $result[] = $words[$i + 2];
            }
        }
        
        return $result;
    }
}
```