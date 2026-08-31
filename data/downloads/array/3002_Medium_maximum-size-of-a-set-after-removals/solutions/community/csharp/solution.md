# C# code, using Set operations

**Author:** shubhamkr1
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4561583/](https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4561583/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We just check how many elements are unique to set 1 and set 2. Then we check if number of unique elements is less than (size of array)/2.
[We can only TAKE n/2 unique elements from one array]
We then add common elements between set 1 and set 2 and compare the size with (size of array)/2

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(m+n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(m) + O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MaximumSetSize(int[] nums1, int[] nums2) {
        var set1 = new HashSet<int>(nums1);
        var set2 = new HashSet<int>(nums2);

        var diff1 = set1.Except(set2);
        var diff2 = set2.Except(set1);

        var result = Math.Min(diff1.Count(), nums1.Length/2)
                    + Math.Min(diff2.Count(),nums2.Length/2);
        var shared = set1.Intersect(set2);

        return Math.Min(result + shared.Count(), nums1.Length);

    }
}
```