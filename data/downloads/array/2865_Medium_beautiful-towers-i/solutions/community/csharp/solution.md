# Solution C#

**Author:** bogdanonline444
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-towers-i/solutions/5920074/](https://leetcode.com/problems/beautiful-towers-i/solutions/5920074/)

---


# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public long MaximumSumOfHeights(int[] heights) {
        long maxSum = 0;
        for (int peak = 0; peak < heights.Length; peak++) 
        {
            long sum = heights[peak];
            int minHeight = heights[peak];

            for (int i = peak - 1; i >= 0; i--) 
            {
                minHeight = Math.Min(minHeight, heights[i]);
                sum += minHeight;
            }

            minHeight = heights[peak];

            for (int i = peak + 1; i < heights.Length; i++) 
            {
                minHeight = Math.Min(minHeight, heights[i]);
                sum += minHeight;
            }

            maxSum = Math.Max(maxSum, sum);
        }
        return maxSum;
    }
}
```
![89f26eaf70fa927a79d4793441425859.jpg](./images/0.jpeg)
