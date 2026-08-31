# Simple java solution

**Author:** Siddhant_1602
**Votes:** 11
**Link:** [https://leetcode.com/problems/prime-in-diagonal/solutions/3395721/](https://leetcode.com/problems/prime-in-diagonal/solutions/3395721/)

---



# Complexity
- Time complexity: $$O(n * sqrt(n))$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public int diagonalPrime(int[][] nums) {
        int maxi=0;
        for(int i=0;i<nums.length;i++)
        {
            if(prime(nums[i][i]))
            {
                maxi=Math.max(maxi,nums[i][i]);
            }
            if(prime(nums[nums.length-i-1][i]))
            {
                maxi=Math.max(maxi,nums[nums.length-i-1][i]);
            }
        }
        return maxi;
    }
    public boolean prime(int n)
    {
        if(n<2)
        {
            return false;
        }
        for(int i=2;i<=Math.sqrt(n);i++)
        {
            if(n%i==0)
            {
                return false;
            }
        }
        return true;
    }
}
```