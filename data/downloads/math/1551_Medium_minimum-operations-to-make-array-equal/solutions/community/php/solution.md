# PHP

**Author:** akbarovsarvar492
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal/solutions/3659262/](https://leetcode.com/problems/minimum-operations-to-make-array-equal/solutions/3659262/)

---


```
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function minOperations($n) {
        $sum = 0;
        for($i = $n%2+1; $i < $n; $i = $i + 2){
            $sum+=$i;
        }
        return $sum;
    }
}
```