# Sorting Array Sol

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-the-prefix-sum-non-negative/solutions/4677207/](https://leetcode.com/problems/make-the-prefix-sum-non-negative/solutions/4677207/)

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
```
public class Solution {
    public int MakePrefSumNonNegative(int[] nums) {
        long sum = 0;
        int operation = 0;
        int n = nums.Length;
        int smallest = 0;
        List<int> negative = new List<int>();
        for(int i=0;i<n;i++)
        {
            sum += (long)nums[i];
            if (nums[i] < 0)
            {
                negative.Add(nums[i]);
            }
            if (sum < 0)
            {
                negative.Sort();
                sum -= negative[0];
                negative.RemoveAt(0);
                operation++;
                continue;
            }
            smallest = Math.Min(smallest, nums[i]);
        }
        return operation;
    }
}
```