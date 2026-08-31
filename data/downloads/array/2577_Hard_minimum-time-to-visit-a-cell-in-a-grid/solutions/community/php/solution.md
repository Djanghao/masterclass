# Solution Minimum Time to Visit a Cell In a Grid

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/solutions/6094619/](https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/solutions/6094619/)

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
    public function minimumTime(array $grid): int {
        $row = count($grid);
        $col = count($grid[0]);
        $ans = PHP_INT_MAX;
        $direction = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        $visited = array_fill(0, $row, array_fill(0, $col, false));
        $pq = new SplPriorityQueue();
        
        $visited[0][0] = true;

        // Initial push
        $pq->insert([0, 0, 0], 0);

        if ($grid[1][0] <= 1) {
            $pq->insert([1, 1, 0], -1);
            $visited[1][0] = true;
        }

        if ($grid[0][1] <= 1) {
            $pq->insert([1, 0, 1], -1);
            $visited[0][1] = true;
        }

        if ($pq->count() == 1) {
            return -1;
        }

        while (!$pq->isEmpty()) {
            $curr = $pq->extract();
            $time = $curr[0];
            $r = $curr[1];
            $c = $curr[2];

            if ($r == $row - 1 && $c == $col - 1) {
                $ans = min($ans, $time);
            }

            foreach ($direction as $i) {
                $newR = $r + $i[0];
                $newC = $c + $i[1];

                if ($newR >= 0 && $newR < $row && $newC >= 0 && $newC < $col && !$visited[$newR][$newC]) {
                    if ($time + 1 >= $grid[$newR][$newC]) {
                        $pq->insert([$time + 1, $newR, $newC], -($time + 1));
                    } else {
                        $diff = $grid[$newR][$newC] - $time;
                        if ($diff % 2 == 0) {
                            $pq->insert([$grid[$newR][$newC] + 1, $newR, $newC], -($grid[$newR][$newC] + 1));
                        } else {
                            $pq->insert([$grid[$newR][$newC], $newR, $newC], -$grid[$newR][$newC]);
                        }
                    }
                    $visited[$newR][$newC] = true;
                }
            }
        }

        return $ans;
    }
}

```