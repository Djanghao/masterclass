# DP C++ Java & Python

**Author:** cpcs
**Votes:** 17
**Link:** [https://leetcode.com/problems/count-of-integers/solutions/3594897/](https://leetcode.com/problems/count-of-integers/solutions/3594897/)

---

# Intuition
DP, not only for this question but also for similar questions. We can calculate the string digit by digit from the most significant position.


# Approach


Give a number x (string),  we construct a new string with the same length digit by digit from the most significant digit.


Let dp[i][j = 0/1][k] be the partial result, namely the number of strings that satisfy 


(prefix) length is i,
j = 0 means the current prefix equals to x\u2019s prefix of the same length.
       j = 1 means the current prefix is smaller than x\u2019s prefix of the same length.
the current sum of digits is k.


It\u2019s simple to right the dp induction if we enumerate the current digit (the least significant).
For instance, if j == 0, the current digit must <= x\u2019s digit at the same position.
And if j == 1, the current digit is arbitrary. This is just like the alphabet's lexical order.


Note the dp induction relies on the value of x (which is hidden).
Then the number of strings that are no larger than x with digit sum in the range of [min_sum, max_sum] is
Sigma (dp[length_of_x][j = 0/1][i]) where i is from min_sum to max_sum.


If we create this helper function, the final answer is just 
helper(num2) - helper(num1 - 1) (we need to make num1 as an integer then minus 1, and change it back to string).
For implementation, we can calculate helper(num2) - helper(num1) and if num1 is also one answer, we add the final result by 1 to avoid doing the \u201C-1\u201D in the string.




# Complexity


- Time complexity:
O(num2.length() * min(num2.length() * 9, max_sum) * 20)
- Space complexity:
O(min(num2.length() * 9, max_sum))


# Code


C++
```
class Solution {
    const int M = 1000000007;
    
    void add(int &x, int y) {
        if ((x += y) >= M) {
            x -= M;
        }
    }
    
    void sub(int &x, int y) {
        if ((x -= y) < 0) {
            x += M;
        }
    }
    
    int count(const string &s, int min_sum, int max_sum) {
        const int n = s.length();
        const int m = min(max_sum, 9 * n);
        vector<vector<vector<int>>> dp(2, vector<vector<int>>(2, vector<int>(m + 1)));
        dp[0][0][0] = 1;
        int last = 0;
        for (int i = 0, p = 0; i < n; ++i, p +=9) {
            const int now = last ^ 1;
            dp[now] = vector<vector<int>>(2, vector<int>(m + 1));
            for (int j = 0; j < 2; ++j) {
                for (int k = 0; k <= m && k <= p; ++k) {
                    if (dp[last][j][k] == 0) {
                        continue;
                    }
                    for (char c = j ? '9' : s[i]; c >= '0'; --c) {
                        const int q = k + c - '0';
                        if (q <= m) {
                           add(dp[now][j || c < s[i]][q], dp[last][j][k]); 
                        }
                    }
                }
            }
            last ^= 1;
        }
        int r = 0;
        for (int i = 0; i < 2; ++i) {
            for (int j = min_sum; j <= m; ++j) {
                add(r, dp[last][i][j]);
                
            }
        }
        return r;
        
    }
public:
    int count(string num1, string num2, int min_sum, int max_sum) {
        int s = 0;
        for (char c : num1) {
            s += c - '0'; 
        }
        int r = count(num2, min_sum, max_sum);
        sub(r, count(num1, min_sum, max_sum));
        if (s >= min_sum && s <= max_sum) {
            add(r, 1);
        } 
        return r;
    }
};


```


Java
```
class Solution {
    private static final int M = 1000000007;


    private int add(int x, int y) {
        int sum = x + y;
        if (sum >= M) {
            sum -= M;
        }
        return sum;
    }


    private int sub(int x, int y) {
        int diff = x - y;
        if (diff < 0) {
            diff += M;
        }
        return diff;
    }


    private int count(String s, int min_sum, int max_sum) {
        final int n = s.length(), m = Math.min(max_sum, 9 * n);
        int[][][] dp = new int[2][2][m + 1];
        dp[0][0][0] = 1;
        int last = 0;
        for (int i = 0, p = 0; i < n; ++i, p += 9) {
            final int now = last ^ 1;
            dp[now] = new int[2][m + 1];
            for (int j = 0; j < 2; ++j) {
                for (int k = 0; k <= m && k <= p; ++k) {
                    if (dp[last][j][k] == 0) {
                        continue;
                    }
                    for (char c = j != 0 ? '9' : s.charAt(i); c >= '0'; --c) {
                        final int q = k + c - '0';
                        if (q <= m) {
                            dp[now][j != 0 || c < s.charAt(i) ? 1 : 0][q] = add(dp[now][j != 0 || c < s.charAt(i) ? 1 : 0][q], dp[last][j][k]);
                        }
                    }
                }
            }
            last ^= 1;
        }
        int r = 0;
        for (int i = 0; i < 2; ++i) {
            for (int j = min_sum; j <= m; ++j) {
                r = add(r, dp[last][i][j]);
            }
        }
        return r;
    }


    public int count(String num1, String num2, int min_sum, int max_sum) {
        int s = 0;
        for (char c : num1.toCharArray()) {
            s += c - '0';
        }
        int r = count(num2, min_sum, max_sum);
        r = sub(r, count(num1, min_sum, max_sum));
        if (s >= min_sum && s <= max_sum) {
            r = add(r, 1);
        }
        return r;
    }
}




```


Python3
```
class Solution:
    M = 1000000007


    def add(self, x, y) -> int:
        x += y
        if x >= self.M:
            x -= self.M
        return x


    def sub(self, x, y) -> int:
        x -= y
        if x < 0:
            x += self.M
        return x


    def count_strings(self, s, min_sum, max_sum) -> int:
        n = len(s)
        m = min(max_sum, 9 * n)
        dp = [[[0 for _ in range(m + 1)] for _ in range(2)] for _ in range(2)]
        dp[0][0][0] = 1
        last = 0
        for i in range(n):
            p = i * 9
            now = last ^ 1
            dp[now] = [[0 for _ in range(m + 1)] for _ in range(2)]
            for j in range(2):
                for k in range(min(m, p) + 1):
                    if dp[last][j][k] == 0:
                        continue
                    for c in range(ord('9') if j else ord(s[i]), ord('0') - 1, -1):
                        q = k + c - ord('0')
                        if q <= m:
                            dp[now][j or (c < ord(s[i]))][q] = self.add(
                                dp[now][j or (c < ord(s[i]))][q], dp[last][j][k]
                            )
            last ^= 1
        r = 0
        for i in range(2):
            for j in range(min_sum, m + 1):
                r = self.add(r, dp[last][i][j])
        return r


    def count(self, num1, num2, min_sum, max_sum) -> int:
        s = sum(int(c) for c in num1)
        r = self.count_strings(num2, min_sum, max_sum)
        r = self.sub(r, self.count_strings(num1, min_sum, max_sum))
        if min_sum <= s <= max_sum:
            r = self.add(r, 1)
        return r


```



