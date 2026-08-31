# PHP time beats 100% memory beats 80% working 21/11/2024

**Author:** kimduong322
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-array-end/solutions/6066809/](https://leetcode.com/problems/minimum-array-end/solutions/6066809/)

---

```
class Solution {

    /**
     * @param Integer $n
     * @param Integer $x
     * @return Integer
     */
    function minEnd($n, $x) {
        $n--;
        $res = $x;
        $i = 0;
        while ($n>0) {
            
            while ((($x >> $i) & 1) === 1) $i++;
            if ($n & 1) $res |= (1 << $i);
            $i++; $n >>= 1;
        }
        return $res;
    }
}

```