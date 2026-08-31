# Solution Count Unique Characters of All Substrings of a Given String

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/solutions/4794871/](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/solutions/4794871/)

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
    function uniqueLetterString($s) {
        $ch = str_split($s);
        $n = count($ch);
        if ($n == 0) return 0;
        $prev = array_fill(0, 26, -1);
        $dp = array_fill(0, $n, array_fill(0, 3, 0));
        $ans = 1;
        $prev[ord($ch[0]) - ord('A')] = 0;
        $dp[0][0] = 1;
        $dp[0][1] = 0;
        $dp[0][2] = 1;
        
        for ($i = 1; $i < $n; ++$i) {
            if ($prev[ord($ch[$i]) - ord('A')] == -1) {
                $dp[$i][0] = $i + 1;
                $dp[$i][2] = ($i + 1) + $dp[$i - 1][2];
            } else {
                $dp[$i][0] = $i - $prev[ord($ch[$i]) - ord('A')];
                $dp[$i][1] = $dp[$prev[ord($ch[$i]) - ord('A')]][0] + $dp[$prev[ord($ch[$i]) - ord('A')]][1];
                $dp[$i][2] = $dp[$i - 1][2] + $i + 1 - 2 * $dp[$prev[ord($ch[$i]) - ord('A')]][0] - $dp[$prev[ord($ch[$i]) - ord('A')]][1];
            }
            $prev[ord($ch[$i]) - ord('A')] = $i;
            $ans += $dp[$i][2];
        }
        
        return $ans;
    }
}

```