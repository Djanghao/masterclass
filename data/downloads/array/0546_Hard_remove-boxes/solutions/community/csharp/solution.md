# DP

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-boxes/solutions/5960129/](https://leetcode.com/problems/remove-boxes/solutions/5960129/)

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
```csharp []
public class Solution {
    private int BackTracking(int[] boxes, Dictionary<string, int> dp, int start, int end, int cnt)
    {
        if(start > end)
            return 0;

        string key = start + ","+end+","+cnt;
        if(dp.ContainsKey(key))
            return dp[key];

        while(end > start && boxes[end] == boxes[end-1]) // dup boxes from right
        {
            end--;
            cnt++;
        }

        int points = (cnt+1)*(cnt+1) + BackTracking(boxes, dp, start, end-1, 0); // points earned in this layer
        for(int i = start; i < end; i++)
        {
            if(boxes[i] == boxes[end])
            {
                points = Math.Max(points, BackTracking(boxes, dp, start, i, cnt+1) + BackTracking(boxes, dp, i+1, end-1, 0)); // split from i
            }
        }

        dp.Add(key, points);
        return points;
    }

    public int RemoveBoxes(int[] boxes) {
        int len = boxes.Length;
        Dictionary<string, int> dp = new();
        
        return BackTracking(boxes, dp, 0, len-1, 0);
    }
}
```