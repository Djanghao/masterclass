# C# time O(n), memory O(1),  10-line solution

**Author:** 7bnx
**Votes:** 9
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/3541541/](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/3541541/)

---

# Code
```
public class Solution {
    public int RemoveDuplicates(int[] nums) {
        int count = 0;
        bool isPrevTwice = false;
        for(int i = 1; i < nums.Length; i++)
        {
            bool isCurrentTwice = nums[count] == nums[i];
            if(!isCurrentTwice || !isPrevTwice)
                nums[++count] = nums[i];
            isPrevTwice = isCurrentTwice;
        }
        return count + 1;
    }
}
```