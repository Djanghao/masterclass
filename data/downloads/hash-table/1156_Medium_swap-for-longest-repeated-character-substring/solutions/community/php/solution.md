# Solution Swap For Longest Repeated Character Substring

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/swap-for-longest-repeated-character-substring/solutions/4890684/](https://leetcode.com/problems/swap-for-longest-repeated-character-substring/solutions/4890684/)

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
    function maxRepOpt1($text) {
        $textc = str_split($text);
        $length = array_fill(0, count($textc), 0);
        $countGroup = [];
        $length[0] = 1;
        $start = 0;
        $max = 1;
        
        for ($i = 1; $i < count($textc); $i++) {
            if ($textc[$i] == $textc[$start]) {
                $length[$i] = $length[$i - 1] + 1;
            } else {
                if (!isset($countGroup[$textc[$start]])) {
                    $countGroup[$textc[$start]] = 0;
                }
                $countGroup[$textc[$start]]++;
                $length[$i] = 1;
                $start = $i;
            }
        }
        
        if (!isset($countGroup[$textc[count($textc) - 1]])) {
            $countGroup[$textc[count($textc) - 1]] = 0;
        }
        $countGroup[$textc[count($textc) - 1]]++;
        $start = 0;

        for ($i = 0; $i < count($textc); $i++) {
            $start = $i - $length[$i] + 1;
            $max = max($max, $length[$i]);
            if ($start - 2 >= 0 && $textc[$i] == $textc[$start - 2] && isset($countGroup[$textc[$i]]) && $countGroup[$textc[$i]] > 2) {
                $max = max($max, $length[$i] + $length[$start - 2] + 1);
            } else if ($start - 2 >= 0 && $textc[$i] == $textc[$start - 2]) {
                $max = max($max, $length[$i] + $length[$start - 2]);
            } else if (isset($countGroup[$textc[$i]]) && $countGroup[$textc[$i]] >= 2) {
                $max = max($max, $length[$i] + 1);
            }
        }
        
        return $max;
    }
}

```