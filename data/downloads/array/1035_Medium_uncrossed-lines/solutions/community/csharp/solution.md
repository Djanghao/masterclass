# Easy and fast C# solution with explanation

**Author:** dr41n
**Votes:** 2
**Link:** [https://leetcode.com/problems/uncrossed-lines/solutions/3510389/](https://leetcode.com/problems/uncrossed-lines/solutions/3510389/)

---

# Intuition
The problem can be seen as a variation of the Longest Common Subsequence (LCS) problem, which is a classic problem solved using Dynamic Programming. Here, drawing a line between the same elements in the two arrays without crossing is analogous to finding common elements in the same order (subsequence) in both arrays. Thus, we can use the strategy for the LCS problem to solve this.

# Approach
We use a 2D dynamic programming array **dp[i][j]**, where **dp[i][j]** means the maximum number of uncrossed lines (or longest common subsequence) between the first **i** elements of **nums1** and the first **j** elements of **nums2**. We initialize all **dp[i][j]** to 0.

Then, we iterate through each element of **nums1** and **nums2**. If **nums1[i-1] == nums2[j-1]**, **dp[i][j] = dp[i-1][j-1] + 1**, because we have found one more common subsequence (i.e., we can draw one more uncrossed line). If **nums1[i-1] != nums2[j-1]**, **dp[i][j] = max(dp[i-1][j], dp[i][j-1])**, because no new uncrossed line can be drawn and we should take the maximum number of uncrossed lines from the previous subsequences.

Finally, **dp[m][n]** will have the maximum number of uncrossed lines that can be drawn between **nums1** and **nums2**.

# Complexity
- Time complexity: $$O(m*n)$$, where **m** and **n** are the lengths of **nums1** and **nums2**, respectively. This is because we need to iterate through each element of **nums1** and **nums2** to fill the dynamic programming table.

- Space complexity: $$O(m*n)$$, because we use a 2D dynamic programming table of size **(m+1)*(n+1)**. Here, **m** and **n** are the lengths of **nums1** and **nums2**, respectively.

# Code
```
public class Solution {
    public int MaxUncrossedLines(int[] nums1, int[] nums2) {
        int m = nums1.Length;
        int n = nums2.Length;
        int[,] dp = new int[m + 1, n + 1];

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (nums1[i - 1] == nums2[j - 1]) {
                    dp[i, j] = dp[i - 1, j - 1] + 1;
                } else {
                    dp[i, j] = Math.Max(dp[i - 1, j], dp[i, j - 1]);
                }
            }
        }

        return dp[m, n];
    }
}
```