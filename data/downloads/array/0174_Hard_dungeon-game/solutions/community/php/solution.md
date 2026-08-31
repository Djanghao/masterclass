# php DP answer

**Author:** soroux
**Votes:** 0
**Link:** [https://leetcode.com/problems/dungeon-game/solutions/5730188/](https://leetcode.com/problems/dungeon-game/solutions/5730188/)

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
    /**
     * @param Integer[][] $dungeon
     * @return Integer
     */
    function calculateMinimumHP($dungeon) {
        $n = count($dungeon);
        $m = count($dungeon[0]);

        // Create a DP table with the same dimensions as the dungeon
        $dp = array_fill(0, $n, array_fill(0, $m, PHP_INT_MAX));

        // Initialize the bottom-right cell (princess's cell)
        $dp[$n - 1][$m - 1] = max(1, 1 - $dungeon[$n - 1][$m - 1]);

        // Fill the DP table from bottom-right to top-left
        for ($i = $n - 1; $i >= 0; $i--) {
            for ($j = $m - 1; $j >= 0; $j--) {
                if ($i < $n - 1) {
                    $dp[$i][$j] = min($dp[$i][$j], max(1, $dp[$i + 1][$j] - $dungeon[$i][$j]));
                }
                if ($j < $m - 1) {
                    $dp[$i][$j] = min($dp[$i][$j], max(1, $dp[$i][$j + 1] - $dungeon[$i][$j]));
                }
            }
        }

        // The answer is in the top-left cell
        return $dp[0][0];
    }
}
```