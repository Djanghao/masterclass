# php solution

**Author:** punkundead
**Votes:** 1
**Link:** [https://leetcode.com/problems/orderly-queue/solutions/1446934/](https://leetcode.com/problems/orderly-queue/solutions/1446934/)

---

```
class Solution
{

    /**
     * @param String  $s
     * @param Integer $k
     *
     * @return String
     */
    function orderlyQueue($s, $k)
    {
        if ($k > 1) {
            $s = str_split($s);
            sort($s);

            return join($s);
        }
        
        $strlen = strlen($s);
        for ($min = $s[0], $i = 1; $i < $strlen; $i++) {
            $min = min($min, $s[$i]);
        }

        for ($curLen = 0, $i = $strlen - 1; $i >= 0 && $min === $s[$i]; $i--, $curLen++) {
        }

        if ($curLen === $strlen) {
            return $s;
        }
        if ($curLen) {
            for ($i = 0; $min === $s[$i]; $i++, $curLen++) {
            }
            $ans = str_repeat($min, $curLen).substr($s, $i, $strlen - $curLen);
            $maxLen = $curLen;
        } else {
            $ans = $s;
            $maxLen = 0;
        }

        for ($curLen = $i = 0; $i < $strlen; $i++) {
            if ($min === $s[$i]) {
                $curLen++;
            } else {
                if ($curLen > $maxLen) {
                    $maxLen = $curLen;
                    $ans = str_repeat($min, $curLen).substr($s, $i).substr($s, 0, $i - $curLen);
                } elseif ($curLen === $maxLen) {
                    $ans = min($ans, str_repeat($min, $curLen).substr($s, $i).substr($s, 0, $i - $curLen));
                }

                $curLen = 0;
            }
        }

        return $ans;
    }
}
```