# ✅✅Python🔥Java 🔥C++🔥Simple Solution🔥Easy to Understand🔥

**Author:** cohesk
**Votes:** 88
**Link:** [https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/3442303/](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/3442303/)

---

# Please UPVOTE \uD83D\uDC4D

**!! BIG ANNOUNCEMENT !!**
I am Giving away my premium content videos related to computer science and data science and also will be sharing well-structured assignments and study materials to clear interviews at top companies to my first 10,000 Subscribers. So, **DON'T FORGET** to Subscribe

# **Search \uD83D\uDC49`Tech Wired leetcode`**

# Video Solution

# **Search \uD83D\uDC49`Minimum Insertion Steps to Make a String Palindrome by Tech Wired`**

# OR 
# **Click the Link in my Leetcode Profile**

![Yellow & Black Earn Money YouTube Thumbnail (19).png](./images/0.png)


# Approach:

The problem can be solved using dynamic programming. We can create a 2D table dp, where dp[i][j] represents the minimum number of insertions required to make the substring s[i:j+1] a palindrome. The base case is when i=j, where the substring is already a palindrome and no insertions are needed. If s[i] == s[j], then the substring is already a palindrome and we can use the result of dp[i+1][j-1]. Otherwise, we need to insert either a character at index i or j to make them equal, so we take the minimum of dp[i+1][j] and dp[i][j-1] and add 1 to it.

We can fill the table dp using a bottom-up approach. We start with the smallest substrings (length 1) and work up to the entire string. The final answer is stored in dp[0][n-1], where n is the length of the input string s.

However, we can further optimize the space complexity of the solution by using only one row of the 2D table dp at a time. We can iterate over the columns of the table in reverse order and update the row accordingly. By updating the row in reverse order and using a variable to store the previous value of dp[j], we avoid overwriting the values in the row before they are used in the current iteration.

# Intuition:

The problem requires us to find the minimum number of insertions needed to make a string palindrome. We can approach this by breaking down the string into smaller substrings and computing the minimum number of insertions needed for each substring.

If we consider a substring s[i:j+1], we can make it a palindrome by inserting characters at the beginning or end of the substring. We can use dynamic programming to solve the problem by breaking down the string into smaller substrings and computing the minimum number of insertions needed for each substring. By computing the minimum number of insertions needed for each substring, we can find the minimum number of insertions needed to make the entire string palindrome.

The dynamic programming solution uses a 2D table to store the minimum number of insertions needed for each substring. By breaking down the string into smaller substrings and using the results of the smaller substrings to compute the results of the larger substrings, we can find the minimum number of insertions needed to make the entire string palindrome.

```Python []
class Solution:
    def minInsertions(self, s: str) -> int:
        n = len(s)
        dp = [0] * n
        for i in range(n - 2, -1, -1):
            prev = 0
            for j in range(i + 1, n):
                temp = dp[j]
                if s[i] == s[j]:
                    dp[j] = prev
                else:
                    dp[j] = min(dp[j], dp[j-1]) + 1
                prev = temp
        return dp[n-1]
```
```Java []
class Solution {
    public int minInsertions(String s) {
        int n = s.length();
        int[] dp = new int[n];
        for (int i = n - 2; i >= 0; i--) {
            int prev = 0;
            for (int j = i + 1; j < n; j++) {
                int temp = dp[j];
                if (s.charAt(i) == s.charAt(j)) {
                    dp[j] = prev;
                } else {
                    dp[j] = Math.min(dp[j], dp[j-1]) + 1;
                }
                prev = temp;
            }
        }
        return dp[n-1];
    }
}

```
```C++ []
class Solution {
public:
    int minInsertions(string s) {
        int n = s.length();
        vector<int> dp(n);
        for (int i = n - 2; i >= 0; i--) {
            int prev = 0;
            for (int j = i + 1; j < n; j++) {
                int temp = dp[j];
                if (s[i] == s[j]) {
                    dp[j] = prev;
                } else {
                    dp[j] = min(dp[j], dp[j-1]) + 1;
                }
                prev = temp;
            }
        }
        return dp[n-1];
    }
};

```
