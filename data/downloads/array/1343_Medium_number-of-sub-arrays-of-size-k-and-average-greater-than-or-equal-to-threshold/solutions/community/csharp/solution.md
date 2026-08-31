# C#, beats Runtime 225 ms 94.06% and Memory (52.27 MB) beats 79.21%

**Author:** r9n
**Votes:** 10
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/5669553/](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/5669553/)

---

# Intuition
The intuition behind the sliding window approach is to efficiently manage the sum of a fixed-size subarray as it moves through the array. Instead of recalculating the sum from scratch for each new subarray, the algorithm updates the sum by subtracting the element that's leaving the window and adding the element that's entering. This way, you keep track of the sum in constant time, making the approach efficient for large arrays.

# Approach
The sliding window approach is ideal for this problem because it efficiently calculates the sum of each subarray of size k without redundant recalculations. By maintaining a running total of the current window's sum and updating it as the window slides through the array, the approach achieves linear time complexity. This minimizes overhead and ensures that each subarray is processed in constant time, making it both time and space efficient.

# Complexity
- Time complexity:
O(n): The solution uses a sliding window approach to compute the sum of each subarray of size k in linear time. Each element is added and removed from the window sum exactly once, so the time complexity is O(n), where n is the length of the array.

- Space complexity:
O(1): The solution uses a fixed amount of extra space (for variables like windowSum, count, etc.) that does not scale with the input size. Thus, the space complexity is O(1).

# Code
```csharp []
public class Solution
{
    public int NumOfSubarrays(int[] arr, int k, int threshold)
    {
        int count = 0;
        int n = arr.Length;
        int requiredSum = threshold * k;
        
        // Initialize the sum of the first window of size k
        int windowSum = 0;
        for (int i = 0; i < k; i++)
        {
            windowSum += arr[i];
        }
        
        // Check if the initial window meets the condition
        if (windowSum >= requiredSum)
        {
            count++;
        }
        
        // Slide the window across the array
        for (int i = k; i < n; i++)
        {
            windowSum += arr[i] - arr[i - k];
            if (windowSum >= requiredSum)
            {
                count++;
            }
        }
        
        return count;
    }
}

```