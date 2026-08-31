# 💯Faster✅💯 Lesser✅4 Methods🔥Simple Math🔥Dynamic Programming🔥Greedy Approach🔥Memoization

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 91
**Link:** [https://leetcode.com/problems/integer-break/solutions/4135963/](https://leetcode.com/problems/integer-break/solutions/4135963/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share 4 ways to solve this question with detailed explanation of each approach:

# Problem Explaination: 
- The goal is to find the maximum product that can be obtained for any given positive integer n.

- Here are some key points to understand about the problem:
    - You must break n into at least two parts, meaning that n itself cannot be one of the parts.
    - The parts into which n is broken must be positive integers, which means they are greater than zero.
    - The problem does not specify how many parts n should be broken into, but you need to determine the number and values of these parts to maximize their product.
    - You need to find an optimal strategy to break n into parts to maximize the product, and this often involves some mathematical analysis and dynamic programming techniques.
    - Solving this problem requires finding an algorithm or approach that determines the best way to break a given integer n into parts and calculates the maximum product efficiently. Various techniques, such as dynamic programming, mathematical analysis, and greedy algorithms, can be used to solve this problem, as described below.

# \uD83D\uDD0D Methods To Solve This Problem:
I'll be covering four different methods to solve this problem:
1. Dynamic Programming (Bottom-Up)
2. Dynamic Programming (Top-Down with Memoization)
3. Greedy Approach
4. Mathematical Approach

# 1. Dynamic Programming (Bottom-Up): 

- Create an array dp of size n+1 to store the maximum product for each integer from 1 to n.
- Initialize dp[1] = 1 since the maximum product for 1 is 1.
- Iterate from i = 2 to n and for each i, iterate from j = 1 to i-1.
- Calculate dp[i] as the maximum of dp[i], j * (i - j), and j * dp[i - j].
- The final answer is dp[n].
# Complexity
- \u23F1\uFE0F Time Complexity: O(n^2)

- \uD83D\uDE80 Space Complexity: O(n)

# Code
```Python []
class Solution:
    def integerBreak(self, n: int) -> int:
        dp = [0] * (n + 1)
        dp[1] = 1
        for i in range(2, n + 1):
            dp[i] = -float('inf')
            for j in range(1, i):
                dp[i] = max(dp[i], j * (i - j), j * dp[i - j])
        return dp[n]
```
```Java []
class Solution {
    public int integerBreak(int n) {
        if (n <= 1) {
            return 0;
        }
        int[] dp = new int[n + 1];
        dp[1] = 1;
        for (int i = 2; i <= n; i++) {
            for (int j = 1; j < i; j++) {
                dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
            }
        }
        return dp[n];
    }
}
```
```C++ []
class Solution {
public:
    int integerBreak(int n) {
        vector<int> dp(n + 1, 0);
        dp[1] = 1;
        for (int i = 2; i <= n; ++i) {
            for (int j = 1; j < i; ++j) {
                dp[i] = max(dp[i], max(j * (i - j), j * dp[i - j]));
            }
        }
        return dp[n];
    }
};
```
```C []
int integerBreak(int n) {
    if (n < 2) {
        return 0;
    }
    int dp[n + 1];
    dp[1] = 1;
    for (int i = 2; i <= n; i++) {
        dp[i] = 0;
        for (int j = 1; j < i; j++) {
            dp[i] = max(dp[i], max(j * (i - j), j * dp[i - j]));
        }
    }
    return dp[n];
}
```
# 2. Dynamic Programming (Top-Down with Memoization):
- Create a memoization table memo of size n+1 to store already computed values.
- Create a recursive function maxProduct(n) to calculate the maximum product.
- Inside the function, if n is in memo, return memo[n].
- Otherwise, calculate memo[n] by iterating through possible splits and taking the maximum.
- Return memo[n] as the result.
# Complexity
- \u23F1\uFE0F Time Complexity: O(n^2)

- \uD83D\uDE80 Space Complexity: O(n) (for the memoization table)

# Code
```Python []
class Solution:
    def integerBreak(self, n: int) -> int:
        memo = [-1] * (n + 1)
        def maxProduct(k):
            if memo[k] != -1:
                return memo[k]
            if k == 1:
                return 1
            result = -float('inf')
            for i in range(1, k):
                result = max(result, i * maxProduct(k - i), i * (k - i))
            memo[k] = result
            return result
        return maxProduct(n)
```
```Java []
class Solution {
    public int integerBreak(int n) {
        if (n <= 1) {
            return 0;
        }
        int[] memo = new int[n + 1];
        return maxProduct(n, memo);
    }
    
    private int maxProduct(int n, int[] memo) {
        if (n == 2) {
            return 1;
        }
        if (memo[n] != 0) {
            return memo[n];
        }
        int max = 0;
        for (int i = 1; i < n; i++) {
            max = Math.max(max, Math.max(i * (n - i), i * maxProduct(n - i, memo)));
        }
        memo[n] = max;
        return max;
    }
}
```
```C++ []
class Solution {
public:
    int integerBreak(int n) {
        vector<int> memo(n + 1, -1);
        return maxProduct(n, memo);
    }

private:
    int maxProduct(int n, vector<int>& memo) {
        if (n == 1) return 1;
        if (memo[n] != -1) return memo[n];
        int maxProd = 0;
        for (int i = 1; i < n; ++i) {
            maxProd = max(maxProd, max(i * (n - i), i * maxProduct(n - i, memo)));
        }
        memo[n] = maxProd;
        return maxProd;
    }
};
```
```C []
int memo[101]; 

int maxProduct(int n) {
    if (n <= 2) {
        return 1;
    }
    if (memo[n] != 0) {
        return memo[n];
    }
    int max = 0;
    for (int i = 1; i <= n - 1; i++) {
        int product = i * (n - i);
        if (product > max) {
            max = product;
        }
        product = i * maxProduct(n - i);
        if (product > max) {
            max = product;
        }
    }
    memo[n] = max;
    return max;
}

int integerBreak(int n) {
    if (n < 2) {
        return 0;
    }
    for (int i = 0; i <= n; i++) {
        memo[i] = 0;
    }
    return maxProduct(n);
}
```
# 3. Greedy Approach:
   - If n is less than or equal to 3, return n - 1 as the maximum product (special cases).
- Initialize a variable result to 1.
- While n is greater than 4:
    - Multiply result by 3.
    - Subtract 3 from n.
- Multiply result by n to get the final result.
# Complexity
- \u23F1\uFE0F Time Complexity: O(1)

- \uD83D\uDE80 Space Complexity: O(1)

# Code
```Python []
class Solution:
    def integerBreak(self, n: int) -> int:
        if n == 2:
            return 1
        if n == 3:
            return 2
        result = 1
        while n > 4:
            result *= 3
            n -= 3
        return result * n
```
```Java []
class Solution {
    public int integerBreak(int n) {
        if (n <= 1) {
            return 0; 
        }
        if (n == 2) {
            return 1;
        }
        if (n == 3) {
            return 2;
        }
        int result = 1;
        while (n > 4) {
            result *= 3;
            n -= 3;
        }
        result *= n;
        return result;
    }
}
```
```C++ []
class Solution {
public:
    int integerBreak(int n) {
        if (n <= 3) {
            return n - 1;
        }
        int result = 1;
        while (n > 4) {
            result *= 3;
            n -= 3;
        }
        result *= n;
        return result;
    }
};
```
```C []
int integerBreak(int n) {
    if (n < 2) {
        return 0;
    }
    if (n == 2) {
        return 1;
    }
    if (n == 3) {
        return 2;
    }
    int product = 1;
    while (n > 4) {
        product *= 3;
        n -= 3;
    }
    product *= n;
    return product;
}
```
# 4. Mathematical Approach:
   - If n is less than or equal to 3, return n - 1 as the maximum product (special cases).
- Calculate the quotient q when dividing n by 3.
- Calculate the remainder r when dividing n by 3.
- If r is 0, return 3^q.
- If r is 1, return (3^(q-1)) * 4.
- If r is 2, return (3^q) * 2.
# Complexity
- \u23F1\uFE0F Time Complexity: O(1)

- \uD83D\uDE80 Space Complexity: O(1)

# Code
```Python []
class Solution:
    def integerBreak(self, n: int) -> int:
        if n == 2:
            return 1
        if n == 3:
            return 2=
        q = n // 3
        r = n % 3
        if r == 0:
            return 3 ** q
        elif r == 1:
            return (3 ** (q - 1)) * 4
        else:
            return (3 ** q) * 2
```
```Java []
class Solution {
    public int integerBreak(int n) {
        if (n <= 1) {
            return 0;
        }
        if (n == 2) {
            return 1;
        }
        if (n == 3) {
            return 2;
        }
        int quotient = n / 3;
        int remainder = n % 3;
        if (remainder == 0) {
            return (int) Math.pow(3, quotient);3
        } else if (remainder == 1) {
            return (int) (Math.pow(3, quotient - 1) * 4);1
        } else {
            return (int) (Math.pow(3, quotient) * 2);
        }
    }
}

```
```C++ []
class Solution {
public:
    int integerBreak(int n) {
        if (n <= 3) {
            return n - 1;
        }
        int quotient = n / 3;
        int remainder = n % 3;
        if (remainder == 0) {
            return pow(3, quotient);
        } else if (remainder == 1) {
            return pow(3, quotient - 1) * 4;
        } else {
            return pow(3, quotient) * 2;
        }
    }
};

```
```C []
int integerBreak(int n) {
    if (n < 2) {
        return 0;
    }
    if (n == 2) {
        return 1;
    }
    if (n == 3) {
        return 2; 
    }
    int quotient = n / 3;
    int remainder = n % 3;
    if (remainder == 0) {
        return pow(3, quotient);
    } else if (remainder == 1) {
        return 4 * pow(3, quotient - 1);
    } else {
        return 2 * pow(3, quotient);
    }
}
```
# \uD83C\uDFC6Conclusion: 
The mathematical approach and the greedy approach are the most efficient in terms of time and space complexity. The mathematical approach is especially efficient as it doesn't require any loops or recursion and can directly compute the result based on the mathematical properties of the problem.

# \uD83D\uDCA1 I invite you to check out my profile for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA