# PHP solution

**Author:** mamyta
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/5088893/](https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/5088893/)

---

# Code
```
class Solution {
    function subsequenceSumOr($nums) {
        $a = 0;
        $sum = 0;
        for($i=0;$i<count($nums);$i++){
            $sum += $nums[$i];
            $a = $a | $nums[$i];
            $a = $a | $sum;
        }
        return $a;
    }
}
```