# Solution Longest Duplicate Substring

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-duplicate-substring/solutions/4881259/](https://leetcode.com/problems/longest-duplicate-substring/solutions/4881259/)

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
     * @param String $s
     * @return String
     */
    function longestDupSubstring($s) {
        $max_len = 0;
        $str_start = 0;
        
        // case of repeated characters
        $str = str_split($s);
        if (count(array_unique($str)) === 1) {
            return substr($s, 1);
        }
        
        $start = 0;
        for ($end = 1; $end < strlen($s); $end++) {
            if ($max_len >= ($end - $start)) {
                break;
            }
            
            $str_temp = substr($s, $start, $end - $start);
            
            if (strpos(substr($s, $start + 1), $str_temp) !== false && strlen($str_temp) > $max_len) {
                $str_start = $start;
                $max_len = strlen($str_temp);
            } else {
                $start += 1;
            }
        }
        
        return substr($s, $str_start, $max_len);
    }
}

```