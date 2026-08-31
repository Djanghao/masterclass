# Easiest ✅  C++ Solution 🔥🔥🔥

**Author:** _sxrthakk
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5580968/](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5580968/)

---

# Intuition
The code calculates the minimum number of flips required to make all rows or all columns palindromic in a binary matrix.

1. **Row Palindromes :**
- For each row, use two pointers (l and r) to compare elements from both ends.
- Count how many flips are needed to make the row palindromic (k).

2. **Column Palindromes :**
- For each column, use two pointers (l and r) to compare elements from the top and bottom.
- Count how many flips are needed to make the column palindromic (c).

Finally, the code returns the minimum of k and c, representing the fewest flips needed to make either all rows or all columns palindromic.

# Approach
1. **Understanding Palindromes in Rows and Columns :**
- A row or column is palindromic if the first half of the sequence mirrors the second half.
- To check if a row (or column) is palindromic, you need to compare each element from the start with the corresponding element from the end and count mismatches.

2. **Counting Mismatches for Rows :**
- Traverse each row.
- For each row, use two pointers: l starting from the beginning of the row and r starting from the end.
- Compare grid[i][l] with grid[i][r]. If they don't match, it means a flip is needed, so increment a counter c.
- After checking all rows, sum up the mismatches (stored in k) across all rows.

3. **Counting Mismatches for Columns :**
- Similarly, traverse each column.
- For each column, use two pointers: l starting from the top of the column and r starting from the bottom.
- Compare grid[l][i] with grid[r][i]. If they don't match, it means a flip is needed, so increment a counter c.
- Sum up the mismatches (stored in c) across all columns.

4. **Final Decision :**
- You need to choose whether to make all rows palindromic or all columns palindromic, depending on which option requires fewer flips.
- Return the minimum of the total flips needed for rows (k) and the total flips needed for columns (c).

# Time complexity : O(m*n)

# Space complexity : O(1)

# Code
```
class Solution {
public:
    int minFlips(vector<vector<int>>& grid){
        int m=grid.size();
        int n=grid[0].size();
        
        int k=0;
        for(int i=0;i<m;i++){
            int c=0;
            int l=0,r=grid[i].size()-1;

            while(l<r){
                if(grid[i][l]!=grid[i][r]) c++;
                l++;
                r--;
            }
            k+=c;
        }

        int c=0;
        for (int i=0;i<n;i++) {
            int l=0,r=m-1;
            while(l<r){
                if(grid[l][i]!=grid[r][i]) c++;
                l++;
                r--;
            }
        }

        return min(k,c);
    }
};
```
