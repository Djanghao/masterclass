# PHP Union-Find (weighted, path compressed)

**Author:** CSharpRU
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-good-paths/solutions/3055672/](https://leetcode.com/problems/number-of-good-paths/solutions/3055672/)

---

# Intuition
Learn about Union-Find and its variations at https://www.coursera.org/learn/algorithms-part1/home/info

# Approach
Quicksort & Union-Find

# Complexity
Remember that we use built in PHP quicksort.

- Time complexity: 
    - Best case: $$O(nlogn)$$ + $$O(n)$$
    - Worst case: $$O(n^2)$$ + $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
// see https://www.coursera.org/learn/algorithms-part1/home/info for reference
// path compressed
class UnionFind {
    private array $id = []; // union-find ids or parents, you name it
    private array $size = []; // size of nodes in subtree
    private int $validPaths = 0;

    private array $values = [];

    // populate ids array and sizes, from start every id equals to itself and size is 1 for every subtree
    public function __construct(array $values) {
        $this->validPaths = count($values);

        for ($i = 0; $i < $this->validPaths; $i++) {
            $this->id[$i] = $i;
            $this->size[$i] = 1;
        }

        $this->values = $values;
    }

    public function getValidPaths(): int {
        return $this->validPaths;
    }

    // union two nodes and check their values respectively
    public function union(int $left, int $right): void {
        // find left and right parents
        $leftParent = $this->find($left);
        $rightParent = $this->find($right);

        if ($leftParent === $rightParent) {
            return;
        }

        // if values are equal assign left as right's id and update valid paths and sizes
        // otherwise just do union based on values, left or right id respectively
        if ($this->values[$leftParent] === $this->values[$rightParent]) {
            // add to valid paths multiply result of left and right subtree sizes
            // for example left size is 1 and right is 2, so 1 * 2 = 2, 2 paths are valid
            $this->validPaths += $this->size[$leftParent] * $this->size[$rightParent];
            $this->size[$leftParent] += $this->size[$rightParent];

            $this->id[$rightParent] = $leftParent;
        } elseif ($this->values[$leftParent] > $this->values[$rightParent]) {
            $this->id[$rightParent] = $leftParent;
        } else {
            $this->id[$leftParent] = $rightParent;
        }
    }

    // find parent node
    private function find(int $i): int {
        if ($i === $this->id[$i]) {
            return $i;
        }

        // rearrange (path compression)
        $this->id[$i] = $this->find($this->id[$i]);

        return $this->id[$i];
    }
}

class Solution {
    /**
     * @param Integer[] $vals
     * @param Integer[][] $edges
     * @return Integer
     */
    function numberOfGoodPaths($vals, $edges) {
        $uf = new UnionFind($vals);

        // sort edges by values, so order for union is correct and result is also correct while counting valid paths based on subtree sizes
        usort(
            $edges,
            fn($left, $right) => max($vals[$left[0]], $vals[$left[1]]) <=> max($vals[$right[0]], $vals[$right[1]])
        );

        foreach ($edges as $edge) {
            $uf->union($edge[0], $edge[1]);
        }

        return $uf->getValidPaths();
    }
}
```