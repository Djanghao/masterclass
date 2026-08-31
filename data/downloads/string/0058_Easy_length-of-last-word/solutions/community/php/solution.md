# ✅ PHP 100% Faster. Easy and Simple Solution.

**Author:** mahmoudai1
**Votes:** 6
**Link:** [https://leetcode.com/problems/length-of-last-word/solutions/2385646/](https://leetcode.com/problems/length-of-last-word/solutions/2385646/)

---

```
class Solution {
    function lengthOfLastWord($s) {
        $count = 0;
        for($i = strlen($s) - 1; $i >= 0; $i--){
            if($s[$i] != " "){
                $count++;
            } else {
                if($count > 0) break;
            }
        }
        return $count;
    }
}
```