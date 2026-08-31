# [C++] Easy to understand || clear code with comments || Recursion + Memoization (DP)

**Author:** devanshsingh2222
**Votes:** 22
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5052528/](https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5052528/)

---

# Approach
The approach uses dynamic programming to keep track of the minimum operations required at each step (idx and prev). The helper function is used recursively to explore different options for changing values in the grid, ensuring that the conditions are met for each cell.

## Recursive Function (helper):
The helper function recursively explores possible values (i) for the current column (idx), ensuring that the value chosen (i) is different from the previous column's value (prev).
It calculates the number of operations required for each possible value (i) based on the difference from the total rows (grid.size()) minus the count of that value in the current column (cnt[{idx, i}]), added to the recursive result for the next column (idx+1).

## Base Case:
If we've reached beyond the last column (idx >= grid[0].size()), we return 0 to indicate no further operations are needed.
# Complexity
- Time complexity: O(n * m)

- Space complexity: O(n * m)

# Recursion (TLE):
```
class Solution {
public:
    int minimumOperations(vector<vector<int>>& grid) {
        // here first int is col index , second int is number and third index is freq(number)
        map<pair<int , int> , int> cnt;
        // Count occurrences of values in each column
        for(int i = 0 ; i < grid[0].size() ; i++ ){
            for(int j = 0 ; j < grid.size() ; j++ ){
                cnt[{i , grid[j][i]}]++;
            }
        }
        // Call helper function to calculate minimum operations
        // here sending 10 for prev value it's not present in grid so it will always be non existing
        return helper(grid , cnt , 0 , 10);
    }
    int helper(vector<vector<int>>& grid , map<pair<int , int> , int>& cnt , int idx , int prev){
        // Base case: if we've processed all columns
        if(idx >= grid[0].size()) return 0;

        int ans = INT_MAX;
        // Try changing current column to different values
        for(int i = 0 ; i <= 9 ; i++ ){
            if(i != prev){
                // grid.size() - cnt[{idx, i}]) is = All rows - freq(i) of current col index
                int current_operations = (int)(grid.size() - cnt[{idx, i}]) + helper(grid, cnt, idx + 1, i);
                ans = min(ans , current_operations);
            }
        }
        return ans;
    }
};
```

# Recursion + Memoization (DP)
```
class Solution {
public:
    int minimumOperations(vector<vector<int>>& grid) {
        // here first int is col index , second int is number and third index is freq(number)
        map<pair<int , int> , int> cnt;
        // Count occurrences of values in each column
        for(int i = 0 ; i < grid[0].size() ; i++ ){
            for(int j = 0 ; j < grid.size() ; j++ ){
                cnt[{i , grid[j][i]}]++;
            }
        }

        // Initialize dp table with -1
        vector<vector<int>> dp(grid[0].size()+1 , vector<int>(11 , -1));

        // here sending 10 for prev value it's not present in grid so it will always be non existing
        return helper(grid , cnt , 0 , 10 , dp);
    }

    int helper(vector<vector<int>>& grid , map<pair<int , int> , int>& cnt , int idx , int prev , vector<vector<int>>& dp){
        // Base case: if we've processed all columns
        if(idx >= grid[0].size()) return 0;

        // If result for current state is already computed, return it
        if(dp[idx][prev] != -1) return dp[idx][prev];

        int ans = INT_MAX;

        // Try changing current column to different values
        for(int i = 0 ; i <= 9 ; i++ ){
            if(i != prev){
                // grid.size() - cnt[{idx, i}]) is = All rows - freq(i) of current col index
                int current_operations = (int)(grid.size() - cnt[{idx, i}]) + helper(grid, cnt, idx + 1, i , dp);
                ans = min(ans , current_operations);
            }
        }

        // Memoize the result and return
        return dp[idx][prev] = ans;
    }
};
```

# If you find this helpfull pls upvote :)