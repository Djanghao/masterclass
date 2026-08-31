# DFS

**Author:** sumeetk83
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-maze/solutions/5691410/](https://leetcode.com/problems/the-maze/solutions/5691410/)

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
```php []
class Solution {
    public function dfs($m, $n, &$maze, $curr, &$destination, &$visit) {
        if ($visit[$curr[0]][$curr[1]]) {
            return false;
        }
        if ($curr[0] == $destination[0] && $curr[1] == $destination[1]) {
            return true;
        }

        $visit[$curr[0]][$curr[1]] = true;
        $dirX = [0, 1, 0, -1];
        $dirY = [-1, 0, 1, 0];

        for ($i = 0; $i < 4; $i++) {
            $r = $curr[0];
            $c = $curr[1];
            // Move the ball in the chosen direction until it can't anymore.
            while ($r >= 0 && $r < $m && $c >= 0 && $c < $n && $maze[$r][$c] == 0) {
                $r += $dirX[$i];
                $c += $dirY[$i];
            }
            // Revert the last move to get the cell to which the ball rolls.
            if ($this->dfs($m, $n, $maze, [$r - $dirX[$i], $c - $dirY[$i]], $destination, $visit)) {
                return true;
            }
        }
        return false;
    }

    /**
     * @param Integer[][] $maze
     * @param Integer[] $start
     * @param Integer[] $destination
     * @return Boolean
     */
    public function hasPath(&$maze, $start, $destination) {
        $m = count($maze);
        $n = count($maze[0]);
        $visit = array_fill(0, $m, array_fill(0, $n, false));
        return $this->dfs($m, $n, $maze, $start, $destination, $visit);
    }
}

```