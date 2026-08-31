# Solution Greatest Common Divisor Traversal

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/greatest-common-divisor-traversal/solutions/4778268/](https://leetcode.com/problems/greatest-common-divisor-traversal/solutions/4778268/)

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
     * @param Integer[] $nums
     * @return Boolean
     */
    function canTraverseAllPairs($nums) {
        $n = count($nums);
        
        if ($n == 1) return true;
        
        $dsu = new DisjointSet($n);
        $map = array();
        
        for ($i = 0; $i < $n; $i++) {
            if ($nums[$i] == 1) return false;
            
            for ($j = 2; $j * $j <= $nums[$i]; $j++) {
                if ($nums[$i] % $j == 0) {
                    $f1 = $j;
                    $f2 = $nums[$i] / $j;
                    
                    if (array_key_exists($f1, $map)) $dsu->union($i, $map[$f1]);
                    if (array_key_exists($f2, $map)) $dsu->union($i, $map[$f2]);
                    
                    $map[$f1] = $i;
                    $map[$f2] = $i;
                }
            }
            
            if (array_key_exists($nums[$i], $map)) $dsu->union($i, $map[$nums[$i]]);
            $map[$nums[$i]] = $i;
        }
        
        return $dsu->size == 1;
    }
}

class DisjointSet {
    public $parent;
    public $rank;
    public $size;

    function __construct($n) {
        $this->parent = range(0, $n - 1);
        $this->rank = array_fill(0, $n, 1);
        $this->size = $n;
    }

    function find($x) {
        if ($this->parent[$x] == $x) return $x;

        $temp = $this->find($this->parent[$x]);
        $this->parent[$x] = $temp;
        return $temp;
    }

    function union($x, $y) {
        $px = $this->find($x);
        $py = $this->find($y);

        if ($px != $py) {
            $this->size--;

            if ($this->rank[$px] > $this->rank[$py]) {
                $this->parent[$py] = $px;
            } elseif ($this->rank[$px] < $this->rank[$py]) {
                $this->parent[$px] = $py;
            } else {
                $this->parent[$px] = $py;
                $this->rank[$py]++;
            }
            
            return true;
        }

        return false;
    }
}

```