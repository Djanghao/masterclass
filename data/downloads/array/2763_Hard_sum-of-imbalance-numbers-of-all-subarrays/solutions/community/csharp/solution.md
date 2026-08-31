# C# Solution | Easy to understand, Binary search

**Author:** TonyTroeff
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-imbalance-numbers-of-all-subarrays/solutions/3713244/](https://leetcode.com/problems/sum-of-imbalance-numbers-of-all-subarrays/solutions/3713244/)

---

# Intuition
It is obvious that we should somehow iterate over all subarrays, sort them and calculate the imbalance number for each of them. However, it is even more obvious that this approach would be very slow.

# Approach
What we can do to optimize the intuitive approach, is to use binary search to find the insert position for each every next element that should be considered. Upon inserting it, we should check if this insertions would cause some new or bread some existing imbalances.

And the last thing that should be noted is that we can use the imbalance number of shorter subarrays (as log as they start from the same index) in order to calculate the imbalance number for longer subarrays.

# Complexity
- Time complexity: $O(n^2*log(n))$
- Space complexity: $O(n)$

# Code
```
public class Solution {
    public int SumImbalanceNumbers(int[] nums) {
        List<int> l = new List<int>(capacity: nums.Length);

        int ans = 0;
        for (int i = 0; i < nums.Length - 1; i++) {
            l.Clear();

            int accumulator = 0;
            for (int j = i; j < nums.Length; j++)
            {
                int pos = l.BinarySearch(nums[j]);
                if (pos < 0) pos = ~pos;

                l.Insert(pos, nums[j]);
                bool hasNext = pos + 1 < l.Count;
                bool hasPrev = pos - 1 >= 0;

                if (hasNext && l[pos + 1] - l[pos] > 1) accumulator++;
                if (hasPrev && l[pos] - l[pos - 1] > 1) accumulator++;
                if (hasNext && hasPrev && l[pos + 1] - l[pos - 1] > 1) accumulator--;

                ans += accumulator;
            }
        }

        return ans;
    }
}
```