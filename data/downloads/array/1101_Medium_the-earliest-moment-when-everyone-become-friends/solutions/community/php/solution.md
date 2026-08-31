# php | Union Find

**Author:** lancelijade
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/1910991/](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/1910991/)

---

```php
class UnionFind {       // union by rank, find path compression

    private $root = [];
    private $rank = [];
    private $size;
    private $count;

    public function __construct($size) {
        $this->root = range(0, $size-1);
        $this->rank = array_fill(0, $size, 1);
        $this->size = $size;
        $this->count = $size;
    }

    public function find($x) {
        if ($x == $this->root[$x]) return $x;
        return $this->root[$x] = $this->find($this->root[$x]);
    }

    public function union($x, $y) {
        $rootX = $this->find($x);
        $rootY = $this->find($y);
        if ($rootX != $rootY) {
            if ($this->rank[$rootX] > $this->rank[$rootY]) {
                $this->root[$rootY] = $rootX;
            } elseif ($this->rank[$rootX] < $this->rank[$rootY]) {
                $this->root[$rootX] = $rootY;
            } else {
                $this->root[$rootY] = $rootX;
                $this->rank[$rootX]++;
            }
            $this->count--;
        }
    }

    public function connected($x, $y) {
        return $this->find($x) == $this->find ($y);
    }

    public function getcount() {
        return $this->count;
    }    
}


class Solution {

    /**
     * @param Integer[][] $logs
     * @param Integer $n
     * @return Integer
     */
    function earliestAcq($logs, $n) {
        
        sort($logs);
        $uf = new UnionFind($n);
        foreach ($logs as $log) {
            $uf->union($log[1], $log[2]);
            if ($uf->getcount()==1) return $log[0];
        }
        return -1;
    }
}
```