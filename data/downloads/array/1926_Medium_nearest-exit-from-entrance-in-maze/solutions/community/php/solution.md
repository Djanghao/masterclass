# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/solutions/6047840/](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/solutions/6047840/)

---

```php []
class Solution {

    /**
     * @param String[][] $maze
     * @param Integer[] $entrance
     * @return Integer
     */
    function nearestExit($maze, $entrance) {
        // Intuition: "nearest" means BFS.
        // We can't guarantee that everything is a corridor, so this is not a tree, but a graph.
        $this->maze = &$maze;
        $this->markVisited($entrance);
        $this->maxRows = count($maze);
        $this->maxCols = count($maze[0]);

        // We start in entrance, and will chech adjacents.
        // If no adjacent is an exit, we will check adjacents of those. And like that recursively.
        $this->cellsToCheck = new SplQueue();

        $this->addValidAdjacentsOf($entrance);

        return $this->stepsToExit();
    }

    function stepsToExit($curSteps = 1) {
        $cellsInStep = $this->cellsToCheck->count();
        if ($cellsInStep === 0) return -1;
        
        for ($i=0; $i<$cellsInStep; $i++) {
            $cell = $this->cellsToCheck->dequeue();

            if ($this->isExit($cell)) return $curSteps;

            if ($this->isVisited($cell)) continue;
            $this->markVisited($cell);

            $this->addValidAdjacentsOf($cell);
        }
        return $this->stepsToExit(++$curSteps);
    }

    function addValidAdjacentsOf($cell) {
        [$row, $col] = [$cell[0], $cell[1]];
        $adjacents = [
            [$row-1, $col], // up
            [$row, $col-1], // left
            [$row+1, $col], // down
            [$row, $col+1], // right
        ];
        foreach ($adjacents as [$otherRow, $otherCol]) {
            if (($otherRow < 0 || $otherRow >= $this->maxRows)        // Exceeds boundaries left-right
                || ($otherCol < 0 || $otherCol >= $this->maxCols)     // Exceeds boundaries up-down
                || $this->maze[$otherRow][$otherCol] === '+'    // Wall
                || $this->isVisited([$otherRow, $otherCol])     // Already visited
            ) continue;

            $this->cellsToCheck->enqueue([$otherRow, $otherCol]);
        }
    }

    function isExit($cell) {
        [$row, $col] = [$cell[0], $cell[1]];
        return $row === 0
            || $col === 0
            || $row === $this->maxRows-1
            || $col === $this->maxCols-1;
    }

    function isVisited($cell) {
        return isset($this->visited[$cell[0]][$cell[1]]);
    }

    function markVisited($cell) {
        $this->visited[$cell[0]][$cell[1]] = true;
    }
}
```