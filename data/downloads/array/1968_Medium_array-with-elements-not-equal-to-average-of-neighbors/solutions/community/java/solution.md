# JAVA GREEDY easy peasy

**Author:** Trevor-akshay
**Votes:** 7
**Link:** [https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/1404417/](https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/1404417/)

---

```
class Solution {
    public int[] rearrangeArray(int[] nums) {
       Arrays.sort(nums);
	   // sort in wave format
        for(int i = 0;i<nums.length-1;i+=2){
            int temp = nums[i];
            nums[i] = nums[i+1];
            nums[i+1] = temp;
        }
        return nums;
    }
}