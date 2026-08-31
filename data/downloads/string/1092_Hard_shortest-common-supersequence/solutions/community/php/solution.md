# Shortest Common Supersequence

**Author:** madi90
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-common-supersequence/solutions/5691657/](https://leetcode.com/problems/shortest-common-supersequence/solutions/5691657/)

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
```php []
class Solution {

    /**
     * @param String $str1
     * @param String $str2
     * @return String
     */
    function shortestCommonSupersequence($str1, $str2) {
        $length1 = strlen($str1);
        $length2 = strlen($str2);
        $dp = array_fill(0, $length1 + 1, array_fill(0, $length2 + 1, 0));
        $lcs = [];
        for ($i = 1; $i <= $length1; $i++) {
            for ($j = 1; $j <= $length2; $j++) {
                if ($str1[$i - 1] === $str2[$j - 1]) {
                    $dp[$i][$j] = $dp[$i - 1][$j - 1] + 1;
                } else {
                    $dp[$i][$j] = max($dp[$i - 1][$j], $dp[$i][$j - 1]);
                }
            }
        }
        // backtracking
        $i = $length1;
        $j = $length2;
        while ($i >= 1 && $j >= 1){
            if ($dp[$i][$j] === $dp[$i - 1][$j]) {
                // come from top
                $i--;
                continue;
            }
            if ($dp[$i][$j] === $dp[$i][$j - 1]) {
                // come from left
                $j--;
                continue;
            }
            $lcs[] = $str2[$j - 1];
            $i--;
            $j--;
        }
        $lcsStr = implode(array_reverse($lcs));
        if (empty($lcsStr)) {
            return $str1. $str2;
        }
        // calculate the supersequence
        $p1 = $p2 = 0;
        $result = '';
        for ($k = 0; $k < strlen($lcsStr); $k++) {
            $commonChar = $lcsStr[$k];
            while ($p1 < $length1 && $str1[$p1] !== $commonChar) {
                $result .= $str1[$p1];
                $p1++;
            }
            while ($p2 < $length2 && $str2[$p2] !== $commonChar) {
                $result .= $str2[$p2];
                $p2++;
            }
            $result .= $commonChar;
            $p1++;
            $p2++;
        }
        $result .= substr($str1, $p1). substr($str2, $p2);
        return $result;
    }
}
```