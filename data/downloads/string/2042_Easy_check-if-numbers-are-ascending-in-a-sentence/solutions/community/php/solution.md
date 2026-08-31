# Runtime 4ms, Memory 19.38MB

**Author:** Erkinbek
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/4762214/](https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/4762214/)

---

# Code
```
class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function areNumbersAscending(String $s): bool
    {
        $prev = 0;
        $num = 0;
        $len = strlen($s);
        for ($i = 0; $i < $len; $i++) {
            if (ctype_digit($s[$i])) {
                $num = $num * 10 + intval($s[$i]);
            } elseif ($num > 0) {
                if ($num <= $prev) {
                    return false;
                }
                $prev = $num;
                $num = 0;
            }
        }
        // Check if the last number encountered is in ascending order
        return $num == 0 || $num > $prev;
    }
}

```