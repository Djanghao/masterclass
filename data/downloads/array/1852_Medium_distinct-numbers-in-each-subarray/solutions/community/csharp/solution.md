# c#, Sliding Window

**Author:** bytchenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/3783553/](https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/3783553/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Here we can use sliding window (of size `k`) approach while counting frequency: on each window move we remove left item from frequency count and add the right item. 

# Approach
<!-- Describe your approach to solving the problem. -->
Sliding window of size `k` with frequency count

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
public class Solution {
    public int[] DistinctNumbers(int[] nums, int k) {
        int[] result = new int[nums.Length + 1 - k];

        var freq = nums
          .Take(k)
          .GroupBy(item => item)
          .ToDictionary(group => group.Key, group => group.Count());

        result[0] = freq.Keys.Count;

        for (int i = 1; i < result.Length; ++i) {
            if (!freq.TryAdd(nums[i + k - 1], 1))
               freq[nums[i + k - 1]] += 1; 

            freq[nums[i - 1]] -= 1;

            if (freq[nums[i - 1]] == 0)
               freq.Remove(nums[i - 1]);

            result[i] = freq.Keys.Count;
        }

        return result;  
    }
}
```