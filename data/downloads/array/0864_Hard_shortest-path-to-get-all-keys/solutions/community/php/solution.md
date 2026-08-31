# And we've got even faster one (66 ms.)...

**Author:** Caaat1
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/3741192/](https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/3741192/)

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
class Solution
{
    private array $grid = [];
    private int $shortestPath = -1;
    function shortestPathAllKeys(
        array $grid
    ): int {
        foreach ($grid as $row => $str) {
            foreach (str_split($str) as $col => $chr) {
                if ($chr == '#') {
                    $this->grid[$row][$col] = null;
                    continue;
                }
                $this->grid[$row][$col] =
                    $Cell =
                    new class(
                        $row,
                        $col,
                        $chr
                    )
                    {
                        public ?bool $isKey = null;
                        public ?bool $isLock = null;
                        public array $neighbors = [];
                        public function __construct(
                            public int $row,
                            public int $col,
                            public string $val
                        ) {
                        }
                    };
                if ($chr == '.')
                    continue;
                if (str_contains('ABCDEF', $chr)) {
                    $Cell->isLock = true;
                    continue;
                }
                if (str_contains('abcdef', $chr)) {
                    $keys[$chr] = $chr;
                    $Cell->isKey = true;
                    continue;
                }
                if ($chr == '@') {
                    $Root = $Cell;
                    continue;
                }
            }
        }
        foreach ($this->grid as $row => $arr)
            foreach ($arr as $col => $Cell)
                if (isset($Cell))
                    foreach ([
                        [$row, $col - 1],
                        [$row - 1, $col],
                        [$row + 1, $col],
                        [$row, $col + 1]
                    ] as [$rowNeighbor, $colNeighbor])
                        if (isset($this->grid[$rowNeighbor][$colNeighbor]))
                            $Cell->neighbors[] = $this->grid[$rowNeighbor][$colNeighbor];
        $this->bfs(
            $Root,
            0,
            $keys
        );
        return $this->shortestPath;
    }
    function bfs(
        $Cell,
        $pathToCell,
        $keys
    ) {
        $queue = [null];
        $exploredCells = [$Cell->row => [$Cell->col => $pathToCell]];
        do {
            $pathToCell = $exploredCells[$Cell->row][$Cell->col];
            if ($this->shortestPath > $pathToCell + 1 or $this->shortestPath == -1) {
                if ($Cell->isKey && isset($keys[$Cell->val])) {
                    if (count($keys) == 1) {
                        $this->shortestPath = $pathToCell;
                        break;
                    }
                    $subsetKeys = $keys;
                    unset($subsetKeys[$Cell->val]);
                    (__METHOD__)(
                        $Cell,
                        $pathToCell,
                        $subsetKeys,
                    );
                    continue;
                }
                foreach ($Cell->neighbors as $Neighbor) {
                    if (isset($exploredCells[$Neighbor->row][$Neighbor->col]))
                        continue;
                    if ($Neighbor->isLock)
                        if (isset($keys[strtolower($Neighbor->val)]))
                            continue;
                    $queue[] = $Neighbor;
                    $exploredCells[$Neighbor->row][$Neighbor->col] = $pathToCell + 1;
                }
            } elseif ($Cell->isKey && isset($keys[$Cell->val])) {
                if (count($keys) == 1) {
                    $this->shortestPath = $pathToCell;
                    break;
                }
            }
        } while ($Cell = next($queue));
    }
}
```