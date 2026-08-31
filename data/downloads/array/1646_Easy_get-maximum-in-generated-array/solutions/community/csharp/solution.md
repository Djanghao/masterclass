# 📈  1646. Get Maximum in Generated Array

**Author:** muqimjon
**Votes:** 1
**Link:** [https://leetcode.com/problems/get-maximum-in-generated-array/solutions/4735761/](https://leetcode.com/problems/get-maximum-in-generated-array/solutions/4735761/)

---

# Intuition
The problem follows a simple pattern where each element in the array is generated based on specific rules defined in the problem statement.

# Approach
To solve the problem, we can iterate through the range [0, n], generating each element of the array according to the given rules. We maintain a variable to track the maximum element encountered during the generation process.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```csharp
public class Solution {
    public int GetMaximumGenerated(int n) {
        if (n == 0) return 0;
        
        int[] nums = new int[n + 1];
        nums[1] = 1;
        int max = 1;
        
        for (int i = 2; i <= n; i++) {
            nums[i] = nums[i / 2] + i % 2 * nums[i / 2 + 1];
            max = Math.Max(max, nums[i]);
        }
        
        return max;
    }
}
```
