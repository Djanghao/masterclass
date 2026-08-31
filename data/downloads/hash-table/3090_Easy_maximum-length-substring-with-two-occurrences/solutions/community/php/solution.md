# PHP. T-O(n),M-O(27).

**Author:** user0593j
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/4942533/](https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/4942533/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Sliding window
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(27)
# Code
```
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function maximumLengthSubstring($s) {
        $res = 0;
        $d = [
            "a" => 0,
            "b" => 0,
            "c" => 0,
            "d" => 0,
            "e" => 0,
            "f" => 0,
            "g" => 0,
            "h" => 0,
            "i" => 0,
            "j" => 0,
            "k" => 0,
            "l" => 0,
            "m" => 0,
            "n" => 0,
            "o" => 0,
            "p" => 0,
            "q" => 0,
            "r" => 0,
            "s" => 0,
            "t" => 0,
            "u" => 0,
            "v" => 0,
            "w" => 0,
            "x" => 0,
            "y" => 0,
            "z" => 0,
        ];
        for($r=0,$l=0;$r<strlen($s) && $l<=$r;$r++){
            $d[$s[$r]]++;
            $res = max($res,$r-$l);
            while($d[$s[$r]]>2){
                $d[$s[$l]]--;
                $l++;
            }
        }
        return max($res,$r-$l);
    }
}
```