# A Simple C# Solution

**Author:** deleted_user
**Votes:** 13
**Link:** [https://leetcode.com/problems/rotate-array/solutions/4003876/](https://leetcode.com/problems/rotate-array/solutions/4003876/)

---



# Code
```
public class Solution 
{
    public void Rotate(int[] nums, int k) 
    {
            k = k % nums.Length;
            Array.Reverse(nums);
            Array.Reverse(nums, 0, k);
            Array.Reverse(nums, k, nums.Length-k);
    }
}
```