# PHP Solution - Sliding window

**Author:** find-ahmed-marzouk
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-repeating-character-replacement/solutions/2965274/](https://leetcode.com/problems/longest-repeating-character-replacement/solutions/2965274/)

---

# PHP Solution - Sliding window
<!-- Describe your first thoughts on how to solve this problem. -->

# sliding window
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String $s
     * @param Integer $k
     * @return Integer
     */
    function characterReplacement($s, $k) {
        $characersCount = [];
        $longestSubstring = 0;
        $left  = 0;
        $right = 0;

        while($right < strlen($s)){
            if($characersCount[ $s[$right] ]) $characersCount[ $s[$right] ]++;
            else $characersCount[ $s[$right] ] = 1 ;

            if($right - $left + 1 - max(array_values($characersCount)) <= $k)
                $longestSubstring = $currentWindowLength;
            else{
                $characersCount[ $s[$left] ]--;
                $left++; 
            }

            $longestSubstring = max($longestSubstring, $right - $left + 1);

            $right++;
        }

        return $longestSubstring;
    }
}
```