# EASY 1ms 99.88% O(N) SOLUTION WITHOUT SORTING

**Author:** shumakhmanazarov
**Votes:** 28
**Link:** [https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/1786754/](https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/1786754/)

---

```
class Solution {
    public int maxProductDifference(int[] nums) {
        int max1 = Integer.MIN_VALUE;
        int max2 = max1;

        int min1 = Integer.MAX_VALUE;
        int min2 = min1;
        for (int i = 0; i < nums.length; i++) {
            if (max1 < nums[i]) {
                max2 = max1;
                max1 = nums[i];
            } else if(nums[i] > max2)
                max2 = nums[i];

            if(min1 > nums[i]){
                min2 = min1;
                min1 = nums[i];
            }else if (nums[i] < min2)
                min2 = nums[i];
        }
        
        return (max1 * max2) - (min1 * min2);
    }
}
```
PLEASE ***UPVOTE***, if you find this solution helpful! :D