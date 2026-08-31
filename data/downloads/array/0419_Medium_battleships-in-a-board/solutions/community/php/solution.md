# Solution Battleships in a Board

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/battleships-in-a-board/solutions/4723415/](https://leetcode.com/problems/battleships-in-a-board/solutions/4723415/)

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
class Solution {

    /**
     * @param String[][] $board
     * @return Integer
     */
    function countBattleships($board) {
        $m = count($board);
        $n = count($board[0]);
        $count = 0;
        
        for ($i = 0; $i < $m; $i++) {
            for ($j = 0; $j < $n; $j++) {
                if ($board[$i][$j] == 'X' && ($i == 0 || $board[$i - 1][$j] == '.') && ($j == 0 || $board[$i][$j - 1] == '.')) {
                    $count++;
                }
            }
        }
        
        return $count;
    }
}

$solution = new Solution();
$board1 = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]];
$board2 = [["."]];
echo $solution->countBattleships($board1) . "\
"; // Output: 2
echo $solution->countBattleships($board2) . "\
"; // Output: 0

```