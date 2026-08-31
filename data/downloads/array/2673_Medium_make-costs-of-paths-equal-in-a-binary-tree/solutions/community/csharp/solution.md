# C#, DFS

**Author:** CDev
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/3495176/](https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/3495176/)

---

# Complexity
- Time complexity: $$O(n)$$ 

- Space complexity: $$O(n)$$ 

# Code
```
public class Solution 
{
    int result;
    public int MinIncrements(int n, int[] cost) 
    {
        result = 0;
        DFS(1, n, cost);
        return result;
    }

    private int DFS(int curr, int n, int[] cost)
    {
        if (curr > n / 2)
            return cost[curr - 1];
        int left = DFS(2 * curr, n, cost);
        int right = DFS(2 * curr + 1, n, cost);
        result += Math.Abs(right - left);
        return Math.Max(left, right) + cost[curr - 1];
    }
}
```