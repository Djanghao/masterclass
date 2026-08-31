# Java 42 ms Beats 91.67%

**Author:** hassam_472
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-grid-happiness/solutions/6009551/](https://leetcode.com/problems/maximize-grid-happiness/solutions/6009551/)

---


<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    static int NONE = 0;
    static int INTROVERT = 1;
    static int EXTROVERT = 2;

    /**
     * Adjusts the happiness based on neighboring cells' values
     * @param board - current bitmask representation of the previous row
     * @param this_is - current cell's type (INTROVERT, EXTROVERT, NONE)
     * @param col - number of columns in the grid
     * @param index - current cell's index
     * @return adjustment value for happiness
     */
    public int adjust(int board, int this_is, int col, int index) {
        int shift_by = 2 * (col - 1);  // Calculates bit shift for the top neighbor

        // Get left neighbor, reset if at the start of a new row
        int left = board & 0x03;
        if (index % col == 0) {
            left = NONE;
        }
        
        // Get top neighbor
        int up = (board >> shift_by) & 0x03;

        int[] combination = new int[]{ left, up };
        int adjustment = 0;

        // Calculate happiness adjustment based on neighbor types
        for (int neighbor : combination) {
            if (neighbor == NONE) continue;  // Skip if neighbor is NONE

            if (neighbor == INTROVERT && this_is == INTROVERT) {
                adjustment -= 60;  // Both are introverts, large negative impact
            } else if (neighbor == INTROVERT && this_is == EXTROVERT) {
                adjustment -= 10;  // Mixed types, slight negative impact
            } else if (neighbor == EXTROVERT && this_is == INTROVERT) {
                adjustment -= 10;  // Mixed types, slight negative impact
            } else if (neighbor == EXTROVERT && this_is == EXTROVERT) {
                adjustment += 40;  // Both extroverts, positive impact
            }
        }
        
        return adjustment;
    }
    
    /**
     * Recursive function to maximize grid happiness
     * @param index - current cell index
     * @param m - rows in grid
     * @param n - columns in grid
     * @param introverts - remaining introverts to place
     * @param extroverts - remaining extroverts to place
     * @param board - bitmask for last row's configuration
     * @param dp - memoization array
     * @param tmask - bitmask for limiting board to 2*n bits
     * @return maximum happiness achievable
     */
    public int maxHappiness(int index, int m, int n, int introverts, int extroverts, int board, int[][][][] dp, int tmask) {
        if (index >= m * n) {
            return 0;  // Base case: grid filled
        }

        if (dp[index][introverts][extroverts][board] != 0) {
            return dp[index][introverts][extroverts][board];  // Return cached result if available
        }

        int intro_score = -1;
        int extro_score = -1;

        // Place introvert if available
        if (introverts > 0) {
            int new_board = ((board << 2) | INTROVERT) & tmask;
            intro_score = 120 + adjust(board, INTROVERT, n, index) + 
                          maxHappiness(index + 1, m, n, introverts - 1, extroverts, new_board, dp, tmask);
        }

        // Place extrovert if available
        if (extroverts > 0) {
            int new_board = ((board << 2) | EXTROVERT) & tmask;
            extro_score = 40 + adjust(board, EXTROVERT, n, index) + 
                          maxHappiness(index + 1, m, n, introverts, extroverts - 1, new_board, dp, tmask);
        }

        // Option to skip placing anyone in this cell
        int new_board = ((board << 2) | NONE) & tmask;
        int skip = maxHappiness(index + 1, m, n, introverts, extroverts, new_board, dp, tmask);

        // Uncomment the line below for debug logging
        // System.out.printf("Index: %d, Introverts: %d, Extroverts: %d, Board: %s, IntroScore: %d, ExtroScore: %d, Skip: %d%n", index, introverts, extroverts, Integer.toBinaryString(board), intro_score, extro_score, skip);

        // Cache and return the best possible score
        dp[index][introverts][extroverts][board] = Math.max(skip, Math.max(intro_score, extro_score));
        return dp[index][introverts][extroverts][board];
    }

    /**
     * Initializes the process to find the maximum happiness for the grid.
     * @param m - number of rows
     * @param n - number of columns
     * @param introvertsCount - initial introverts count
     * @param extrovertsCount - initial extroverts count
     * @return maximum grid happiness
     */
    public int getMaxGridHappiness(int m, int n, int introvertsCount, int extrovertsCount) {
        int[][][][] dp = new int[m * n][introvertsCount + 1][extrovertsCount + 1][(1 << (2 * n))];
        int tmask = (1 << (2 * n)) - 1;  // Mask to ensure only 2*n bits are retained in board

        return maxHappiness(0, m, n, introvertsCount, extrovertsCount, 0, dp, tmask);
    }
}

```