# C# binary search + splitting subset sums

**Author:** RajaGanji
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-subsequence-sum/solutions/4855687/](https://leetcode.com/problems/closest-subsequence-sum/solutions/4855687/)

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
public class Solution
{
    public int MinAbsDifference(int[] nums, int goal)
    {

        var leftSums = Helper(nums.SkipLast(nums.Length / 2).ToList(), 0, 0, new List<int>());
        var rightSums = Helper(nums.Length % 2 == 0 ? nums.Skip(nums.Length / 2).ToList() : nums.Skip(nums.Length / 2 + 1).ToList(), 0, 0, new List<int>());

        rightSums.Sort();

        int min = int.MaxValue;
        for(int i=0;i< leftSums.Count; i++)
        {
            int low = 0;
            int high = rightSums.Count - 1;
            int target = goal - leftSums[i];
            while (low <= high)
            {
                int mid = (high - low) / 2 + low;
                min=Math.Min(min, Math.Abs(target - rightSums[mid]));
                if (rightSums[mid] > target)
                {
                    high = mid - 1;
                } 
                else if(rightSums[mid] < target)
                {
                    low = mid + 1;
                }
                else
                {
                    return 0;
                }
            }
        }
        return min;
    }
    public List<int> Helper(List<int> nums, int sum, int ind, List<int> sums)
    {
        if(ind >= nums.Count) { sums.Add(sum); return sums; }

        Helper(nums, sum + nums[ind], ind+1, sums);
        Helper(nums, sum, ind +1, sums);

        return sums;
    }
}
```