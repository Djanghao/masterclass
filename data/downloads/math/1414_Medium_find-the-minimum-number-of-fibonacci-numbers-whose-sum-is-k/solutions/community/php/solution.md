# PHP O(logk)

**Author:** skulditsky
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/839649/](https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/839649/)

---

```
class Solution {
    
    private $numbers = [
        1, 1, 2, 3, 5, 8, 13
    ];

    /**
     * @param Integer $k
     * @return Integer
     */
    function findMinFibonacciNumbers($k) {
        while (max($this->numbers) < $k) {
            $next = $this->numbers[count($this->numbers)-1] + $this->numbers[count($this->numbers)-2];
            $this->numbers[] = $next;
        }
        
        $result = 0;
        while ($k != 0) {
            $k -= $this->findNextLessThanK($k);
            $result++;
        }
        return $result;
    }
    
    function findNextLessThanK($k) {
        for ($i = count($this->numbers)-1; $i >= 0; $i--) {
            if ($this->numbers[$i] <= $k) {
                return $this->numbers[$i];
            }
        }
    }
}
```