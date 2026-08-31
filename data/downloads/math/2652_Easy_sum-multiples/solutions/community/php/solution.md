# Functional Programming for the "win".

**Author:** Vincenzo-LP
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-multiples/solutions/4646125/](https://leetcode.com/problems/sum-multiples/solutions/4646125/)

---

Functional Programming for the "win".

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function sumOfMultiples($n) {
        return array_sum(array_filter(range(1, $n), fn($n) => $n % 3 === 0 || $n % 5 === 0 || $n % 7 === 0));
    }
}
```