# PHP solution beats 100% time and space working 6/12/2024 (Using Hash)

**Author:** kimduong322
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/6121304/](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/6121304/)

---

# Code
```php []
class Solution {

    /**
     * @param Integer[] $banned
     * @param Integer $n
     * @param Integer $maxSum
     * @return Integer
     */
    function maxCount($banned, $n, $maxSum) {
        $t = $count = 0; 
        $b = [];
        for($j = 0; $j < count($banned); $j++) {
            $b[$banned[$j]] = $j;
        }
        for($i = 1; $i <= $n; $i++) {
            // if(!array_key_exists($i, $b) && ($t+$i < $maxSum)) {$t+=$i; $count += 1;}
            if(array_key_exists($i, $b)) continue;
            if($t+$i > $maxSum) return $count;
            $t += $i;
            $count++;
        }
        return $count;
    }
}
```