# C# Solution Faster than 100% || O(n ^ 2 log max)

**Author:** mohamedAbdelety
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/3517048/](https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/3517048/)

---

```
public class Solution {
    public int SubarrayGCD(int[] nums, int k) {
        int gcd(int a,int b) => (b == 0) ? a : gcd(b,a % b); 
        int res = 0;
        for(int i = 0; i < nums.Length;i++){
            int curGcd = nums[i], j = i;
            while(j < nums.Length && curGcd >= k){
                curGcd = gcd(curGcd,nums[j]);
                if(curGcd == k)res++;
                j++;
            }
        }
        return res;
    }
}
```