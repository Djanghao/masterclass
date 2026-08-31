# Solution Maximum Length of a Concatenated String with Unique Characters

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solutions/4904520/](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solutions/4904520/)

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
     * @param String[] $arr
     * @return Integer
     */
    function maxLength($arr) {
        return $this->backtrack($arr, '', 0);
    }
    
    function backtrack($arr, $current, $index) {
        $max_length = strlen($current);
        for ($i = $index; $i < count($arr); $i++) {
            $new_string = $current . $arr[$i];
            if (strlen($new_string) == strlen(count_chars($new_string, 3))) { 
                $max_length = max($max_length, $this->backtrack($arr, $new_string, $i + 1));
            }
        }
        return $max_length;
    }
}

```