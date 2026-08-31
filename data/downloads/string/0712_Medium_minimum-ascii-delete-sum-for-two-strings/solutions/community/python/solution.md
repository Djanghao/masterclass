# Dp || Very Easy to understand || Video Explanation

**Author:** shivam-727
**Votes:** 25
**Link:** [https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/solutions/3840821/](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/solutions/3840821/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Explore options take and not take according to the conditions.

For detailed explanation you can refer to my youtube channel (hindi Language)
https://youtu.be/BahZtrW6QTs
 or link in my profile.Here,you can find any solution in playlists monthwise from june 2023 with detailed explanation.i upload daily leetcode solution video with short and precise explanation (5-10) minutes.

# Approach
<!-- Describe your approach to solving the problem. -->

1. The solution utilizes dynamic programming to find the minimum ASCII delete sum of `s1` and `s2`. A 2D DP array `dp` is used to store the minimum delete sum for subproblems.

2. The recursive function `solve` is defined, which takes four parameters: `i` and `j` are the current indices for `s1` and `s2`, respectively, and `s1` and `s2` are the input strings.

3. In the `solve` function, the following steps are followed:

   a. Check if the value for the current state `(i, j)` is already computed and stored in the `dp` array. If yes, return the value to avoid recomputation.

   b. If `i` reaches the end of `s1`, it means all characters of `s1` have been processed. In this case, sum the ASCII values of the remaining characters in `s2` (from index `j` to the end) and return the sum. These characters need to be deleted to make `s1` and `s2` equal.

   c. If `j` reaches the end of `s2`, it means all characters of `s2` have been processed. Similar to the previous case, sum the ASCII values of the remaining characters in `s1` (from index `i` to the end) and return the sum.

   d. If neither `i` nor `j` has reached the end of their respective strings, then two options are possible:

      - Calculate the sum of the ASCII value of the current character of `s1` with the minimum delete sum of the remaining characters of `s1` and `s2` (by calling the `solve` function recursively with `i+1` and `j`).

      - Calculate the sum of the ASCII value of the current character of `s2` with the minimum delete sum of the remaining characters of `s1` and `s2` (by calling the `solve` function recursively with `i` and `j+1`).

      - If the current characters of `s1` and `s2` are equal, an additional option is available:

        - Calculate the minimum delete sum of the remaining characters of `s1` and `s2` (by calling the `solve` function recursively with `i+1` and `j+1`) without including the current characters in the sum since they are already equal.

      e. Return the minimum of the above three options as the minimum delete sum for the current state `(i, j)` and store it in the `dp` array for future reference.

# Complexity
- Time complexity:$$O(n1*n2)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n1*n2)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
int dp[1002][1002];
int solve(string &s1,string &s2,int i,int j){
    if(dp[i][j]!=-1)
    return dp[i][j];
    if(i==s1.size()){
        int sum=0;
        for(int k=j;k<s2.size();k++){
         sum=sum+(int)s2[k];
        }
        return sum;
    }
    if(j==s2.size()){
        int sum=0;
        for(int k=i;k<s1.size();k++){
         sum=sum+(int)s1[k];
        }
        return sum;
    }
    int mx=1e9;
     int nt=min(s1[i]+solve(s1,s2,i+1,j),s2[j]+solve(s1,s2,i,j+1));
     int tk=1e9;
     if(s1[i]==s2[j]){
       tk=solve(s1,s2,i+1,j+1);
     }
     return dp[i][j]=min(nt,tk);
}
    int minimumDeleteSum(string s1, string s2) {
        memset(dp,-1,sizeof(dp));
        return solve(s1,s2,0,0);
    }
};
```
```java []
class Solution {
    int[][] dp;

    public int minimumDeleteSum(String s1, String s2) {
        dp = new int[s1.length() + 1][s2.length() + 1];
        for (int[] row : dp) {
            Arrays.fill(row, -1);
        }
        return solve(s1, s2, 0, 0);
    }

    private int solve(String s1, String s2, int i, int j) {
        if (dp[i][j] != -1)
            return dp[i][j];
        if (i == s1.length()) {
            int sum = 0;
            for (int k = j; k < s2.length(); k++) {
                sum += s2.charAt(k);
            }
            return sum;
        }
        if (j == s2.length()) {
            int sum = 0;
            for (int k = i; k < s1.length(); k++) {
                sum += s1.charAt(k);
            }
            return sum;
        }
        int nt = Math.min(s1.charAt(i) + solve(s1, s2, i + 1, j), s2.charAt(j) + solve(s1, s2, i, j + 1));
        int tk = Integer.MAX_VALUE;
        if (s1.charAt(i) == s2.charAt(j)) {
            tk = solve(s1, s2, i + 1, j + 1);
        }
        return dp[i][j] = Math.min(nt, tk);
    }
}

```
```python []
class Solution:
    def minimumDeleteSum(self, s1: str, s2: str) -> int:
        dp = [[-1] * (len(s2) + 1) for _ in range(len(s1) + 1)]
        return self.solve(s1, s2, 0, 0, dp)

    def solve(self, s1: str, s2: str, i: int, j: int, dp: list[list[int]]) -> int:
        if dp[i][j] != -1:
            return dp[i][j]
        if i == len(s1):
            return sum(ord(ch) for ch in s2[j:])
        if j == len(s2):
            return sum(ord(ch) for ch in s1[i:])
        nt = min(ord(s1[i]) + self.solve(s1, s2, i + 1, j, dp), ord(s2[j]) + self.solve(s1, s2, i, j + 1, dp))
        tk = float('inf')
        if s1[i] == s2[j]:
            tk = self.solve(s1, s2, i + 1, j + 1, dp)
        dp[i][j] = min(nt, tk)
        return dp[i][j]

```

