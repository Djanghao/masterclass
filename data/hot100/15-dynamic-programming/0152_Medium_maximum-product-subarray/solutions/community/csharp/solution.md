# [C#]  Fresh approach, extremely easy O(n) implementation, can be translated to c++, Java

**Author:** diptoiem
**Votes:** 15
**Link:** [https://leetcode.com/problems/maximum-product-subarray/solutions/841691/](https://leetcode.com/problems/maximum-product-subarray/solutions/841691/)

---

If there is no zero in an array, the solution is always one of the cumulative products starting from each ends. i.e.
For -2,3,3,-1,-5 :
Cumulative products from left end: -2,-6,-18,18,-90
Same from right end: -5,5,15,45,-90
Ans: max of all = 45

We need to do this for each segment devided by one or more zeroes.

```
public class Solution {
    public int MaxProduct(int[] nums) {
        int ans = nums[0];
        int n = nums.Count();
        int p = 1, q=1;
        for(int i=0;i<n;i++){
		    // reset to 1 when the product becomes zero
            p = (p==0?1:p)*nums[i];
            q = (q==0?1:q)*nums[n-1-i];
            ans = Math.Max(ans,Math.Max(p,q));
        }
        
        return ans;
    }
}
```