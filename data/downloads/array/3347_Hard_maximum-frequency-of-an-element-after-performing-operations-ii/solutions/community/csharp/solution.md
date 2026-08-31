# 🎯 Sliding Window (I believe we suffered the same)

**Author:** ivanvinogradov207
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii/solutions/6028075/](https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii/solutions/6028075/)

---


## Intuition:
The goal is to maximize the frequency of a number in an array by incrementing elements to match other values, within a given operation limit. Sorting the array and using a sliding window approach helps us efficiently find the maximum frequency we can achieve under these constraints.

## Approach:
1. **Sort the Array**:
   - Sorting allows us to work with contiguous elements in a window, making it easier to calculate the required operations to equalize elements within this window.

2. **Sliding Window with Two Pointers**:
   - Use two pointers (`left` and `right`) to define a window of elements.
   - For each `mid` element in this window, calculate the maximum frequency achievable with the allowed number of operations.
   - Adjust the `left` pointer when the difference between `nums[mid]` and `nums[left]` exceeds `k`.

3. **Track Maximum Frequency**:
   - For each valid window (where the difference is within `k`), update `maxFrequency` if the frequency achieved is higher.

## Complexity:
- **Time complexity**:  
  $$O(n \\log n)$$ \u2014 Sorting the array takes `O(n log n)`, and the sliding window process is `O(n)`.

- **Space complexity**:  
  $$O(1)$$ \u2014 Uses only a few variables for counting and sliding window manipulation.

# Code:
```csharp []
public class Solution {
    public int MaxFrequency(int[] nums, int k, int numOperations) {
        var n = nums.Length;
        if (n == 1)
            return 1;
        
        Array.Sort(nums);
        
        var counts = new Dictionary<int, int>();
        foreach (var num in nums)
        {
            if (!counts.ContainsKey(num))
                counts[num] = 0;

            counts[num]++;
        }

        int left = 0, right = 1;
        var maxFrequency = 1;

        for (int mid = 1; mid < n; mid++)
        {
            while (nums[mid] - nums[left] > k)
                left++;

            while (right+1 < n && nums[right+1] - nums[mid] <= k)
                right++;

            var midCount = counts[nums[mid]];
            var windowSize = right - left + 1 - midCount;
            var operatedCount = Math.Min(windowSize, numOperations);
            maxFrequency = Math.Max(maxFrequency, operatedCount + midCount);
        }

        left = 0;
        for (right = maxFrequency-1; right < n; right++)
        {
            var mid = (nums[right] + nums[left]) / 2;

            while (mid - nums[left] > k || nums[right] - mid > k)
            {
                left++;
                mid = (nums[right] + nums[left]) / 2;
            }

            var windowSize = right - left + 1;
            var operatedCount = Math.Min(windowSize, numOperations);
            maxFrequency = Math.Max(maxFrequency, operatedCount);
        }
    
        return maxFrequency;
    }
}


//
// 
//     num operations = 3
//      k = 100
//                    1 2 3 4   5  6 20 20
//                    4 5 6 20 20 20    
//
//                    1 2 3 104 105 106 120 120
//                    3 3 3 120 120 120
// 
//      numoper = 100
//      k = 12
//                    1, 2, 3, 100, 1000, 100, 1000, 100, 1000, 100, 1000, 100, 1000, 100, 1000, 100, 1000, 100, 1000, 100, 1000
//                      

```