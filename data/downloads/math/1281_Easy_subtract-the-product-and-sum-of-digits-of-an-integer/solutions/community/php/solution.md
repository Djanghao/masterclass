# Extremely easy PHP solution, 4ms, 15MB

**Author:** loboda
**Votes:** 2
**Link:** [https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/453322/](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/453322/)

---

```
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function subtractProductAndSum($n) {
        $arr = str_split ($n);
        return array_product ($arr) - array_sum ($arr);
    }
}
```