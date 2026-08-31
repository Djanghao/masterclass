# Simple java solution

**Author:** Siddhant_1602
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/4884140/](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/4884140/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public int sumOfEncryptedInt(int[] nums) {
        int sum=0;
        for(int i=0;i<nums.length;i++)
        {
            int val=task(nums[i]);
            sum+=val;
        }
        return sum;
    }
    private int task(int num)
    {
        int dup=num;
        int maxi=0;
        while(dup!=0)
        {
            maxi=Math.max(maxi,dup%10);
            dup/=10;
        }
        String dup1="";
        while(num!=0)
        {
            dup1+=maxi;
            num/=10;
        }
        // System.out.println(dup);
        return Integer.parseInt(dup1);
    }
}
```