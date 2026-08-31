# Solution in Java, C# (beats 100% runtime)

**Author:** yeuhoahuuco
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/5747361/](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/5747361/)

---

# Approach
Because we might need to calculate the sum from nums[i] to nums[j] multiple times, we should use **prefix sum**.

We apply dynamic programming in this problem by considering **three cases** at index i (i >= firstLen + secondLen - 1):
+ The "firstLen" segment contains nums[i], and the "secondLen" segment is a subarray within the range from 0 to i - firstLen. Additionally, to find the maximum sum of the "secondLen" segment, we also need to apply **dynamic programming**.

+ The "secondLen" segment contains nums[i], and the "firstLen" segment is a subarray within the range from 0 to i - secondLen. Additionally, to find the maximum sum of the "firstLen" segment, we also need to apply **dynamic programming**.

+ In the third case, the element at index i is not included in either segment.

Finally, remember that the problem asks us to return the sum of the two segments, "firstLen" and "secondLen".

# Complexity
- Time complexity: O(n)

![image.png](./images/0.png)


# Code
```java []
class Solution {
    public int maxSumTwoNoOverlap(int[] nums, int firstLen, int secondLen) {
        int n = nums.length, m = firstLen + secondLen;
        
        // Calculate prefix sum
        int[] p = new int[n];
        p[0] = nums[0];
        for(int i = 1; i < n; i++)
         p[i] = p[i - 1] + nums[i];
        
        // dp1[i]: in the segment nums[0..i], find the subarray with length firstLen and the largest sum
        // --> dp1[i] = Return this largest sum
        int[] dp1 = new int[n - secondLen + 1];
        dp1[firstLen - 1] = p[firstLen - 1];

        for(int i = firstLen; i < n - secondLen + 1; i++)
          dp1[i] = Math.max(dp1[i - 1], p[i] - p[i - firstLen]);

        // dp2[i]: in the segment nums[0..i], find the subarray with length secondLen and the largest sum
        // --> dp2[i] = Return this largest sum
        int[] dp2 = new int[n - firstLen + 1];
        dp2[secondLen - 1] = p[secondLen - 1];

        for(int i = secondLen; i < n - firstLen + 1; i++)
          dp2[i] = Math.max(dp2[i - 1], p[i] - p[i - secondLen]);

        int maxSum = p[m - 1]; // The sum of the first m elements is obviously p[m - 1]
        for(int i = m; i <= n - 1; i++)
        {
           //-- Case 1: The "firstLen" segment contains the element nums[i]
           int sum1 = dp2[i - firstLen] + (p[i] - p[i - firstLen]);

           //-- Case 2: The "secondLen" segment contains the element nums[i]
           int sum2 = dp1[i - secondLen] + (p[i] - p[i - secondLen]);
           
           // Of course, Case 3: Neither "firstLen" nor "secondLen" contains nums[i]
           // In this case, the sum is maxSum
           maxSum = Math.max(maxSum, Math.max(sum1, sum2));
        }
        
        return maxSum;
    }
}
```
```csharp []
public class Solution {
    public int MaxSumTwoNoOverlap(int[] nums, int firstLen, int secondLen) {
        int n = nums.Length, m = firstLen + secondLen;
        
        // Calculate prefix sum
        int[] p = new int[n];
        p[0] = nums[0];
        for(int i = 1; i < n; i++)
         p[i] = p[i - 1] + nums[i];
        
        // dp1[i]: in the segment nums[0..i], find the subarray with length firstLen and the largest sum
        // --> dp1[i] = Return this largest sum
        int[] dp1 = new int[n - secondLen + 1];
        dp1[firstLen - 1] = p[firstLen - 1];

        for(int i = firstLen; i < n - secondLen + 1; i++)
          dp1[i] = Math.Max(dp1[i - 1], p[i] - p[i - firstLen]);

        // dp2[i]: in the segment nums[0..i], find the subarray with length secondLen and the largest sum
        // --> dp2[i] = Return this largest sum
        int[] dp2 = new int[n - firstLen + 1];
        dp2[secondLen - 1] = p[secondLen - 1];

        for(int i = secondLen; i < n - firstLen + 1; i++)
          dp2[i] = Math.Max(dp2[i - 1], p[i] - p[i - secondLen]);

        int maxSum = p[m - 1]; // The sum of the first m elements is obviously p[m - 1]
        for(int i = m; i <= n - 1; i++)
        {
           //-- Case 1: The "firstLen" segment contains the element nums[i]
           int sum1 = dp2[i - firstLen] + (p[i] - p[i - firstLen]);

           //-- Case 2: The "secondLen" segment contains the element nums[i]
           int sum2 = dp1[i - secondLen] + (p[i] - p[i - secondLen]);
           
           // Of course, Case 3: Neither "firstLen" nor "secondLen" contains nums[i]
           // In this case, the sum is maxSum
           maxSum = Math.Max(maxSum, Math.Max(sum1, sum2));
        }
        
        return maxSum;
    }
}
```