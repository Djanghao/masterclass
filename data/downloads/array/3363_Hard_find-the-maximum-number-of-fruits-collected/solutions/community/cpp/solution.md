# Simple DP, three children are independent, O(n*n)

**Author:** jerry5841314
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-fruits-collected/solutions/6075681/](https://leetcode.com/problems/find-the-maximum-number-of-fruits-collected/solutions/6075681/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The thing is that for the child start at (0, 0), he can only go to (i + 1, j + 1) from (i, j).
For the child start at(n - 1, 0), he cannot cross the line of "i = j", or they have no time to turn back to (n - 1, n - 1).
So as the third child start at (0, n - 1).
Thus, three child are indepent actually.

# Approach
<!-- Describe your approach to solving the problem. -->
First child go a straight line to (n - 1, n - 1).
Bottom left child take a DP for the bottom left part of the fruits.
So as top right


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n, n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    int n;
    vector<vector<int>> fruits;
    int dp1[1001][1001], dp2[1001][1001];
    int maxCollectedFruits(vector<vector<int>>& fruits) {
        n = fruits.size();
        this->fruits = fruits;
        int total = 0;
        for (int i = 0; i < n; i++){
            total += fruits[i][i];
        }
        cout << total << '\
';
        memset(dp1, -1, sizeof(dp1));
        memset(dp2, -1, sizeof(dp2));
        total += find1(n - 1, 0);
        total += find2(0, n - 1);
        return total;
    }
    int find1(int i, int j){
        
        if (i == n - 1 && j == n - 1)
            return 0;
        if (j >= i)
            return 0;
        if (dp1[i][j] != -1)
            return dp1[i][j];
        int maxV = 0;
        int total = fruits[i][j];
        if (i - 1 >= 0)
            maxV = max(maxV, total + find1(i - 1, j + 1));
        maxV = max(maxV, total + find1(i, j + 1));
        if (i + 1 < n)
            maxV = max(maxV, total + find1(i + 1, j + 1));
        dp1[i][j] = maxV;
        return maxV;
    }
    int find2(int i, int j){
        
        if (i == n - 1 && j == n - 1)
            return 0;
        if (i >= j)
            return 0;
        if (dp2[i][j] != -1)
            return dp2[i][j];
        int maxV = 0;
        int total = fruits[i][j];
        if (j - 1 >= 0)
            maxV = max(maxV, total + find2(i + 1, j - 1));
        maxV = max(maxV, total + find2(i + 1, j));
        if (j + 1 < n)
            maxV = max(maxV, total + find2(i + 1, j + 1));
        dp2[i][j] = maxV;
        return maxV;
    }
};
```