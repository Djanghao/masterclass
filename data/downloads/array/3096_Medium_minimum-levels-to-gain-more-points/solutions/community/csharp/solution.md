# simple C# program

**Author:** Varun_EA
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/4957467/](https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/4957467/)

---

# Intuition
The problem involves determining the minimum number of levels Danielchandg should play to gain more points than Bob. We need to consider the order in which Danielchandg plays the levels and optimize his score.

# Approach
We\u2019ll calculate the prefix sum of points for both players. For Danielchandg, we\u2019ll add 1 for each level he can clear and subtract 1 for each level he cannot clear.
We\u2019ll iterate through the levels in reverse order (starting from the last level):
Calculate the prefix sum of points for Bob (subtract 1 for each level he can clear and add 1 for each level he cannot clear).
If Danielchandg\u2019s prefix sum at the previous level is greater than Bob\u2019s current prefix sum, update the answer to the current level index.
If no valid answer is found, return -1.

# Complexity
Time complexity: O(n) where n is the number of levels (since we iterate through the levels once).
Space complexity: O(n) for the prefix sum array.

# Code
```
public class Solution {
    public int MinimumLevels(int[] possible) {
        int n = possible.Length;
        int[] preSum = new int[n];
        preSum[0] = possible[0] == 1 ? 1 : -1;

        for (int i = 1; i < n; ++i)
            preSum[i] = preSum[i - 1] + (possible[i] == 1 ? 1 : -1);

        int secondPreSum = 0;
        int ans = -1;

        for (int i = n - 1; i > 0; --i) {
            secondPreSum += (possible[i] == 1 ? 1 : -1);
            if (preSum[i - 1] > secondPreSum)
                ans = i;
        }

        return ans;
    }
}

```