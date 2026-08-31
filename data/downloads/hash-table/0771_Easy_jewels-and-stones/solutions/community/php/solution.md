# 4ms, 14.6 MB easy PHP solution

**Author:** loboda
**Votes:** 3
**Link:** [https://leetcode.com/problems/jewels-and-stones/solutions/451434/](https://leetcode.com/problems/jewels-and-stones/solutions/451434/)

---

```
class Solution {

    /**
     * @param String $J
     * @param String $S
     * @return Integer
     */
    function numJewelsInStones($J, $S) {
        $result = 0;
        for ($i = 0; $i < strlen ($J); $i++) {
            $result += substr_count ($S, $J[$i]);
        }
        return $result;
    }
}
```