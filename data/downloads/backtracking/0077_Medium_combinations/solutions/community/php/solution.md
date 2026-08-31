# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/combinations/solutions/6086789/](https://leetcode.com/problems/combinations/solutions/6086789/)

---

```php []
class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @return Integer[][]
     */
    function combine($n, $k) {
        // DFS to go greedy and try all combinations up to K elems.
        $this->n = $n;
        $this->k = $k;
        $this->combinations = [];
        foreach (range(1, $n) as $v) {
            $this->dfs($v);
        }
        return $this->combinations;
    }

    function dfs($currentValue, $currentComb = []) {
        // Add value to current combination.
        $currentComb[] = $currentValue;

        // If length K is reached, save and return. 
        if (count($currentComb) === $this->k) {
            $this->combinations[] = $currentComb;
            return;
        }

        // If length is less than K, keep adding
        for ($i=$currentValue+1; $i<=$this->n; $i++) {
            $this->dfs($i, $currentComb);
        }
    }


    /* [EXTRA] GET NUMBER OF POSSIBLE COMBINATIONS:
    function combine($n, $k) {
        //                                n!
        // Combination formula: nCk = -----------
        //                             k! (n-k)!
        
        $this->memo = [];
        return $this->fact($n) / ($this->fact($n-$k) * $this->fact($k));
    }

    function fact(int $n) {
        // Base cases
        if ($n === 1 || $n === 0) {
            return 1;
        }

        // Check memo
        if (isset($this->memo[$n])) {
            return $this->memo[$n];
        }

        // Compute, store and return
        $fact = $n * $this->fact($n-1);
        $this->memo[$n] = $fact;
        return $fact;
    }
    */
}
```