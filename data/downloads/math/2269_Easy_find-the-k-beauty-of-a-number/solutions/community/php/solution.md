# My php solution(sliding window);

**Author:** akolobnevstudio
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/3369939/](https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/3369939/)

---

```
class Solution {

    function divisorSubstrings($num, $k) {
        $numNum = $num;
        $num = str_split((string)$num);
        $r = $l = $Beauty = 0;
        $str = [];
        while($l <= count($num) - $k)
        {
            while($r - $l + 1 <= $k)
            {
                $str[] = $num[$r];
                $r++;
            }
            $divisor  = (int)implode('',$str);
            if($divisor !== 0 && $numNum % $divisor === 0)  $Beauty+=1;
            unset($str[$l]);
            $l++;
        }
        return $Beauty;
    }
}
```