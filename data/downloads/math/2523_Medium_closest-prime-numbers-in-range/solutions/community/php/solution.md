# PHP | 10-25ms | beats 100%

**Author:** nor1999
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/3168361/](https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/3168361/)

---

# Code
```
class Solution {
    public function closestPrimes($left, $right) {
        $closestPrimes = array(-1, -1);
        if ($right <= 1) {
            return $closestPrimes;
        }
        $primes = array();
        $minDiff = PHP_INT_MAX;
        for ($i = $left; $i <= $right; ++$i) {
            if ($this->isPrime($i)) {
                $primes[] = $i;
                $primeCount = count($primes);
                if ($primeCount >= 2 && $primes[$primeCount - 1] - $primes[$primeCount - 2] < $minDiff) {
                    $minDiff = $primes[$primeCount - 1] - $primes[$primeCount - 2];
                    $closestPrimes[0] = $primes[$primeCount - 2];
                    $closestPrimes[1] = $primes[$primeCount - 1];
                    if ($minDiff <= 2) {
                        break;
                    }
                }
            }
        }
        return $closestPrimes;
    }

    private function isPrime($n) {
        if ($n <= 1) {
            return false;
        }
        for ($i = 2; $i <= sqrt($n); ++$i) {
            if ($n % $i == 0) {
                return false;
            }
        }
        return true;
    }
}
```