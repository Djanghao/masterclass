# Left and Right Iteration

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-good-indices/solutions/4988763/](https://leetcode.com/problems/find-all-good-indices/solutions/4988763/)

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
    public IList<int> GoodIndices(int[] nums, int k) {
        int n = nums.Length;
        int[] left = new int[n];
        int[] right = new int[n];
        int current = 1;
        for(int i=1; i<n; i++)
        {
            if (current >= k)
            {
                left[i] = 1;
            }
            if (nums[i] <= nums[i-1])
            {
                current++;
            } else {
                current = 1;
            }
        }

         current = 1;
        for(int i=n-2; i>=0; i--)
        {
            if (current >= k)
            {
                right[i] = 1;
            }
            if (nums[i] <= nums[i+1])
            {
                current++;
            } else {
                current = 1;
            }
        }
        IList<int> res = new List<int>();
        for(int i=0; i<n; i++)
        {
            if (left[i] == 1 && right[i] == 1)
            {
                res.Add(i);
            }
        }
        return res;
    }
}
```