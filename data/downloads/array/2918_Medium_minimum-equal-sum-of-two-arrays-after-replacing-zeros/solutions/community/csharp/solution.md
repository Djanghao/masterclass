# My Easy Solution

**Author:** aszx20056
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solutions/4229906/](https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solutions/4229906/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
public class Solution {
    public long MinSum(int[] nums1, int[] nums2) {
            long n1sum=0,n2sum=0;
            int n1zc = 0, n2zc = 0;
            foreach (var n in nums1)
            {
                n1sum+=n;
                if(n==0) { n1zc++; }
            }
            foreach (var n in nums2)
            {
                n2sum+=n;
                if (n == 0) { n2zc++; }
            }
            if (n1zc == 0 && n2sum + n2zc > n1sum)
                return -1;
            if (n2zc == 0 && n1sum + n1zc > n2sum)
                return -1;
            return Math.Max(n1sum + n1zc, n2sum + n2zc);
    }
}
```