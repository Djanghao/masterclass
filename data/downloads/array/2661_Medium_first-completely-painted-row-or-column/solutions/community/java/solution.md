# Simple java solution

**Author:** Siddhant_1602
**Votes:** 24
**Link:** [https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/3468260/](https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/3468260/)

---

# Complexity
- Time complexity: $$O(m*n)$$

- Space complexity: $$O(m*n)$$

# Code
```
class Solution {
    public int firstCompleteIndex(int[] arr, int[][] mat) {
        Map<Integer, int[]> nm = new HashMap<>();
        int m=mat.length;
        int n=mat[0].length;
        for (int i=0;i<m;i++)
        {
            for (int j=0;j<n;j++)
            {
                nm.put(mat[i][j], new int[]{i, j});
            }
        }
        int a[]=new int[m];
        int b[]=new int[n];
        for (int i = 0; i < arr.length; i++)
        {
            int c[] = nm.get(arr[i]);
            a[c[0]]++;
            b[c[1]]++;
            if(a[c[0]]==n||b[c[1]]==m)
            {
                return i;
            }
        }
        return -1;
    }
}
```