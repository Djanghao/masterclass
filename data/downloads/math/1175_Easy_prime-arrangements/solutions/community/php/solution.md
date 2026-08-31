# Solution Prime Arrangements

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-arrangements/solutions/4894648/](https://leetcode.com/problems/prime-arrangements/solutions/4894648/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function numPrimeArrangements($n) {
        $mod = 1000000007;
        $primes = $this->countPrimes($n + 1);
        
        $nonPrimes = $n - $primes;
        
        $primePermutations = $this->factorial($primes, $mod);
        $nonPrimePermutations = $this->factorial($nonPrimes, $mod);
        
        return ($primePermutations * $nonPrimePermutations) % $mod;
    }
    
    function countPrimes($n) {
        if ($n <= 2) return 0;
        
        $count = 0;
        $isPrime = array_fill(0, $n, true);
        $isPrime[0] = false;
        $isPrime[1] = false;
        
        for ($i = 2; $i * $i < $n; $i++) {
            if ($isPrime[$i]) {
                for ($j = $i * $i; $j < $n; $j += $i) {
                    $isPrime[$j] = false;
                }
            }
        }
        
        for ($i = 2; $i < $n; $i++) {
            if ($isPrime[$i]) $count++;
        }
        
        return $count;
    }
    
    function factorial($n, $mod) {
        $result = 1;
        for ($i = 2; $i <= $n; $i++) {
            $result = ($result * $i) % $mod;
        }
        return $result;
    }
}

```