# Runtime: 14 ms / Memory Usage: 19.2 MB

**Author:** ordinary9843
**Votes:** 2
**Link:** [https://leetcode.com/problems/to-lower-case/solutions/2826071/](https://leetcode.com/problems/to-lower-case/solutions/2826071/)

---

Runtime: 14 ms, faster than 44.44% of PHP online submissions for To Lower Case.
Memory Usage: 19.2 MB, less than 72.22% of PHP online submissions for To Lower Case.

```
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function toLowerCase($s) {
        for ($i = 0; $i < strlen($s); $i++) {
            $ord = ord($s[$i]);
            if ($ord >= 65 && $ord <= 90) {
                $ord += 32;
                $s[$i] = chr($ord);
            }
        }
        
        return $s;
    }
}
```