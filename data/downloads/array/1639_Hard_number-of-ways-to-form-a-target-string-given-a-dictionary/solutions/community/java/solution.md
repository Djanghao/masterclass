# ✔️✔️Easy Solutions in Java ✔️✔️, Python ✔️, and C++ ✔️🧐Look at once 💻 with Exaplanation

**Author:** Vikas-Pathak-123
**Votes:** 46
**Link:** [https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/solutions/3421602/](https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/solutions/3421602/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
 >The idea is to use dynamic programming to calculate the number of ways to form the target string using the frequency of each character in each column of the matrix. We can keep track of the frequency of each character in each column of the matrix and then use a dp array to store the number of ways to form the prefix of target with the characters in the first i columns of the matrix. At each step, we can use the frequency array to calculate the number of ways to add the next character of the target to the prefix using the ith column of the matrix.

# Approach
<!-- Describe your approach to solving the problem. -->
>1. Calculate the frequency of each character in each column of the matrix using a 2D frequency array.

> 2. Initialize a 2D dp array with dp[i][j] = number of ways to form the prefix of target with length j using the first i columns of the matrix.

> 3. Initialize dp[0][0] = 1 to account for the empty prefix.
 
> 4. Use a nested loop to iterate over the columns and characters of the matrix and target string respectively.
 
> 5. Calculate the number of times the current character of the target appears in the current column of the matrix using the frequency array.
 
> 6. Update the dp array at each step using the recurrence relation dp[i][j] = dp[i-1][j] + charCount * dp[i-1][j-1], where charCount is the number of times the current character appears in the current column.
 
> 7. Return dp[n][target.length()], where n is the number of columns in the matrix.

# Complexity
>- Time complexity:
 >$$O(nm|target|)$$, where n is the number of columns in the matrix, m is the length of each word in the matrix, and |target| is the length of the target string.




> - Space complexity:
>Space complexity: $$O(n*|target|)$$, for the dp array.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```

# Code
``` Java []
class Solution {
    public int numWays(String[] words, String target) {
        int mod = 1000000007;
        int n = words[0].length();
        int[][] freq = new int[n][26]; // freq[i][j] = frequency of j+'a' in the ith column of the matrix
        
        for (int i = 0; i < words.length; i++) {
            for (int j = 0; j < n; j++) {
                freq[j][words[i].charAt(j) - 'a']++;
            }
        }
        
        int[][] dp = new int[n+1][target.length()+1]; // dp[i][j] = number of ways to form the prefix of target with length j using the first i columns of the matrix
        
        for (int i = 0; i <= n; i++) {
            dp[i][0] = 1;
        }
        
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= target.length(); j++) {
                int charCount = freq[i-1][target.charAt(j-1) - 'a'];
                dp[i][j] = (dp[i-1][j] + (int)((long)charCount * dp[i-1][j-1] % mod)) % mod;
            }
        }
        
        return dp[n][target.length()];
    }
}

```
```python []
class Solution(object):
    def numWays(self, words, target):
        """
        :type words: List[str]
        :type target: str
        :rtype: int
        """
        mod = 10**9 + 7
        m, n = len(words), len(words[0])
        
        # frequency array for each character in each column
        freq = [[0] * 26 for _ in range(n)]
        for j in range(n):
            for i in range(m):
                freq[j][ord(words[i][j]) - ord('a')] += 1
        
        # dp array to store the number of ways to form the prefix of target
        dp = [1] + [0] * len(target)
        
        # fill dp array from left to right
        for j in range(n):
            for i in range(len(target), 0, -1):
                dp[i] += dp[i-1] * freq[j][ord(target[i-1]) - ord('a')]
                dp[i] %= mod
                
        return dp[len(target)]
```
```C++ []
class Solution {
public:
    int numWays(vector<string>& words, string target) {
        int mod = 1e9 + 7;
        int m = words.size(), n = words[0].size();
        
        // frequency array for each character in each column
        vector<vector<int>> freq(n, vector<int>(26, 0));
        for (int j = 0; j < n; j++) {
            for (int i = 0; i < m; i++) {
                freq[j][words[i][j] - 'a']++;
            }
        }
        
        // dp array to store the number of ways to form the prefix of target
        vector<long long> dp(target.size() + 1, 0);
        dp[0] = 1;
        
        // fill dp array from left to right
        for (int j = 0; j < n; j++) {
            for (int i = target.size(); i > 0; i--) {
                dp[i] = (dp[i] + dp[i-1] * freq[j][target[i-1] - 'a']) % mod;
            }
        }
        
        return dp[target.size()];
    }
};
```

```JavaScript []
/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function(words, target) {
    const mod = 1e9 + 7;
    const m = words.length;
    const n = words[0].length;
    
    // frequency array for each character in each column
    const freq = Array.from({ length: n }, () => Array(26).fill(0));
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < m; i++) {
            freq[j][words[i].charCodeAt(j) - 97]++;
        }
    }
    
    // dp array to store the number of ways to form the prefix of target
    const dp = Array(target.length + 1).fill(0);
    dp[0] = 1;
    
    // fill dp array from left to right
    for (let j = 0; j < n; j++) {
        for (let i = target.length; i > 0; i--) {
            dp[i] += dp[i-1] * freq[j][target.charCodeAt(i-1) - 97];
            dp[i] %= mod;
        }
    }
    
    return dp[target.length];
};

```
# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```