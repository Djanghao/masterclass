# Easy || Short || Clean || Java Solution

**Author:** HimanshuBhoir
**Votes:** 9
**Link:** [https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/3366406/](https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/3366406/)

---


```java []
class Solution {
    public int minNumber(int[] nums1, int[] nums2) {
        int val = Integer.MAX_VALUE;
        for(int i=0; i<nums1.length; i++){
            for(int j=0; j<nums2.length; j++){
                if(nums1[i] == nums2[j])  val = Math.min(val,nums1[i]);
                val = Math.min(val,Math.min(nums1[i]*10+nums2[j],nums2[j]*10+nums1[i]));
            }
        }
        return val;
    }
}
```