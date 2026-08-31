# [Java] ✅Fastest Solution || 100% Big O(n)

**Author:** deleted_user
**Votes:** 9
**Link:** [https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/2759159/](https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/2759159/)

---


# Code
```
class Solution {
    public int averageValue(int[] nums) {
        int sum = 0;
        int count = 0;
        for(int num:nums)
            if (num%6==0) {
                sum += num;
                count++;
            }
        return count==0?0:Math.round(sum/count);
    }
}
```