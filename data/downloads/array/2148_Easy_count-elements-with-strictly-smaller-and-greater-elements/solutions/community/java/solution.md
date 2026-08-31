# 2 lines of code JAVA | with comentary

**Author:** ion_gn
**Votes:** 16
**Link:** [https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/2523898/](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/2523898/)

---

```
import java.util.Arrays;

class Solution {
    public int countElements(int[] nums) {

        Arrays.sort(nums);
        int k = 0;
        for(int i=1;i< nums.length-1;i++) {
            if(nums[i] > nums[0] && nums[i] < nums[nums.length-1]) k++;
        }
        return k;
    }
}
/*
1.First we need to sort the array,if we do so the first element will not have
a min and the last element will not have a max and because of that we start 
the loop from the second element and we end the loop at length - 2.

2.Next for every element is mandatory to have a min and max to increment the counter
so we do " if(nums[i] > nums[0] && nums[i] < nums[nums.length-1]) k++ ";

PLEASE UPVOTE
*/
```