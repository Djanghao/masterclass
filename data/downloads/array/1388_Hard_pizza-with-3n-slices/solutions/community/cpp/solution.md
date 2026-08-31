# 2D DP || 4 Methods explained || easy to understand

**Author:** sanjay_soni
**Votes:** 9
**Link:** [https://leetcode.com/problems/pizza-with-3n-slices/solutions/3274799/](https://leetcode.com/problems/pizza-with-3n-slices/solutions/3274799/)

---

# Intuition
Think about of house robbery problem 
In house robbery problem we don't rob two adjacent houses 
in this problem if we eat a slices then we don't eat it's prev and next slice 
# Approach 1 RECURSION
1. think about two cases first -> we start eating from first index so we have to leave the last index. second-> we start eating from second index so we have to leave first index
2. Now the ques become house robbery II 
3. call recursion for both cases
4. move start index to start+2 if you eat a slice and decrement slice n
5. move start index to start+1 if you don't eat a slice and slice n remains same
6. return the max
7. THIS CODE WILL GIVE YOU TLE BECAUSE IT HAS OVERLAPPING SUBPROBLEMS
# Complexity
- Time complexity:
exponential

# Code
```
class Solution {
public:
    int solve(int start,int end,vector<int> &slices,int n){
        if(n == 0 || start > end) return 0;

        int incl = slices[start] + solve(start+2,end,slices,n-1);
        int excl = 0 + solve(start+1,end,slices,n);

        return max(incl,excl);
    }
    int maxSizeSlices(vector<int>& slices) {
        int k = slices.size();
        int case1 = solve(0,k-2,slices,k/3);
        int case2 = solve(1,k-1,slices,k/3);
        return max(case1,case2);
    }
};
```

# Approach 2 Top down dp
1. Create two 2D DP arrays dp1 and dp2 and initialize with -1
2. call recursion for both cases
3. store ans and return
4. after base case check if ans is already stored or not
5. if stored return , call recursion otherwise
# Complexity
- Time complexity:
O(N*N)
- space complexity:
O(N*N)
# Code
```
class Solution {
public:
    int solve(int start,int end,vector<int> &slices,int n,vector<vector<int>> &dp){
        if(n == 0 || start > end) return 0;

        if(dp[start][n] != -1) return dp[start][n];
        int incl = slices[start] + solve(start+2,end,slices,n-1,dp);
        int excl = 0 + solve(start+1,end,slices,n,dp);

        dp[start][n] = max(incl,excl);
        return dp[start][n];
    }
    int maxSizeSlices(vector<int>& slices) {
        int k = slices.size();
        vector<vector<int>> dp1(k,vector<int>(k,-1));
        int case1 = solve(0,k-2,slices,k/3,dp1);
        vector<vector<int>> dp2(k,vector<int>(k,-1));
        int case2 = solve(1,k-1,slices,k/3,dp2);
        return max(case1,case2);
    }
};
```
# Approach 3 Bottom up dp
1. Create two 2D DP arrays dp1 and dp2 and initialize with 0
2. analyse base case
3. use two loop for traversing dp arrays
4. for case 1 first loop runs from k-2 to 0 and for case 2 second loop runs from k-1 to 1
5. calculate incl excl and store it's max
5. return max of case 1 and case 2
# Complexity
- Time complexity:
O(N*N)
- space complexity:
O(N*N)
# Code
```
class Solution {
public:
    int maxSizeSlices(vector<int>& slices) {
        int k = slices.size();
        vector<vector<int>> dp1(k+2,vector<int>(k+2,0));
        vector<vector<int>> dp2(k+2,vector<int>(k+2,0));

        for(int start = k-2; start >= 0; start--){
            for(int n = 1; n <= k/3; n++){
                int incl = slices[start] + dp1[start+2][n-1];
                int excl = 0 + dp1[start+1][n];

                dp1[start][n] = max(incl,excl);
        
            }
        }
        for(int start = k-1; start >= 1; start--){
            for(int n = 1; n <= k/3; n++){
                int incl = slices[start] + dp2[start+2][n-1];
                int excl = 0 + dp2[start+1][n];

                dp2[start][n] = max(incl,excl);
        
            }
        }
        int case1 = dp1[0][k/3];
        int case2 = dp2[1][k/3];
        return max(case1,case2);
    }
};
```
# Approach 3 Bottom up dp + space optimization
1. Instead of dp arrays we can use three 1D arrays curr ,prev and next
2. analyse base case
3. use two loop for traversing dp arrays
4. for case 1 first loop runs from k-2 to 0 and for case 2 second loop runs from k-1 to 1
5. calculate incl excl and store it's max
5. return max of case 1 and case 2
# Complexity
- Time complexity:
O(N*N)
- space complexity:
O(N*N)
# Code
```
class Solution {
public:
    int maxSizeSlices(vector<int>& slices) {
        int k = slices.size();

        vector<int> prev1(k+2,0);
        vector<int> curr1(k+2,0);
        vector<int> next1(k+2,0);
        
        vector<int> prev2(k+2,0);
        vector<int> curr2(k+2,0);
        vector<int> next2(k+2,0);


        for(int start = k-2; start >= 0; start--){
            for(int n = 1; n <= k/3; n++){
                int incl = slices[start] + next1[n-1];
                int excl = 0 + curr1[n];

                prev1[n] = max(incl,excl);
            }
            next1 = curr1;
            curr1 = prev1;
        }
        for(int start = k-1; start >= 1; start--){
            for(int n = 1; n <= k/3; n++){
                int incl = slices[start] + next2[n-1];
                int excl = 0 + curr2[n];

                prev2[n] = max(incl,excl);
            }
            next2 = curr2;
            curr2 = prev2;
        }
        int case1 = curr1[k/3];
        int case2 = curr2[k/3];
        return max(case1,case2);
    }
};
```