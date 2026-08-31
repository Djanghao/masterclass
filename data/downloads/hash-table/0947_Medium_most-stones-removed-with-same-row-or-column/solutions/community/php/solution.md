# 🚀 Mastering Stone Removal with Union-Find! 🪨✨ | Easy-to-Understand PHP Solution 🌟

**Author:** AIlhomov
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/5706084/](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/5706084/)

---

# Intuition
The problem can be thought of as identifying connected components in a graph where nodes represent stones, and edges represent the fact that two stones can be removed if they share the same row or column. The goal is to maximize the number of stones removed by identifying all connected components and understanding that in each component, all but one stone can be removed. Union-Find is a natural fit for efficiently grouping stones into these connected components.
# Approach
We use a Union-Find (or Disjoint Set Union) data structure to group stones that share the same row or column into connected components. Each stone's row index and column index are considered separately by treating the column index with a bitwise NOT operation to differentiate it from the row index, ensuring unique handling of rows and columns.

Once all stones are processed and grouped, we count the number of unique connected components by finding the number of unique root parents in the Union-Find structure. The final answer is obtained by subtracting the number of connected components from the total number of stones, as in each component, all but one stone can be removed.
# Complexity
- Time complexity:
The time complexity of the solution is O(n\u22C5\u03B1(n)), where \uD835\uDC5B is the number of stones and \u03B1(n) is the inverse Ackermann function, which grows very slowly and is nearly constant for all practical purposes. This complexity arises because each union and find operation is nearly constant time due to path compression and union by rank in the Union-Find structure.
- Space complexity:
The space complexity is O(n), where n is the number of stones. This space is used to store the parent pointers in the Union-Find structure and to keep track of the unique connected components. Since we need to store one entry for each stone and potentially some additional space for intermediate operations, the space usage is linear with respect to the number of stones.
# Code
```php []
class Solution {

    private $parent = [];

    //Union-Find with path compression
    private function find($x) {
        if (!isset($this->parent[$x])) {
            $this->parent[$x] = $x;
        }
        if ($x != $this->parent[$x]) {
            $this->parent[$x] = $this->find($this->parent[$x]);
        }
        return $this->parent[$x];
    }

    private function union($x, $y) {
        $rootX = $this->find($x);
        $rootY = $this->find($y);
        if ($rootX != $rootY) {
            $this->parent[$rootX] = $rootY;
        }
    }

    public function removeStones($stones) {
        foreach ($stones as $stone) {
            $x = $stone[0];
            $y = ~$stone[1];  //Using bitwise NOT to differentiate rows from columns
            $this->union($x, $y);
        }

        $uniqueParents = [];
        foreach ($stones as $stone) {
            $x = $stone[0];
            $y = ~$stone[1];
            $root = $this->find($x);
            $uniqueParents[$root] = true;
        }

        return count($stones) - count($uniqueParents);
    }
}
```