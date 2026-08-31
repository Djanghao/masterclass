# PHP solution

**Author:** punkundead
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/1428884/](https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/1428884/)

---

```
class Solution
{

    /**
     * @param String[] $strs
     *
     * @return Integer
     */
    function findLUSlength($strs)
    {
        $counts = array_count_values($strs);
        $strs = array_unique($strs);
        usort($strs, function($a, $b) {
            return strlen($b) - strlen($a);
        });
        for ($i = 0; $i < count($strs); $i++) {
            if ($counts[$strs[$i]] > 1) {
                continue;
            }
            for ($j = 0; $j < $i; $j++) {
                if ($this->isSubs($strs[$i], $strs[$j])) {
                    continue 2;
                }
            }

            return strlen($strs[$i]);
        }

        return -1;
    }

    function isSubs($n, $h)
    {
        $strlenN = strlen($n);
        $strlenH = strlen($h);
        if ($strlenN === $strlenH) {
            return false;
        }
        $i = $j = 0;
        while ($i < $strlenN && $j < $strlenH) {
            if ($n[$i] === $h[$j]) {
                $i++;
            }
            $j++;
        }

        return $i === $strlenN;
    }
}
```