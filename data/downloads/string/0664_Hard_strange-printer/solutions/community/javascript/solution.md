# 🖨️ 100% Printer [VIDEO] 🔀 Peculiar : Minimizing Prints with Dynamic Programming 🔄📜

**Author:** vanAmsen
**Votes:** 57
**Link:** [https://leetcode.com/problems/strange-printer/solutions/3835843/](https://leetcode.com/problems/strange-printer/solutions/3835843/)

---

## Intuition
When first encountering this problem, it seems to be a task of finding an optimal strategy for a sequence of actions. This is often a cue for a dynamic programming approach. In particular, the "strange" behavior of the printer (being able to print on top of existing characters and only printing the same character at a time) suggests that we can benefit from considering smaller subproblems (i.e., substrings of the input) in order to construct the solution for the whole string.

https://youtu.be/f4diE_0zYs4

## Approach

The solution to this problem involves setting up a dynamic programming (DP) table, where each cell \\( dp[i][j] \\) represents the minimum number of turns the printer needs to print the substring from \\( i \\) to \\( j \\). 

1. **Initialization**: We start by initializing the diagonal of the DP table with 1, as the printer only needs one turn to print a single character. So, if we have the string "abc", the printer can print "a", "b", or "c" each in one turn. As such, the diagonal of our DP table (which represents substrings of length 1) is filled with 1s.

2. **Filling the DP Table**: We adopt a bottom-up approach to fill in the DP table. For every \\( i \\) (from \\( n-1 \\) to 0) and \\( j \\) (from \\( i+1 \\) to \\( n \\)), we initially set \\( dp[i][j] \\) to \\( dp[i][j-1] + 1 \\). This equates to printing the substring from \\( i \\) to \\( j-1 \\) first, followed by printing the character at \\( j \\) separately. For example, if we have the string "abc", the printer can print "ab" in two turns and then print "c" in an additional turn, making a total of 3 turns.

3. **Considering Overlapping Characters**: If there are overlapping characters, we may be able to print the substring from \\( i \\) to \\( j \\) in fewer turns. This is where \\( k \\) comes into play. We introduce \\( k \\) to divide the substring from \\( i \\) to \\( j \\) into two parts at \\( k \\), namely the left part from \\( i \\) to \\( k \\) and the right part from \\( k+1 \\) to \\( j \\). For each \\( k \\) from \\( i \\) to \\( j \\), if \\( s[k] \\) is the same as \\( s[j] \\), we can first print the substring from \\( i \\) to \\( k \\), and then print the character at \\( j \\), which will also cover \\( s[k] \\). For instance, if we have the string "aba", the printer can print "aa" in one turn and then print "b" in another turn, making a total of 2 turns. In this case, we update \\( dp[i][j] \\) to be the minimum of its current value and \\( dp[i][k] + dp[k+1][j-1] \\) (or just \\( dp[i][k] \\) if \\( k+1 > j-1 \\)).

4. **Final Output**: After filling the DP table, we can find the minimum number of turns needed to print the entire string at \\( dp[0][n-1] \\). This cell represents the minimum number of turns to print the entire string since it covers the substring from the first character (0) to the last character (\\( n-1 \\)) of the string.

## Complexity

- Time complexity: \\(O(n^3)\\). The algorithm needs to fill a \\(n \	imes n\\) DP table. For each cell in the DP table, it goes through a loop of size \\(n\\) to consider all possible values of \\(k\\).

- Space complexity: \\(O(n^2)\\). The space complexity is determined by the size of the DP table, which is \\(n \	imes n\\).

## Code
```Python []
class Solution:
    def strangePrinter(self, s: str) -> int:
        n = len(s)
        dp = [[0]*n for _ in range(n)]
        
        for i in range(n-1, -1, -1):
            dp[i][i] = 1
            for j in range(i+1, n):
                dp[i][j] = dp[i][j-1] + 1
                for k in range(i, j):
                    if s[k] == s[j]:
                        dp[i][j] = min(dp[i][j], dp[i][k] + (dp[k+1][j-1] if k+1<=j-1 else 0))

        return dp[0][n-1]
```
``` C++ []
class Solution {
public:
    int strangePrinter(string s) {
        int n = s.size();
        vector<vector<int>> dp(n, vector<int>(n, 0));
        
        for (int i = n-1; i >= 0; --i) {
            dp[i][i] = 1;
            for (int j = i+1; j < n; ++j) {
                dp[i][j] = dp[i][j-1] + 1;
                for (int k = i; k < j; ++k) {
                    if (s[k] == s[j]) {
                        dp[i][j] = min(dp[i][j], dp[i][k] + (k+1<=j-1 ? dp[k+1][j-1] : 0));
                    }
                }
            }
        }
        return dp[0][n-1];
    }
};
```
``` Java []
class Solution {
    public int strangePrinter(String s) {
        int n = s.length();
        int[][] dp = new int[n][n];
        
        for (int i = n-1; i >= 0; --i) {
            dp[i][i] = 1;
            for (int j = i+1; j < n; ++j) {
                dp[i][j] = dp[i][j-1] + 1;
                for (int k = i; k < j; ++k) {
                    if (s.charAt(k) == s.charAt(j)) {
                        dp[i][j] = Math.min(dp[i][j], dp[i][k] + (k+1<=j-1 ? dp[k+1][j-1] : 0));
                    }
                }
            }
        }
        return dp[0][n-1];
    }
}
```
``` JavaScript []
/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
    let n = s.length;
    let dp = Array.from(Array(n), () => new Array(n).fill(0));
    
    for (let i = n-1; i >= 0; --i) {
        dp[i][i] = 1;
        for (let j = i+1; j < n; ++j) {
            dp[i][j] = dp[i][j-1] + 1;
            for (let k = i; k < j; ++k) {
                if (s[k] == s[j]) {
                    dp[i][j] = Math.min(dp[i][j], dp[i][k] + (k+1<=j-1 ? dp[k+1][j-1] : 0));
                }
            }
        }
    }
    return dp[0][n-1];
};
```
``` C# []
public class Solution {
    public int StrangePrinter(string s) {
        int n = s.Length;
        int[,] dp = new int[n,n];
        
        for (int i = n-1; i >= 0; --i) {
            dp[i,i] = 1;
            for (int j = i+1; j < n; ++j) {
                dp[i,j] = dp[i,j-1] + 1;
                for (int k = i; k < j; ++k) {
                    if (s[k] == s[j]) {
                        dp[i,j] = Math.Min(dp[i,j], dp[i,k] + (k+1<=j-1 ? dp[k+1,j-1] : 0));
                    }
                }
            }
        }
        return dp[0,n-1];
    }
}
```
## Video for JavaScript & C++
https://youtu.be/bazV0MMaFQI
https://youtu.be/dBtekOl0ofE
