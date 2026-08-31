# C#

**Author:** neildeng0705
**Votes:** 4
**Link:** [https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/2722552/](https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/2722552/)

---



# Code
```
public class Solution 
{
    public int[] CreateTargetArray(int[] nums, int[] index) 
    {
        List<int> lst = new List<int>();

        for (int i=0; i<nums.Length; i++)
        {
            lst.Insert(index[i], nums[i]);
        }  

        return lst.ToArray();   
    }
}
```