# C# Simple Solution

**Author:** nazir_cinu
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/1291107/](https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/1291107/)

---

```
public class Solution {
    public int MinProductSum(int[] nums1, int[] nums2) 
    {
        Array.Sort(nums1);
        Array.Sort(nums2,(x,y)=>y-x);
        
        int sum = 0;
        
        for(int i=0;i<nums1.Length;i++)
        {
            sum+=nums1[i]*nums2[i];
        }
        
        return sum;
    }
}
```