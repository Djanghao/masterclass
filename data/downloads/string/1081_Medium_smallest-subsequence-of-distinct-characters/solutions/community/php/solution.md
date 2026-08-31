# Solution Smallest Subsequence of Distinct Characters

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/4875233/](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/4875233/)

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

    function smallestSubsequence($s) {
        $lastIndex = array_fill(0, 26, -1);
        $seen = array_fill(0, 26, false);
        $stack = [];

        for ($i = 0; $i < strlen($s); $i++) {
            $lastIndex[ord($s[$i]) - ord('a')] = $i;
        }

        for ($i = 0; $i < strlen($s); $i++) {
            $ch = $s[$i];
            if ($seen[ord($ch) - ord('a')]) continue;
            while (!empty($stack) && $ch < end($stack) && $i < $lastIndex[ord(end($stack)) - ord('a')]) {
                $seen[ord(array_pop($stack)) - ord('a')] = false;
            }
            $stack[] = $ch;
            $seen[ord($ch) - ord('a')] = true;
        }

        $result = "";
        foreach ($stack as $char) {
            $result .= $char;
        }
        
        return $result;
    }
}
```