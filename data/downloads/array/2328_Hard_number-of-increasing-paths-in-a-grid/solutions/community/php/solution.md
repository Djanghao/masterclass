# Simple PHP dfs solution with memoization

**Author:** alexulanov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3652277/](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3652277/)

---

# Complexity
- Time complexity: $$O(m*n)$$

- Space complexity: $$O(m*n)$$

# Code
```
class Solution {
    private array $dp = [];
    private array $dir = [[0,1], [0,-1],[1,0],[-1,0]];
    private const MOD = 1000000007;

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function countPaths(array $grid): int {
        $m = count($grid);
        $n = count($grid[0]);
        $result = 0;
        for ($i = 0; $i < $m; $i++) {
            for ($j = 0; $j < $n; $j++) {
                $result = ($result + $this->dfs($grid, $i, $j)) % self::MOD;
            }
        }

        return $result;
    }

    private function dfs(array $grid, int $i, int $j): int {
        if ($this->dp[$i][$j] != 0) {
            return $this->dp[$i][$j];
        }

        $result = 1;

        foreach ($this->dir as $d) {
            $prevI = $i + $d[0];
            $prevJ = $j + $d[1];
            if (0 <= $prevI && $prevI < count($grid) && 0 <= $prevJ && $prevJ < count($grid[0]) && $grid[$prevI][$prevJ] < $grid[$i][$j]) {
                $result += $this->dfs($grid, $prevI, $prevJ);
                $result %= self::MOD;
            }
        }

        $this->dp[$i][$j] = $result;
        return $result;
    }
}
```