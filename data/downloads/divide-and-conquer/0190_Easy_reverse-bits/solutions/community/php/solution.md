# php beat 88% simple solution

**Author:** hjoru
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-bits/solutions/1675970/](https://leetcode.com/problems/reverse-bits/solutions/1675970/)

---

```
class Solution {
    /**
     * @param Integer $n
     * @return Integer
     */
    function reverseBits($n) {
        $result = '';
        for ($i = 0; $i < 32; $i++) {
            $result = $result . strval($n & 1);
            $n = $n >> 1;
        }
        return bindec($result);
    }
}