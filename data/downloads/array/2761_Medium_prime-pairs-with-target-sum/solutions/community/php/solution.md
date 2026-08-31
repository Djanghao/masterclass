# PHP Solution In 3154ms

**Author:** et282523
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/3723582/](https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/3723582/)

---

# Code
```
class Solution {
    /**
     * @param Integer $n
     * @return Integer[][]
     */
    public function findPrimePairs($n) {
        $primes = [2];
        $is_primes = array_pad([false, false, true], $n + 1, true);
        for ($i=4; $i<=$n; $i+=2) {
            $is_primes[$i] = false;
        }
        for ($i=3; $i<=$n; $i+=2) {
            if ($is_primes[$i]) {
                $primes[] = $i;
                for ($j=$i*$i; $j<=$n; $j+=$i) {
                    $is_primes[$j] = false;
                }
            }
        }        
        
        $output = [];
        foreach ($primes as $x) {
            $y = $n - $x;
            if ($x > $y) {
                break;
            }
            if ($is_primes[$y]) {
                $output[] = [$x, $y];
            }
        }
        return $output;
    }
}
```