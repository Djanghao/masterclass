# PHP

**Author:** stuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/1962461/](https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/1962461/)

---

![image](./images/0.png)
```
class Solution
{

  /**
   * @param String $word
   * @return Integer
   */
    public function numDifferentIntegers($word)
    {
        $w_parts = str_split($word);

        $nums = [];
        $i = 0;

        foreach ($w_parts as $item) {
            $ascii_val = ord($item);
            if ($ascii_val >= 48 && $ascii_val < 58) {
                if (isset($nums[$i])) {
                    $nums[$i] .= $item;
                } else {
                    $nums[$i] = $item;
                }
                continue;
            }
            $i++;
        }
        foreach ($nums as &$num) {
            $num = ltrim($num, 0);
        }
        return count(array_flip($nums));
    }
}
