# 💯Faster✅💯Lesser✅4 Methods🧠Detailed Approach🎯DP🔥Memo🔥Space Optimization🔥Python🐍Java☕C++😎

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 65
**Link:** [https://leetcode.com/problems/n-th-tribonacci-number/solutions/5064679/](https://leetcode.com/problems/n-th-tribonacci-number/solutions/5064679/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share 4 ways to solve this question with detailed explanation of each approach:

# \uD83C\uDFAFProblem Explaination: 
The problem involves computing the N-th Tribonacci number, where the Tribonacci sequence is defined as follows:
- T(0) = 0
- T(1) = 1
- T(2) = 1
- T(n) = T(n-1) + T(n-2) + T(n-3) for n >= 3

In other words, each Tribonacci number (starting from the fourth term onwards) is the sum of the previous three Tribonacci numbers.

### \uD83D\uDCE5Input:
The input to the problem is a single integer `n` representing the index of the Tribonacci number to be computed. The value of `n` is non-negative (i.e., `n >= 0`).

### \uD83D\uDCE4Output:
The output should be a single integer representing the N-th Tribonacci number.

This problem can be solved using various methods such as recursive approaches, dynamic programming (with or without memoization), and iterative methods. The goal is to efficiently compute the N-th Tribonacci number given the sequence's defined rules.

# \uD83D\uDD0D Methods To Solve This Problem:
I'll be covering four different methods to solve this problem:
1. Recursive Approach
2. Dynamic Programming (Memoization)
3. Iterative Approach (Dynamic Programming)
4. Space-Optimized Iterative Approach

# 1\uFE0F\u20E3Recursive Approach\uD83E\uDD13: 
The recursive approach directly follows the definition of the Tribonacci sequence. We define a recursive function `tribonacci(n)` that computes `T(n)` based on the recurrence relation:
- `T(0) = 0`
- `T(1) = 1`
- `T(2) = 1`
- `T(n) = T(n-1) + T(n-2) + T(n-3)` for `n >= 3`

**Detailed Steps:**
1. Base Cases:
   - If `n == 0`, return `0`.
   - If `n == 1` or `n == 2`, return `1`.
2. Recursive Case:
   - For `n >= 3`, recursively compute `T(n)` as `T(n-1) + T(n-2) + T(n-3)`.

**Time Complexity:** The time complexity of this recursive solution is exponential (`O(3^n)`), as each call branches into three recursive calls.


<!-- # Complexity
* \u23F1\uFE0F Time Complexity: `O(nlogn)` for summing up the array.

* \uD83D\uDE80 Space Complexity: `O(1)`  -->

# Code\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB(TLE\u274C):
```Python []
class Solution:
    def tribonacci(self, n: int) -> int:
        if n == 0:
            return 0
        elif n == 1 or n == 2:
            return 1
        else:
            return self.tribonacci(n - 1) + self.tribonacci(n - 2) + self.tribonacci(n - 3)
```
```Java []
class Solution {
    public int tribonacci(int n) {
        if (n == 0) {
            return 0;
        } else if (n == 1 || n == 2) {
            return 1;
        } else {
            return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
        }
    }
}

```
```C++ []
class Solution {
public:
    int tribonacci(int n) {
        if (n == 0) {
            return 0;
        } else if (n == 1 || n == 2) {
            return 1;
        } else {
            return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
        }
    }
};

```
#  2\uFE0F\u20E3Dynamic Programming (Memoization)\uD83D\uDE0E:
This approach uses dynamic programming with memoization to optimize the recursive solution. We define a helper function that recursively computes `T(n)` and stores already computed values in a dictionary (`memo`) to avoid redundant calculations.

**Detailed Steps:**
1. Use a `memo` dictionary to store already computed Tribonacci numbers.
2. Define a recursive `helper` function that computes `T(n)`:
   - If `n` is in `memo`, return its value.
   - Base Cases:
     - If `n == 0`, return `0`.
     - If `n == 1` or `n == 2`, return `1`.
   - Recursive Case:
     - Compute `T(n)` recursively as `T(n-1) + T(n-2) + T(n-3)`.
     - Store the computed value in `memo`.
     - Return the computed value.

<!-- # Complexity
* \u23F1\uFE0F Time Complexity: `O(n)` - for summing up the array.

* \uD83D\uDE80 Space Complexity: `O(1)` -->

# Code\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def tribonacci(self, n: int) -> int:
        memo = {}
        
        def helper(n):
            if n in memo:
                return memo[n]
            if n == 0:
                return 0
            elif n == 1 or n == 2:
                return 1
            else:
                result = helper(n - 1) + helper(n - 2) + helper(n - 3)
                memo[n] = result
                return result
        
        return helper(n)
```
```Java []
class Solution {
    public int tribonacci(int n) {
        Map<Integer, Integer> memo = new HashMap<>();
        return helper(n, memo);
    }
    
    private int helper(int n, Map<Integer, Integer> memo) {
        if (memo.containsKey(n)) {
            return memo.get(n);
        }
        
        int result;
        if (n == 0) {
            result = 0;
        } else if (n == 1 || n == 2) {
            result = 1;
        } else {
            result = helper(n - 1, memo) + helper(n - 2, memo) + helper(n - 3, memo);
        }
        
        memo.put(n, result);
        return result;
    }
}
```
```C++ []
class Solution {
public:
    int tribonacci(int n) {
        std::unordered_map<int, int> memo;
        return helper(n, memo);
    }
    
private:
    int helper(int n, std::unordered_map<int, int>& memo) {
        if (memo.find(n) != memo.end()) {
            return memo[n];
        }
        
        int result;
        if (n == 0) {
            result = 0;
        } else if (n == 1 || n == 2) {
            result = 1;
        } else {
            result = helper(n - 1, memo) + helper(n - 2, memo) + helper(n - 3, memo);
        }
        
        memo[n] = result;
        return result;
    }
};
```
# 3\uFE0F\u20E3Iterative Approach (Dynamic Programming)\uD83D\uDE0E:
This approach uses an iterative dynamic programming technique to compute the Tribonacci numbers from `T(0)` up to `T(n)`.

**Detailed Steps:**
1. Initialize a list `dp` to store the Tribonacci numbers.
2. Base Cases:
   - If `n == 0`, return `0`.
   - If `n == 1` or `n == 2`, return `1`.
3. Fill in the `dp` list iteratively from `dp[3]` up to `dp[n]` using the recurrence relation:
   - `dp[i] = dp[i-1] + dp[i-2] + dp[i-3]` for `i >= 3`.
4. Return `dp[n]`, which is the N-th Tribonacci number.

<!-- **Time Complexity:** The time complexity of this solution is `O(n)` since we iterate `n` times to fill in the `dp` array. -->

<!-- # Complexity
* \u23F1\uFE0F Time Complexity: `O(n)` - for XORing all the numbers

* \uD83D\uDE80 Space Complexity: `O(1)` -->

# Code\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def tribonacci(self, n: int) -> int:
        if n == 0:
            return 0
        elif n == 1 or n == 2:
            return 1
        
        dp = [0] * (n + 1)
        dp[1] = 1
        dp[2] = 1
        
        for i in range(3, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
        
        return dp[n]
```
```Java []
class Solution {
    public int tribonacci(int n) {
        if (n == 0) {
            return 0;
        } else if (n == 1 || n == 2) {
            return 1;
        }
        
        int[] dp = new int[n + 1];
        dp[1] = 1;
        dp[2] = 1;
        
        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
        }
        
        return dp[n];
    }
}

```
```C++ []
class Solution {
public:
    int tribonacci(int n) {
        if (n == 0) {
            return 0;
        } else if (n == 1 || n == 2) {
            return 1;
        }
        
        std::vector<int> dp(n + 1);
        dp[1] = 1;
        dp[2] = 1;
        
        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
        }
        
        return dp[n];
    }
};
```
# 4\uFE0F\u20E3Space-Optimized Iterative Approach\uD83D\uDE0E:
This approach optimizes the space usage by keeping only the necessary previous Tribonacci numbers in variables (`a`, `b`, `c`) instead of storing all previous values in a list.

**Detailed Steps:**
1. Use three variables `a`, `b`, and `c` to keep track of the last three Tribonacci numbers (`T(n-3)`, `T(n-2)`, `T(n-1)`).
2. Base Cases:
   - If `n == 0`, return `0`.
   - If `n == 1` or `n == 2`, return `1`.
3. Update the variables iteratively from `3` up to `n` using the recurrence relation:
   - `next_trib = a + b + c`
   - Update `a`, `b`, `c` accordingly for the next iteration.
4. After the loop, `c` will contain `T(n)`, which is the N-th Tribonacci number.


<!-- # Complexity
* \u23F1\uFE0F Time Complexity: `O(n)` for iterating over the array and the sequence.

* \uD83D\uDE80 Space Complexity: `O(n)` for the hash table. -->

# Code\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def tribonacci(self, n: int) -> int:
        if n == 0:
            return 0
        elif n == 1 or n == 2:
            return 1
        
        a, b, c = 0, 1, 1
        
        for i in range(3, n + 1):
            next_trib = a + b + c
            a = b
            b = c
            c = next_trib
        
        return c
```
```Java []
class Solution {
    public int tribonacci(int n) {
        if (n == 0) {
            return 0;
        } else if (n == 1 || n == 2) {
            return 1;
        }
        
        int a = 0, b = 1, c = 1;
        int nextTrib;
        
        for (int i = 3; i <= n; i++) {
            nextTrib = a + b + c;
            a = b;
            b = c;
            c = nextTrib;
        }
        
        return c;
    }
}
```
```C++ []
class Solution {
public:
    int tribonacci(int n) {
        if (n == 0) {
            return 0;
        } else if (n == 1 || n == 2) {
            return 1;
        }
        
        int a = 0, b = 1, c = 1;
        int nextTrib;
        
        for (int i = 3; i <= n; i++) {
            nextTrib = a + b + c;
            a = b;
            b = c;
            c = nextTrib;
        }
        
        return c;
    }
};
```

# \uD83D\uDCA1 I invite you to check out [my profile](https://leetcode.com/Mohammed_Raziullah_Ansari/) for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA