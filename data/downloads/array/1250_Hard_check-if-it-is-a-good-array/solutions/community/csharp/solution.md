# C# Solution using Gcd

**Author:** mohamedAbdelety
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/3519562/](https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/3519562/)

---


# Complexity
- Time complexity:
O(N log max)
- Space complexity:
O(1)
# Code
```
public class Solution {
    public bool IsGoodArray(int[] nums) {
        int gcd(int a,int b) => (a == 0) ? b : gcd(b % a, a);
        int curGcd = nums[0];
        for(int i = 1; i < nums.Length;i++){
            curGcd = gcd(curGcd,nums[i]);
            if(curGcd == 1) return true;
        } 
        return curGcd == 1;
    }
}
```