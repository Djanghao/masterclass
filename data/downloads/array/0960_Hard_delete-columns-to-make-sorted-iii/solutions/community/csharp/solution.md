# DP

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted-iii/solutions/5939186/](https://leetcode.com/problems/delete-columns-to-make-sorted-iii/solutions/5939186/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    private bool ValidOrder(string[] strs, int idx1, int idx2)
    {
        int size = strs.Length;
        for(int i = 0; i < size; i++)
        {
            if(idx2 >= strs[i].Length)
                return false;

            if(strs[i][idx1]>strs[i][idx2])
                return false;
        }

        return true;
    }

    public int MinDeletionSize(string[] strs) {
      int row = strs.Length, col = strs[0].Length;
      int[] dp = Enumerable.Repeat(1, col).ToArray();

      int minDel = col;
      for(int i = 0; i < col; i++)
      {
        for(int j = 0; j < i; j++)
        {
            if(ValidOrder(strs, j, i))
                dp[i] = Math.Max(dp[i], dp[j]+1);
        }
             
        minDel = Math.Min(minDel, col-dp[i]);
      }

        return minDel;
    }
}
```