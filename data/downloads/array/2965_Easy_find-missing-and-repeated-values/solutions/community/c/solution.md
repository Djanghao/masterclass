# C++ Solution (Using Simple Maths), || Full Explanation || SC: O(1) Beats 100%

**Author:** Hustle_code
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-missing-and-repeated-values/solutions/4416058/](https://leetcode.com/problems/find-missing-and-repeated-values/solutions/4416058/)

---

# Intuition
The idea is to convert the given problem into mathematical equations. Since we have two variables i.e. missing and repeating, we will try to form two linear equations. And then we will find the values of two variables using those equations.

Assume the repeating number to be X and the missing number to be Y.

In the array, the numbers are between 1 to N, and in that range, one number is missing and one number is occurring twice.

Step 1: Form equation 1:

Now, we know the summation of the first N numbers is:

Sn = (N*(N+1))/2

Let\u2019s say, S = the summation of all the elements in the given array.

Therefore, S - Sn = X - Y\u2026\u2026\u2026\u2026\u2026\u2026\u2026equation 1

Step 2: Form equation 2:

Now, we know the summation of squares of the first N numbers is:

S2n = (N*(N+1)*(2N+1))/6

Let\u2019s say, S2 = the summation of squares of all the elements in the given array.

Therefore, S2-S2n = X2-Y2...................equation 2

From equation 2 we can conclude,

X+Y = (S2 - S2n) / (X-Y) [From equation 1, we get the value X-Y] \u2026\u2026\u2026\u2026 equation 3
From equation 1 and equation 3, we can easily find the value of X and Y. And this is what we want.

Note: Here, we are summing all the numbers and squares of all the numbers, so we should use a bigger data type(Like in C++, long long instead of int).

# Approach
Assume the repeating number to be X and the missing number to be Y.

The steps are as follows:

First, find out the values of S and Sn and then calculate S \u2013 Sn (Using the above formulas).
Then, find out the values of S2 and S2n and then calculate S2 \u2013 S2n.
After performing steps 1 and 2, we will be having the values of X + Y and X \u2013 Y. Now, by substitution of values, we can easily find the values of X and Y.

# Complexity
- Time complexity:
O(n2), as we are using two loops to add numbers in an grid.

- Space complexity:
O(1)

PS : Please UPVOTE, if you really liked the solution :-)

Learnt from :  Striver :-)
# Code
```
class Solution {
public:
    vector<int> findMissingAndRepeatedValues(vector<vector<int>>& grid) {
        long long n = grid.size();
        n = n*n;
        long long SN = (n*(n+1)) /2;
        long long S2N = (n * (n + 1) * (2 * n + 1)) / 6;
        long long S = 0, S2 = 0;
        for (int i = 0; i < grid.size(); i++) {
            for(int j = 0;j<grid[0].size();j++){
            S += grid[i][j];
            S2 += (long long)grid[i][j] * (long long)grid[i][j];
            }
        }
        long long val1 = S - SN;
        long long val2 = S2 - S2N;
        val2 = val2 / val1;
        long long x = (val1 + val2) / 2;
        long long y = x - val1;

    return {(int)x, (int)y};
    }
};
```