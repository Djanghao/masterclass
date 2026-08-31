# Solution Longest Chunked Palindrome Decomposition

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/4890088/](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/4890088/)

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
     * @return Integer
     */
    function longestDecomposition($text) {
        $n = strlen($text);
        $result = 0;
        $prefix = "";
        $suffix = "";
        
        for ($i = 0; $i < $n; $i++) {
            $prefix .= $text[$i];
            $suffix = $text[$n - $i - 1] . $suffix;
            
            if ($prefix == $suffix) {
                $result++;
                $prefix = "";
                $suffix = "";
            }
        }
        
        return $result;
    }
}

```