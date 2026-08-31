# outlier = sum - 2s

**Author:** mansoorafzal
**Votes:** 0
**Link:** [https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/solutions/6126523/](https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/solutions/6126523/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```csharp []
public class Solution {
    public int GetLargestOutlier(int[] nums) {
         int n = nums.Length;
         Dictionary<int, int> frequency = new Dictionary<int, int>();
         int sum = 0;
         int outlier = Int32.MinValue;

         for (int i = 0; i < n; i++) {
            sum += nums[i];

            if (frequency.ContainsKey(nums[i])) {
                frequency[nums[i]]++;
            }
            else {
                frequency[nums[i]] = 1;
            }
         }
         
         // all elements + sum element + outlier = sum
         // outlier = sum - all elements - sum element
         // outlier = sum - s - s [sum of all elements is equal to sum element]
         // outlier = sum - 2s

         for (int i = 0; i < n; i++) {
            int o = sum - 2 * nums[i];

            if (!frequency.ContainsKey(o)) {
                continue;
            }

            if (o == nums[i] && frequency[o] < 2) {
                continue;
            }

            outlier = Math.Max(outlier, o);
         }

         return outlier;
    }
}
```