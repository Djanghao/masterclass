# C# Solution for Maximum Number of Events that can be Attended II Problem

**Author:** Aman_Raj_Sinha
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/3769152/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/3769152/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to maximize the sum of values obtained by attending events within the given constraints. To achieve this, we need to consider different combinations of events while respecting the constraints.

# Approach
<!-- Describe your approach to solving the problem. -->
- Sort the events based on their start days in ascending order.
- Use a top-down dynamic programming approach with memoization.
- Define a 2D memoization array, dp[count][curIndex], where count represents the remaining number of events that can be attended and curIndex represents the current event index.
- Implement a recursive function, DFS, that considers two options for each event: attending or skipping it.
- In the DFS function, if the base cases are reached (no more events or count is 0), return 0.
- Check if the result for the current combination of count and curIndex is already calculated and stored in the memoization array. If so, return the stored result.
- Find the next available event index, nextIndex, using the BisectRight function, which performs a binary search on the sorted events array based on the current event's end day.
- Calculate the maximum value between attending the current event (events[curIndex][2] + DFS(nextIndex, count - 1)) and skipping the current event (DFS(curIndex + 1, count)).
- Store the calculated result in the memoization array for future reference and return the result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the solution depends on the number of events, n, and the maximum number of events that can be attended, k. Sorting the events takes O(n log n) time. The recursive function DFS is called for each event and each possible value of count from k to 0. Therefore, the time complexity is O(n * k). Additionally, the BisectRight function performs a binary search, which takes O(log n) time. Overall, the time complexity of the solution is O(n log n + n * k * log n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is determined by the memoization array dp. It has dimensions of (k + 1) x n, requiring O(k * n) space. Additionally, the sorting operation takes O(n) space. Therefore, the overall space complexity is O(k * n).

# Code
```
public class Solution {
    public int MaxValue(int[][] events, int k) {
        Array.Sort(events, (a, b) => a[0] - b[0]);
        int n = events.Length;

        int[][] dp = new int[k + 1][];
        for (int i = 0; i <= k; i++)
        {
            dp[i] = new int[n];
            Array.Fill(dp[i], -1);
        }

        return DFS(0, k, events, dp);
    }
    private int DFS(int curIndex, int count, int[][] events, int[][] dp)
    {
        if (count == 0 || curIndex == events.Length)
        {
            return 0;
        }
        if (dp[count][curIndex] != -1)
        {
            return dp[count][curIndex];
        }
        int nextIndex = BisectRight(events, events[curIndex][1]);
        dp[count][curIndex] = Math.Max(DFS(curIndex + 1, count, events, dp), events[curIndex][2] + DFS(nextIndex, count - 1, events, dp));
        return dp[count][curIndex];
    }

    public static int BisectRight(int[][] events, int target)
    {
        int left = 0, right = events.Length;
        while (left < right)
        {
            int mid = (left + right) / 2;
            if (events[mid][0] <= target)
            {
                left = mid + 1;
            }
            else
            {
                right = mid;
            }
        }
        return left;
    }
}
```