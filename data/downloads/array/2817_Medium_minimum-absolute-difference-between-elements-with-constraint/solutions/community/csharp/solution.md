# C# || Using ImmutableSortedSet

**Author:** kirsider
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/3906052/](https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/3906052/)

---

# Intuition
Immutable Sorted Set, unlike a regular Sorted Set, allows us to access an element by index. However, when the ImmutableSortedSet is modified (adding or removing an element), a new collection is created each time. To get around this limitation, we can use ImmutableSortedSet<T>.Builder, which maintains the same functionality, but allows us to effectively modify the collection.

Reference: [ImmutableSortedSet\\<T>](https://learn.microsoft.com/en-us/dotnet/api/system.collections.immutable.immutablesortedset-1?view=net-7.0)
# Approach
<!-- Describe your approach to solving the problem. -->
1. Iterate from `x` to `n`
2. Add elements that are at least `x` indices apart from current element into our set
3. Find the nearest element to current element from the set using binary search
4. Update result

# Complexity
- Time complexity:$$O(n \\log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
using System.Collections.Immutable;

public class Solution 
{
    public int MinAbsoluteDifference(IList<int> nums, int x) 
    {
        var n = nums.Count;
        var result = int.MaxValue;
        var set = ImmutableSortedSet<int>.Empty.ToBuilder();

        for (int i = x; i < n; i++)
        {
            var j = i - x;
            set.Add(nums[j]);
            
            var nearest = FindNearest(set, nums[i]);
            var distance = Math.Abs(nearest - nums[i]);
    
            result = Math.Min(result, distance);   
        }

        return result;
    }

    public int FindNearest(ImmutableSortedSet<int>.Builder set, int target)
    {
        int n = set.Count;
        int l = 0, r = n;

        while (l < r)
        {
            var m = (l + r) / 2;

            if (set[m] < target)
                l = m + 1;
            else
                r = m;
        }

        if (n == 0) return int.MaxValue;
        if (l == 0) return set[0];
        if (l == n) return set[n - 1];

        return Math.Abs(set[l] - target) > Math.Abs(set[l - 1] - target) ? set[l - 1] : set[l];
    }
}
```