# Simple DFS

**Author:** yieldtoben
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-with-maximum-gold/solutions/5160958/](https://leetcode.com/problems/path-with-maximum-gold/solutions/5160958/)

---

# Approach
DFS

# Complexity
- Time complexity:
$$O(mn4^g)$$ where g is the number of gold (depth of recursion)

- Space complexity:
$$O(g)$$ or $$O(mn)$$ at worst case

# Code
```
class Solution {

  /**
    * @param Integer[][] $grid
    * @return Integer
    */
  function getMaximumGold($grid)
  {
    $result = 0;

    for ($r = 0; $r < count($grid); $r++)
      for ($c = 0; $c < count($grid[0]); $c++)
        $result = max($result, $this->dfs($grid, $r, $c));

    return $result;
  }

  private function dfs(&$grid, $r, $c)
  {
    if ($r < 0 || $c < 0 || $r == count($grid) || $c == count($grid[0])) return 0;
    if ($grid[$r][$c] == 0) return 0;

    $_g = $grid[$r][$c];
    $grid[$r][$c] = $max = 0;

    foreach ([[0, 1], [0, -1], [1, 0], [-1, 0]] as $d)
      $max = max($max, $this->dfs($grid, $r + $d[0], $c + $d[1]));

    $grid[$r][$c] = $_g;

    return $max + $_g;
  }
}
```