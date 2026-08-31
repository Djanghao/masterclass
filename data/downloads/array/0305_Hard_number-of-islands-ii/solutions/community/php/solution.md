# 🔥 Beats 100% Runtime (PHP) [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-islands-ii/solutions/5686760/](https://leetcode.com/problems/number-of-islands-ii/solutions/5686760/)

---

# Intuition
Track the number of distinct islands in a grid as land is added. An island is a connected group of land cells.

# Approach
Union-Find: Use to manage and merge connected land cells.

Union: Merge adjacent land cells.

Find: Locate the root of a cell to check connections.

Steps:
Initialize each cell as water.
For each land addition, convert it, union with adjacent land cells, and update the island count.

# Complexity
- Time complexity:
O(k\u22C5log(mn)), where k is the number of operations, due to the union-find operations being almost constant time with path compression and union by rank.

- Space complexity:
O(mn) for storing parent and rank arrays, where m and n are the dimensions of the grid.

# Code
```php []
<?php

class Solution {
    private $parent;
    private $rank;
    private $count;
    private $m;
    private $n;

    public function numIslands2($m, $n, $positions) {
        $this->parent = [];
        $this->rank = [];
        $this->count = 0;
        $this->m = $m;
        $this->n = $n;
        
        $results = [];

        foreach ($positions as $pos) {
            $row = $pos[0];
            $col = $pos[1];
            $id = $row * $n + $col;

            if (!isset($this->parent[$id])) {
                // Add a new land
                $this->parent[$id] = $id;
                $this->rank[$id] = 0;
                $this->count++;

                // Union with adjacent lands
                $dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
                foreach ($dirs as $dir) {
                    $newRow = $row + $dir[0];
                    $newCol = $col + $dir[1];
                    $newId = $newRow * $n + $newCol;

                    if ($this->isValid($newRow, $newCol) && isset($this->parent[$newId])) {
                        if ($this->union($id, $newId)) {
                            $this->count--;
                        }
                    }
                }
            }
            $results[] = $this->count;
        }

        return $results;
    }

    private function find($x) {
        if ($this->parent[$x] != $x) {
            $this->parent[$x] = $this->find($this->parent[$x]);
        }
        return $this->parent[$x];
    }

    private function union($x, $y) {
        $rootX = $this->find($x);
        $rootY = $this->find($y);

        if ($rootX != $rootY) {
            if ($this->rank[$rootX] > $this->rank[$rootY]) {
                $this->parent[$rootY] = $rootX;
            } elseif ($this->rank[$rootX] < $this->rank[$rootY]) {
                $this->parent[$rootX] = $rootY;
            } else {
                $this->parent[$rootY] = $rootX;
                $this->rank[$rootX]++;
            }
            return true;
        }
        return false;
    }

    private function isValid($row, $col) {
        return $row >= 0 && $row < $this->m && $col >= 0 && $col < $this->n;
    }
}

// Example usage:
$solution = new Solution();
print_r($solution->numIslands2(3, 3, [[0,0],[0,1],[1,2],[2,1]])); // Output: [1,1,2,3]

?>

```