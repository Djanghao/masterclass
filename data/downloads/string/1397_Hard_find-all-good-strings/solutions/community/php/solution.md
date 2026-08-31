# Solution ind All Good Strings

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-good-strings/solutions/4973275/](https://leetcode.com/problems/find-all-good-strings/solutions/4973275/)

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
    private $mod = 1000000007;
    private $cache = [];

    /**
     * @param Integer $n
     * @param String $s1
     * @param String $s2
     * @param String $evil
     * @return Integer
     */
    function findGoodStrings($n, $s1, $s2, $evil) {
        $this->cache = array_fill(0, 1 << 17, -1);
        return $this->dfs(0, 0, $n, $s1, $s2, $evil, true, true, $this->computeNext($evil));
    }

    function dfs($mainTravel, $evilMatch, $n, $s1, $s2, $evil, $left, $right, $next, &$ans = 0) {
        if ($evilMatch === strlen($evil)) {
            return 0;
        }
        if ($mainTravel === $n) {
            return 1;
        }
        
        $key = $this->generateKey($mainTravel, $evilMatch, $left, $right);
        if ($this->cache[$key] !== -1) {
            return $this->cache[$key];
        }
        
        $start = $left ? ord($s1[$mainTravel]) : 97; // 'a'
        $end = $right ? ord($s2[$mainTravel]) : 122; // 'z'
        
        for ($i = $start; $i <= $end; $i++) {
            $code = chr($i);
            $m = $evilMatch;
            
            while ($m > 0 && $evil[$m] !== $code) {
                $m = $next[$m - 1];
            }
            
            if ($evil[$m] === $code) {
                $m++;
            }
            
            $ans += $this->dfs($mainTravel + 1, $m, $n, $s1, $s2, $evil, $left && ($i === $start), $right && ($i === $end), $next);
            $ans %= $this->mod;
        }
        
        return $this->cache[$key] = $ans;
    }

    function generateKey($mainTravel, $evilMatch, $left, $right) {
        return ($mainTravel << 8) | ($evilMatch << 2) | (($left ? 1 : 0 ) << 1) | ($right ? 1 : 0);
    }

    function computeNext($evil) {
        $n = strlen($evil);
        $ans = array_fill(0, $n, 0);
        $k = 0;

        for ($i = 1; $i < $n; $i++) {
            while ($k > 0 && $evil[$i] !== $evil[$k]) {
                $k = $ans[$k - 1];
            }

            if ($evil[$i] === $evil[$k]) {
                $ans[$i] = ++$k;
            }
        }

        return $ans;
    }
}

```