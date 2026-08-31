# Simple java solution

**Author:** Siddhant_1602
**Votes:** 38
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/solutions/4414721/](https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/solutions/4414721/)

---

# Complexity
- Time complexity: $$O(n log n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public long minimumCost(int[] nums) {
        Arrays.sort(nums);
        int med=0,len=nums.length;
        med=nums[len/2];
        int num1=palindrome1(med),num2=palindrome2(med);
        long sum1=findsum(nums,num1),sum2=findsum(nums,num2);
        return sum1 > sum2 ? sum2 : sum1;
    }
    private int palindrome1(int num)
    {
        while(!check(num))
        {
            num--;
        }
        return  num;
    }
    private int palindrome2(int num)
    {
        while(!check(num))
        {
            num++;
        }
        return num;
    }
    private boolean check(int n)
    {
        long dup=n,rev=0;
        while(dup!=0)
        {
            rev=rev*10+(dup%10);
            dup/=10;
        }
        return rev==n;
    }
    private long findsum(int nums[], int n)
    {
        long sum=0;
        for(int i=0;i<nums.length;i++)
        {
            sum=sum+Math.abs(n-nums[i]);
        }
        return sum;
    }
}
```