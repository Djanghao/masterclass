# php | dp | bottom-up and top-down

**Author:** lancelijade
**Votes:** 1
**Link:** [https://leetcode.com/problems/paint-house-ii/solutions/1881844/](https://leetcode.com/problems/paint-house-ii/solutions/1881844/)

---

```php
class Solution {

    private $costs;
    private $k;
    private $cache = [];

    function dp($i, $color) {

        echo "i=$i color=$color".PHP_EOL;

        if ($i==0) return $this->costs[0][$color];
        if (isset($this->cache[$i][$color])) return $this->cache[$i][$color];

        $r = PHP_INT_MAX;
        for ($c=0; $c<$this->k; $c++) {
            if ($c!==$color) $r = min($r, $this->dp($i-1, $c) + $this->costs[$i][$color]);
        }
        $this->cache[$i][$color] = $r;

        return $r;
    }

    // top-down
    function minCostII2($costs) {
        
        $this->costs = $costs;
        $n = count($costs);
        $k = count($costs[0]);
        $this->k = $k;

        $r = [];
        for ($i=0; $i<$k; $i++) $r[] = $this->dp($n-1, $i);

        return min($r);
    }


    // bottom-up
    function minCostII($costs) {
        
        $n = count($costs);
        $k = count($costs[0]);

        for ($c=0; $c<$k; $c++) $dp[0][$c] = $costs[0][$c];

        for ($i=1; $i<$n; $i++) {
            for ($c=0; $c<$k; $c++) {
                $r = PHP_INT_MAX;
                for ($c0=0; $c0<$k; $c0++) {
                    if ($c0!=$c) {
                        $r = min($r, $dp[$i-1][$c0] + $costs[$i][$c]);
                    }
                }
                $dp[$i][$c] = $r;
            }
        }

        return min($dp[$n-1]);
    } 
}
```