# First ever solution in PHP

**Author:** nishk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-segment-sum-after-removals/solutions/5499260/](https://leetcode.com/problems/maximum-segment-sum-after-removals/solutions/5499260/)

---

# Code
```
class Solution {
    public $n;
    public $max_val = 0;
    public $parent = [];
    public $sum = [];

    /**
     * @param Integer[] $nums
     * @param Integer[] $removeQueries
     * @return Integer[]
     */
    function maximumSegmentSum($nums, $removeQueries) {
        $this->n = count($nums);
        $this->parent = array_fill(0, $this->n + 10, 0);
        $this->sum = array_fill(0, $this->n + 10, 0);

        for ($i = 0; $i < $this->n; $i++) {
            $this->sum[$i] = $nums[$i];
            $this->parent[$i] = $i;
        }

        $vis = array_fill(0, $this->n + 1, 0);
        $ans = array_fill(0, $this->n, 0);
        $this->max_val = 0;

        for ($i = $this->n - 1; $i >= 0; $i--) {
            $ans[$i] = $this->max_val;
            $index = $removeQueries[$i];
            $vis[$index] = 1;
            $this->max_val = max($this->max_val, $nums[$index]);

            if ($index + 1 < $this->n && $vis[$index + 1]) {
                $this->merge($index, $index + 1);
            }
            if ($index - 1 >= 0 && $vis[$index - 1]) {
                $this->merge($index, $index - 1);
            }
        }

        return $ans;
    }

    function find($x) {
        if ($x == $this->parent[$x]) {
            return $x;
        }
        return $this->parent[$x] = $this->find($this->parent[$x]);
    }

    function merge($x, $y) {
        $x = $this->find($x);
        $y = $this->find($y);
        if ($x == $y) {
            return;
        }
        $this->sum[$x] += $this->sum[$y];
        $this->max_val = max($this->max_val, $this->sum[$x]);
        $this->parent[$y] = $x;
    }
}
```