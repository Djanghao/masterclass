# C# | Runtime 181 ms beats 77.42%, Memory 53.36 MB beats 66.13% [EXPLAINED]

**Author:** r9n
**Votes:** 11
**Link:** [https://leetcode.com/problems/subarrays-with-k-different-integers/solutions/5778165/](https://leetcode.com/problems/subarrays-with-k-different-integers/solutions/5778165/)

---

# Intuition
To find subarrays with exactly k different integers, I use the idea that subarrays with exactly k can be found by subtracting subarrays with at most k-1 from those with at most k.

# Approach
Count Subarrays with At Most k Distinct Integers: Use a sliding window technique to track subarrays with up to k distinct integers.

Subtract to Find Exactly k: Subtract the count of subarrays with at most k-1 distinct integers from those with at most k.

# Complexity
- Time complexity:
O(n) \u2013 each element is processed at most twice.

- Space complexity:
O(n) \u2013 for storing counts in a frequency dictionary.

# Code
```csharp []
public class Solution {
    public int SubarraysWithKDistinct(int[] nums, int k) {
        return AtMostKDistinct(nums, k) - AtMostKDistinct(nums, k - 1);
    }
    
    private int AtMostKDistinct(int[] nums, int k) {
        if (k == 0) return 0;

        var count = 0;
        var frequency = new Dictionary<int, int>();
        int left = 0;

        for (int right = 0; right < nums.Length; right++) {
            if (!frequency.ContainsKey(nums[right])) {
                frequency[nums[right]] = 0;
            }
            frequency[nums[right]]++;

            while (frequency.Count > k) {
                frequency[nums[left]]--;
                if (frequency[nums[left]] == 0) {
                    frequency.Remove(nums[left]);
                }
                left++;
            }

            count += right - left + 1;
        }

        return count;
    }
}

```