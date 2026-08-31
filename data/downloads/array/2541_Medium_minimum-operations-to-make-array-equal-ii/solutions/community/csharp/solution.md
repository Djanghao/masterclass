# Easy C#

**Author:** tungns0695
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/5515723/](https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/5515723/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int startIndex = 0;
    public long MinOperations(int[] nums1, int[] nums2, int k) {
        long sum1 = nums1.Sum(v => (long)v);
        long sum2 = nums2.Sum(v => (long)v);
        if(sum1 != sum2){
            return -1;
        }
        
        long count = 0;
        for(int e = 0; e < nums1.Length; e++){
            if(nums1[e] == nums2[e]){
                continue;
            }
            var diff = Math.Abs(nums1[e] - nums2[e]);
            if(k == 0 || diff % k != 0){
                return -1;
            }
            count+= diff/k;
        }
        return (long)Math.Ceiling((double)count/2);
    }
}
```