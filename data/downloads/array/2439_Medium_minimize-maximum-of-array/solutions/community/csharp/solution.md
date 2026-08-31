# C# | O(n)

**Author:** icyrainz
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimize-maximum-of-array/solutions/3381313/](https://leetcode.com/problems/minimize-maximum-of-array/solutions/3381313/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Get the total sum of all elements then iterate from end to the beginning. At each index, try to get the maximum between current min and the max possible value that would be if the sum could be evenly distributed to all cells up to that point (i+1). This is calculated by getting the ceiling of sum / total cells.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MinimizeArrayValue(int[] nums) {
        long ans = 0;
        long sum = 0;
        for (var i = 0; i < nums.Length; i++) {
            sum += nums[i];
        }

        for (var i = nums.Length-1; i >= 0; i--) {
            ans = Math.Max(ans, (long)Math.Ceiling(sum * 1.0 / (i+1)));
            sum -= nums[i];    
        }

        return (int)ans;
    }
}
```