# Java two pointer solution simple easy to understand O(n) O(1)

**Author:** shivamshah
**Votes:** 14
**Link:** [https://leetcode.com/problems/get-the-maximum-score/solutions/768258/](https://leetcode.com/problems/get-the-maximum-score/solutions/768258/)

---

```
class Solution {
    public int maxSum(int[] nums1, int[] nums2) {
        long currSum = 0, sum1 = 0, sum2 = 0;
        int i = 0;
        int j = 0;
        while(i < nums1.length && j < nums2.length){
            if(nums1[i] == nums2[j]) {
                currSum += Math.max(sum1, sum2) + nums2[j];
                sum1 = 0;
                sum2 = 0;
                i++;
                j++;
            }
            else if(nums1[i] < nums2[j]){
                sum1 += nums1[i++];
            } else {
                sum2 += nums2[j++];
            }
        }
       
        while(i < nums1.length){
            sum1 += nums1[i++];
        }
        while(j < nums2.length){
            sum2 += nums2[j++];
        }
        return (int)((currSum + Math.max(sum1, sum2)) % 1000000007);
    }
}
```