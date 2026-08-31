# Construct Product Matrix || Simple PHP Solution with Self-Explanatory Code

**Author:** umerkhanwp
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-product-matrix/solutions/4466747/](https://leetcode.com/problems/construct-product-matrix/solutions/4466747/)

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

    private $m;
    private $n;

    /**
     * @param Integer[][] $grid
     * @return Integer[][]
     */
    function constructProductMatrix($grid) {
        $this->m = count($grid);
        $this->n = count($grid[0]);
        $arr = [];
        $p = [];

        $arr = $this->convertTo1D($grid);

        $p = $this->productExceptSelf($arr);

        return $this->convertTo2D($p);
    }

    function convertTo1D($grid) {
        $arr = [];
        for($i = 0; $i < $this->m; $i++) {
            for($j = 0; $j < $this->n; $j++) {
                $arr[] = $grid[$i][$j];
            }
        }
        return $arr;
    }

    function productExceptSelf($arr) {
        $p = [];
        $prefix = 1;
        $mod = 12345;

        for ($i = 0; $i < $this->m * $this->n; $i++) {
            $p[$i] = $prefix % $mod;
            $prefix = ($prefix * $arr[$i]) % $mod;
        }

        $suffix = 1;

        for ($i = $this->m * $this->n - 1; $i >= 0; $i--) {
            $p[$i] = ($p[$i] * $suffix) % $mod;
            $suffix = ($suffix * $arr[$i]) % $mod;
        }

        return $p;
    }

    function convertTo2D($arr) {
        $product = [];
        $row = $col = 0;
        for($i = 0; $i < $this->m * $this->n; $i++) {
            $product[$row][$col] = $arr[$i];
            $col++;
            if($col >= $this->n) {
                $row++;
                $col = 0;
            }
        }
        return $product;
    }
}
```