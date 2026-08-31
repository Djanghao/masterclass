# One line C# solution

**Author:** volynetstyle
**Votes:** 5
**Link:** [https://leetcode.com/problems/build-array-from-permutation/solutions/3107215/](https://leetcode.com/problems/build-array-from-permutation/solutions/3107215/)

---

# Code
```
public class Solution {
    public int[] BuildArray(int[] nums) {
        return nums.Select(x => nums[x]).ToArray();
    }
}
```