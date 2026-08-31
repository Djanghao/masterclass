# Easy C# solution

**Author:** OumaimaChmissi
**Votes:** 15
**Link:** [https://leetcode.com/problems/container-with-most-water/solutions/2088376/](https://leetcode.com/problems/container-with-most-water/solutions/2088376/)

---

```
public class Solution {
    public int MaxArea(int[] height) {
        int l=0,
            r=height.Length-1,
            current_max=0,
            max=0;
        while(l<r)
        {
             current_max= (r-l)*Math.Min(height[l],height[r]); 
             if(current_max>max) 
                 max= current_max;
				 
             if(height[l]<=height[r])
                 l++;
             else
                r--;
         }
        
        return max;
    }
}
```