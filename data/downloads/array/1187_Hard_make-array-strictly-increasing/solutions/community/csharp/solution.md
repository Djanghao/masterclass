# C# top-down DP

**Author:** Dmitriy-Maksimov
**Votes:** 2
**Link:** [https://leetcode.com/problems/make-array-strictly-increasing/solutions/3646756/](https://leetcode.com/problems/make-array-strictly-increasing/solutions/3646756/)

---

# Approach
- Sort `arr2`
- `dfs(i, prev)` - the minimum number of operations to make `arr[i..]` sorted (`prev = arr[i - 1]`)
- If key (`(i, prev)`) exists in dp, return it
- Set `cost` to `MaxCost`
- If `arr1[i] > prev` (element `arr1[i]` don't need to be modified), we skipping the element by calling `dfs(i + 1, arr1[i])` and set `cost` to retun value
- Find the index `idx` of the smallest value in arr2 that is greater than prev using binary search. If `idx` is less than length of `arr2`, set `cost` to `min(cost, 1 + dfs(i + 1, arr2[idx]))`
- Set `dp[key] = cost` (memoization)
- Return `cost`
- If `dfs(0, -1)` is less than `MaxCost `, return it. Otherwise, return `-1`.

# Complexity
- Time complexity: e.g. $$O(n \	imes m \	imes log(n))$$
- Space complexity: $$O(n \	imes m)$$

# Code
```
public class Solution
{
    private readonly Dictionary<(int, int), int> _dp = new();
    private const int MaxCost = int.MaxValue - 1;

    public int MakeArrayIncreasing(int[] arr1, int[] arr2)
    {
        Array.Sort(arr2);

        var answer = dfs(0, -1, arr1, arr2);

        return answer < MaxCost ? answer : -1;
    }

    private int dfs(int i, int prev, int[] arr1, int[] arr2)
    {
        if (i == arr1.Length)
        {
            return 0;
        }

        var key = (i, prev);

        if (_dp.TryGetValue(key, out var cached))
        {
            return cached;
        }

        var cost = MaxCost;

        // If arr1[i] is already greater than prev, we can leave it be.
        if (arr1[i] > prev)
        {
            cost = dfs(i + 1, arr1[i], arr1, arr2);
        }

        // Find a replacement with the smallest value in arr2.
        var idx = bisectRight(arr2, prev);

        // Replace arr1[i], with a cost of 1 operation.
        if (idx < arr2.Length)
        {
            cost = Math.Min(cost, 1 + dfs(i + 1, arr2[idx], arr1, arr2));
        }

        return _dp[key] =  cost;
    }

    // Returns an insertion point which comes after (to the right of) any existing entries of `value` in `arr`
    private static int bisectRight(int[] arr, int value)
    {
        var left = 0;
        var right = arr.Length;

        while (left < right)
        {
            var mid = left + (right - left) / 2;
            
            if (arr[mid] <= value)
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