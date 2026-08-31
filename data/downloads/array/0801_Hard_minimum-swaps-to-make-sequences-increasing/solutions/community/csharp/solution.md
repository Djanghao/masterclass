# Recursion + Memoization

**Author:** khanz05
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/5530256/](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/5530256/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(n)

# Code
```
public class Solution {
    public int MinSwap(int[] nums1, int[] nums2) {
        /*bool swapped = false;
        List<int> listNums1 = nums1.ToList();
        listNums1.Insert(0, -1);
        List<int> listNums2 = nums2.ToList();
        listNums2.Insert(0, -1);
        nums1 = listNums1.ToArray();
        nums2 = listNums2.ToArray();

        return solve(nums1, nums2, 1, swapped);*/

        //Recursion + Memoization
        bool swapped = false;
        List<int> listNums1 = nums1.ToList();
        listNums1.Insert(0, -1);
        List<int> listNums2 = nums2.ToList();
        listNums2.Insert(0, -1);
        nums1 = listNums1.ToArray();
        nums2 = listNums2.ToArray();
        int n = nums1.Length;

        int[,] dp = new int[n, 2];
        InitializeArrayMem(ref dp);

        return solveMem(nums1, nums2, 1, swapped, ref dp);
    }

    private int solveMem(int[] nums1, int[] nums2, int index, bool swapped, ref int[,] dp)
    {
        //base case
        if(index == nums1.Length)
            return 0;
        
        int i = swapped ? 1 : 0;
        if(dp[index, i] != -1)
            return dp[index, i];
        
        int ans = int.MaxValue;

        int prev1 = nums1[index - 1];
        int prev2 = nums2[index - 1];

        //main point
        if(swapped)
            swap(ref prev1, ref prev2);
        
        //no swap
        if(nums1[index] > prev1 && nums2[index] > prev2)
            ans = solveMem(nums1, nums2, index + 1, false, ref dp);
        
        //swap
        if(nums1[index] > prev2 && nums2[index] > prev1)
            ans = Math.Min(ans, 1 + solveMem(nums1, nums2, index + 1, true, ref dp));
        
        return dp[index, i] = ans;
    }

    private int solve(int[] nums1, int[] nums2, int index, bool swapped)
    {
        //base case
        if(index == nums1.Length)
            return 0;
        
        int ans = int.MaxValue;

        int prev1 = nums1[index - 1];
        int prev2 = nums2[index - 1];

        //main point
        if(swapped)
            swap(ref prev1, ref prev2);
        
        //no swap
        if(nums1[index] > prev1 && nums2[index] > prev2)
            ans = solve(nums1, nums2, index + 1, false);
        
        //swap
        if(nums1[index] > prev2 && nums2[index] > prev1)
            ans = Math.Min(ans, 1 + solve(nums1, nums2, index + 1, true));
        
        return ans;
    }

     private void InitializeArrayMem(ref int[,] dp)
    {
        int row = dp.GetLength(0);
        int col = dp.GetLength(1);
        for(int i = 0; i < row; i++)
        {
            for(int j = 0; j < col; j++)
            {
                dp[i, j] = -1;
            }
        }
    }

    private void InitializeArrayTab(ref int[,] dp)
    {
        int row = dp.GetLength(0);
        int col = dp.GetLength(1);
        for(int i = 0; i < row; i++)
        {
            for(int j = 0; j < col; j++)
            {
                dp[i, j] = 0;
            }
        }
    }

    private void swap(ref int a, ref int b)
    {
        a = a ^ b;
        b = a ^ b;
        a = a ^ b;
    }
}
```