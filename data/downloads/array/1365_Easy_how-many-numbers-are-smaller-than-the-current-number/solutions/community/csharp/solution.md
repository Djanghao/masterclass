# C#, Sort

**Author:** sagar9950
**Votes:** 3
**Link:** [https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/3425488/](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/3425488/)

---


# Code
```
public class Solution {
    public int[] SmallerNumbersThanCurrent(int[] nums) {
        var list = nums.ToList();

        list.Sort();

        var res = new int[nums.Length];

        for (int i = 0; i < nums.Length; i++) {
            res[i] = list.IndexOf(nums[i]);
        }

        return res;
    }
}
```