# Java |  O(nlogn) | beats 100% | simple and straight forward

**Author:** tyro
**Votes:** 19
**Link:** [https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/solutions/1621427/](https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/solutions/1621427/)

---

The basic idea is that you sum the largest k numbers, if the sum is even, return the result directly, otherwise, just replace the smallest even number chosen with the largest odd number in the remaining numbers or replace the smallest odd number chosen with the largest even number in the remaining numbers, which is larger.
```
class Solution {
    public long largestEvenSum(int[] nums, int k) {
        Arrays.sort(nums);
        int minOdd = -1, minEven = -1, maxOdd = -1, maxEven = -1;
        long total = 0, res = -1;
        for(int i = nums.length - 1; i >= nums.length - k; i--) {
            total += nums[i];
            if(nums[i] % 2 == 0) {
                minEven = nums[i];     
            } else {
                minOdd = nums[i];
            }
        }
        if(total % 2 == 0) return total;
        for(int i = 0; i < nums.length - k; i++) {
            if(nums[i] % 2 == 0) {
                maxEven = nums[i];     
            } else {
                maxOdd = nums[i];
            }    
        }
        if(maxOdd != -1 && minEven != -1) res = Math.max(res, total - minEven + maxOdd);
        if(minOdd != -1 && maxEven != -1) res = Math.max(res, total + maxEven - minOdd);
        return res;
    }
}
```