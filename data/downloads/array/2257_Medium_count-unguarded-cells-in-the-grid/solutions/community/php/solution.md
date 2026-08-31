# Loops

**Author:** J22qIDYZa7
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-unguarded-cells-in-the-grid/solutions/6067062/](https://leetcode.com/problems/count-unguarded-cells-in-the-grid/solutions/6067062/)

---


# Code
```php []
class Solution
{

    function check($x, $y, &$grid, &$count)
    {

        if ($grid[$y][$x] === -1) {
            return false;
        }

        if ($grid[$y][$x] === 0) {
            $grid[$y][$x] = 1;
            $count--;
        }

        return true;
    }

    /**
     * @param Integer $m
     * @param Integer $n
     * @param Integer[][] $guards
     * @param Integer[][] $walls
     * @return Integer
     */
    function countUnguarded($m, $n, $guards, $walls)
    {

        $grid = array_fill(
            0, $m,
            array_fill(0, $n, 0)
        );

        $count = $m * $n;

        foreach ($walls as $wall) {
            $count--;
            $grid[$wall[0]][$wall[1]] = -1;
        }

        foreach ($guards as $wall) {
            $count--;
            $grid[$wall[0]][$wall[1]] = -1;
        }

        foreach ($guards as $guard) {

            // LEFT
            $y = $guard[0];
            $x = $guard[1] - 1;
            while (
                $x >= 0
                && $this->check($x, $y, $grid, $count)
            ) {
                $x--;
            }

            // UP
            $y = $guard[0] - 1;
            $x = $guard[1];
            while (
                $y >= 0
                && $this->check($x, $y, $grid, $count)
            ) {
                $y--;
            }

            // RIGHT
            $y = $guard[0];
            $x = $guard[1] + 1;
            while (
                $x < $n
                && $this->check($x, $y, $grid, $count)
            ) {
                $x++;
            }

            // BOTTOM
            $y = $guard[0] + 1;
            $x = $guard[1];
            while (
                $y < $m
                && $this->check($x, $y, $grid, $count)
            ) {
                $y++;
            }

        }

        return $count;
    }
}
```
``` Dart []
class Solution {
  late List<List<int>> grid;
  late int count;

  bool check(int x, int y) {
    if (grid[y][x] == -1) {
      return false;
    }
    if (grid[y][x] == 0) {
      grid[y][x] = 1;
      count--;
    }
    return true;
  }

  int countUnguarded(int m, int n, List<List<int>> guards, List<List<int>> walls) {
    // Initialize the grid with 0
    grid = List.generate(m, (_) => List.filled(n, 0));
    count = (m * n) - guards.length - walls.length;

    // Place walls (-1)
    for (var wall in walls) {
      grid[wall[0]][wall[1]] = -1;
    }

    // Place guards (-1)
    for (var guard in guards) {
      grid[guard[0]][guard[1]] = -1;
    }

    // Process guard coverage
    for (var guard in guards) {
      // LEFT
      int y = guard[0];
      int x = guard[1] - 1;
      while (x >= 0 && check(x, y)) {
        x--;
      }

      // UP
      y = guard[0] - 1;
      x = guard[1];
      while (y >= 0 && check(x, y)) {
        y--;
      }

      // RIGHT
      y = guard[0];
      x = guard[1] + 1;
      while (x < n && check(x, y)) {
        x++;
      }

      // BOTTOM
      y = guard[0] + 1;
      x = guard[1];
      while (y < m && check(x, y)) {
        y++;
      }
    }

    return count;
  }
}
```
