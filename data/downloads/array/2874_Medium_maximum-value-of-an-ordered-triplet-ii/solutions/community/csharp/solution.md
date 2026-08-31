# Precomputed Maximums

**Author:** mansoorafzal
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/solutions/6131514/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/solutions/6131514/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```csharp []
public class Solution {
    public long MaximumTripletValue(int[] nums) {
        int n = nums.Length;
        long[] left = new long[n];
        long[] right = new long[n];
        long product = long.MinValue;

        left[0] = nums[0];
        right[n - 1] = nums[n - 1];

        for (int i = 1; i < n; i++) {
            left[i] = Math.Max(left[i - 1], nums[i - 1]);
        }

        for (int i = n - 2; i >= 0; i--) {
            right[i] = Math.Max(right[i + 1], nums[i + 1]);
        }

        for (int i = 1; i < n - 1; i++) {
            product = Math.Max(product, (left[i] - nums[i]) * right[i]);
        }

        return product > 0 ? product : 0;
    }
}
```