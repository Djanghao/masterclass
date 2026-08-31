# Beats 100% on runtime [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/6004756/](https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/6004756/)

---

# Intuition
Gather the maximum number of fruits from specified positions on an infinite line, given a starting position and a limit on how far you can move. You need to balance moving left and right within the allowed steps to harvest as many fruits as possible.

# Approach
Build a cumulative array of fruits at each position, then calculate the total fruits harvested by moving left and right from the starting position, adjusting for how far you can move in each direction.

# Complexity
- Time complexity:
O(n), where n is the number of fruit positions, because we traverse the list of fruits and perform a few additional calculations.

- Space complexity:
O(N), where N is the maximum position index, to store the cumulative fruits array.

# Code
```csharp []
public class Solution {
    public int MaxTotalFruits(int[][] fruits, int startPos, int k) {
        const int N = 200000;
        int[] pos = new int[N + 1];
        int ans = 0;

        // Populate the pos array with fruit amounts
        foreach (var fruit in fruits) {
            pos[fruit[0]] = fruit[1];
        }

        // Calculate prefix sums
        for (int i = 1; i <= N; i++) {
            pos[i] += pos[i - 1];
        }

        // Check for leftward movements
        for (int i = startPos; i >= Math.Max(startPos - k, 0); i--) {
            int dist = startPos - i;
            int R = startPos + (k - 2 * dist);
            ans = Math.Max(ans, (pos[startPos] - (i > 0 ? pos[i - 1] : 0)) + (pos[Math.Min(R, N)] - pos[startPos]));
        }

        // Check for rightward movements
        for (int i = startPos; i <= Math.Min(startPos + k, N); i++) {
            int dist = i - startPos;
            int R = startPos - (k - 2 * dist);
            int rv = (pos[i] - (startPos > 0 ? pos[startPos - 1] : 0));
            int lv = (startPos > 0 && R > 0) ? pos[startPos - 1] - pos[R - 1] : (startPos > 0 ? pos[startPos - 1] : 0);
            ans = Math.Max(ans, rv + lv);
        }

        return ans;
    }
}

```