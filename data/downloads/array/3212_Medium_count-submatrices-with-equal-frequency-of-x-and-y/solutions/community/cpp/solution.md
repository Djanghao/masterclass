# Beats 100% ✅ || Short code with Detailed explanation 🔥 || Very Easy to understand for beginners 💯

**Author:** soukarja
**Votes:** 13
**Link:** [https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5432161/](https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5432161/)

---

# Intuition
Given a 2D character matrix grid, the task is to count the number of submatrices that meet the following criteria:
- Contains `grid[0][0]`.
- Contains an equal frequency of 'X' and 'Y'.
- Contains at least one 'X'.
- To achieve this, we need to explore all possible submatrices that start from `grid[0][0]` and validate the conditions for each submatrix.

---

# Approach
1. **Initialize Variables:**
    - `n` for the number of rows.
    - `m` for the number of columns.
    - `res` to store the count of valid submatrices.

2. **Create a DP Array:**

    - `dp` is a vector of pairs where `dp[i].first` indicates if there is an 'X' in the column up to row i and `dp[i].second` indicates the difference between the count of 'X' and 'Y'.
3. **Iterate Over Each Row:**

- For each row, maintain a cumulative sum sum and a flag fl to check the presence of 'X'.
- Update dp based on the current row:
- Increment sum if the character is 'X'.
- Decrement sum if the character is 'Y'.
- Set fl to 1 if 'X' is encountered.
- Update dp[i].first to track the presence of 'X' up to the current row.
- Update dp[i].second to store the cumulative sum of differences.
4. **Check for Valid Submatrices:**

- For each column in the current row, if dp[i].first is set and dp[i]. second is zero, it means the submatrix starting from grid[0][0] to the current element contains equal 'X' and 'Y' and at least one 'X'.
- Increment the result counter res if the conditions are met.
4. **Return the Result:**

Return the count of valid submatrices stored in `res`.

---

# Complexity
- Time complexity:
The time complexity of this approach is `O(n\xD7m)`.
This is because we iterate through each element of the matrix once.

- Space complexity:
The space complexity is  `O(m)` due to the use of the dp array which stores information for each column.

---

# Code
```
class Solution {
public:
    int numberOfSubmatrices(vector<vector<char>>& A) {
        int n = A.size(), m = A[0].size(), res = 0;
        vector<pair<int,int>> dp(m); // Create a DP array to store (hasX, diffCount) for each column
        
        // Iterate through each row
        for(auto& vec : A) {
            int sum = 0, fl = 0; // Initialize sum and flag for the current row
            
            // Iterate through each column in the current row
            for(int i = 0; i < m; i++) {
                if(vec[i] == 'X') {
                    fl = 1;  // Set flag if 'X' is encountered
                    sum++;   // Increment sum for 'X'
                } else if(vec[i] == 'Y') {
                    sum--;   // Decrement sum for 'Y'
                }
                
                dp[i].first |= fl;  // Update dp[i].first to indicate the presence of 'X' up to the current column
                dp[i].second += sum; // Update dp[i].second to maintain the cumulative difference
                
                // Check if the current submatrix meets the criteria
                if(dp[i].first and dp[i].second == 0) {
                    res++; // Increment the result counter if conditions are met
                }
            }
        }
        return res; // Return the count of valid submatrices
    }
};
```
