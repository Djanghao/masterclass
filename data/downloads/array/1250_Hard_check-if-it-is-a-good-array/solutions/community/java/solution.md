# Java GCD Solution

**Author:** hiteshprajapati8895
**Votes:** 6
**Link:** [https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/1718093/](https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/1718093/)

---

```
class Solution {
    public boolean isGoodArray(int[] nums) {
        int gcd = nums[0];
        for(int i = 1; i<nums.length; i++){
            gcd = gcd(gcd, nums[i]);
            if(gcd == 1)
                return true;
        }
        return gcd==1;
    }
    public int gcd(int a, int b){
        if(b==0)
            return a;
        return gcd(b,a%b);
    }
}