# O(n), O(1), Beets 100%. simple

**Author:** 3S_AKB
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/solutions/3823947/](https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/solutions/3823947/)

---


# Code
```
public class Solution {
    public int MaxNonDecreasingLength(int[] nums1, int[] nums2) {        
        int a1 = 1;
        int a2 = 1;
        int res = 1;
        for (int i = 1; i < nums1.Length; i++)
        {          
            int b1 = a1;
            int b2 = a2;  
            a1 = Math.Max(
                   nums1[i] >= nums1[i - 1] ? b1 : 0,
                   nums1[i] >= nums2[i - 1] ? b2 : 0) + 1;
            a2 = Math.Max(
                   nums2[i] >= nums2[i - 1] ? b2 : 0,
                   nums2[i] >= nums1[i - 1] ? b1 : 0) + 1;         
            res = Math.Max(res, Math.Max(a1, a2));            
        }
        
        return res;
    }
}
```