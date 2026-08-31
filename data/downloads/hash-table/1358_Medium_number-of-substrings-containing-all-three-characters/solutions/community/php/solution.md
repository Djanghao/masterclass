# Simple PHP solution to beat 100% user in Runtime & Memory

**Author:** nishk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/5495103/](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/5495103/)

---

# Code
```
class Solution {
    function numberOfSubstrings($s) {
        $dict_cnt = ['a' => 0, 'b' => 0, 'c' => 0];
        $n = strlen($s);
        $left = 0;
        $res = 0;

        for ($right = 0; $right < strlen($s); $right++) {
            $dict_cnt[$s[$right]]++;
            while ($dict_cnt['a'] && $dict_cnt['b'] && $dict_cnt['c']) {
                $res += $n - $right;
                $dict_cnt[$s[$left]]--;
                $left++;
            }
        }

        return $res;
    }
}
```