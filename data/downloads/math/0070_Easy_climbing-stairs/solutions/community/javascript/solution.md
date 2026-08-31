# ✅☑Beats 100% Users || [C++/Java/Python/JavaScript] || 4 Approaches || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 170
**Link:** [https://leetcode.com/problems/climbing-stairs/solutions/4584184/](https://leetcode.com/problems/climbing-stairs/solutions/4584184/)

---

# PLEASE UPVOTE IF IT HELPED

---

![Screenshot 2024-01-18 053306.png](./images/0.png)

---

# Approaches
(Also explained in the code)

#### *Approach 1(Math)*

1. **Initialization:** Start with `ways = 1`, considering the default way of taking all steps at once.

1. **Iterative Approach:**

    - Iterate from 1 to `n / 2` to explore different step sizes.
    - For each step size, calculate a product using a nested loop, involving a combinatorial formula (C(n, k) = n! / (k! * (n - k)!)).
1. **Accumulation:** Accumulate the product in the `sum` variable.

1. **Result:** Add the `sum` to the `ways` variable for each step size.

1. **Return:** The final value of `ways` represents the total number of distinct ways to climb the stairs.



# Complexity
- Time complexity:
   $$O(n^2)$$
    

- Space complexity:
   $$O(1)$$
    


# Code
```C++ []

class Solution {
public:
    int climbStairs(int n) {
        int ways = 1;

        for (int i = 1; i <= n / 2; i++) {
            double sum = 1;

            for (int j = i; j < 2 * i; j++) {
                sum *= (double)(n - j) / (j - i + 1);
            }

            ways +=sum;
        }

        return ways;
    }
};



```
```Java []

class Solution {
    public int climbStairs(int n) {
        int ways = 1;

        for (int i = 1; i <= n / 2; i++) {
            double sum = 1;

            for (int j = i; j < 2 * i; j++) {
                sum *= (double)(n - j) / (j - i + 1);
            }

            ways += sum;
        }

        return ways;
    }
}



```
```python3 []
class Solution:
    def climbStairs(self, n: int) -> int:
        ways = 1

        for i in range(1, (n // 2) + 1):
            product = 1

            for j in range(i, 2 * i):
                product *= (n - j) / (j - i + 1)

            ways += product

        return int(ways)



```
```javascript []
class Solution {
public:
    int climbStairs(int n) {
        int ways = 1;

        for (int i = 1; i <= n / 2; i++) {
            double sum = 1;

            for (int j = i; j < 2 * i; j++) {
                sum *= (double)(n - j) / (j - i + 1);
            }

            ways +=sum;
        }

        return ways;
    }
};


```
---
#### *Approach 2(Top-Down DP)*

1. The function solve is a recursive helper function for calculating the number of distinct ways to climb stairs.
1. It uses memoization by storing intermediate results in the `dp` array to avoid redundant calculations.
1. **Base cases:** If `n` is less than 0, the result is 0. If `n` is 0, there is one way to climb (doing nothing).
1. The function recursively calculates the number of ways by summing the results of climbing `(n-1)` stairs and `(n-2)` stairs.



# Complexity
- Time complexity:
   $$O(n)$$
    

- Space complexity:
   $$O(n)$$
    


# Code
```C++ []
class Solution {
public:


    int solve(int n,vector<int>&dp){
        if(n<0)return 0;
        if(n==0)return 1;

        if(dp[n]!=-1)return dp[n];

        dp[n]= solve(n-1,dp) + solve(n-2,dp);
        
        return dp[n];
    }
    int climbStairs(int n) {
        vector<int>dp(n+1,-1);
        return solve(n,dp);
    }
}; 


```
```Java []



class Solution {
    public int climbStairs(int n) {
        int[] dp = new int[n + 1];
        Arrays.fill(dp, -1);
        return solve(n, dp);
    }

    private int solve(int n, int[] dp) {
        if (n < 0) return 0;
        if (n == 0) return 1;

        if (dp[n] != -1) return dp[n];

        dp[n] = solve(n - 1, dp) + solve(n - 2, dp);

        return dp[n];
    }
}



```
```python3 []
class Solution:
    def climbStairs(self, n: int) -> int:
        dp = [-1] * (n + 1)
        return self.solve(n, dp)

    def solve(self, n, dp):
        if n < 0:
            return 0
        if n == 0:
            return 1

        if dp[n] != -1:
            return dp[n]

        dp[n] = self.solve(n - 1, dp) + self.solve(n - 2, dp)

        return dp[n]



```
```javascript []
class Solution {
    climbStairs(n) {
        const dp = new Array(n + 1).fill(-1);
        return this.solve(n, dp);
    }

    solve(n, dp) {
        if (n < 0) return 0;
        if (n == 0) return 1;

        if (dp[n] != -1) return dp[n];

        dp[n] = this.solve(n - 1, dp) + this.solve(n - 2, dp);

        return dp[n];
    }
}



```
---
#### *Approach 3(Bottom-Up DP)*

1. The `solve` function is a recursive function that calculates the number of distinct ways to climb stairs from step `i` to the top (`n`).
1. **Base cases:** If `i` equals `n`, return 1 (reached the top). If `i` exceeds `n`, return 0 (invalid path).
1. Memoization: Use a `dp` array to store already computed results to avoid redundant calculations.
1. Recursive formula: The number of ways to climb stairs from step `i` to the top is the sum of ways from `i+1` and `i+2`.
1. The `climbStairs` function initiates the recursion with `i=0` and returns the result.




# Complexity
- Time complexity:
   $$O(n)$$
    

- Space complexity:
   $$O(n)$$
    


# Code
```C++ []
class Solution {
public:

    int solve(int i, int n, vector<int>& dp) {
        if (i == n) return 1;
        if (i > n) return 0;

        if (dp[i] != -1) return dp[i];

        dp[i] = solve(i + 1, n, dp) + solve(i + 2, n, dp);

        return dp[i];
    }

    int climbStairs(int n) {
        vector<int> dp(n + 1, -1);
        return solve(0, n, dp);
    }
};

```
```Java []

class Solution {
    public int climbStairs(int n) {
        int[] dp = new int[n + 1];
        Arrays.fill(dp, -1);
        return solve(0, n, dp);
    }

    private int solve(int i, int n, int[] dp) {
        if (i == n) return 1;
        if (i > n) return 0;

        if (dp[i] != -1) return dp[i];

        dp[i] = solve(i + 1, n, dp) + solve(i + 2, n, dp);

        return dp[i];
    }
}



```
```python3 []
class Solution:
    def climbStairs(self, n: int) -> int:
        dp = [-1] * (n + 1)
        return self.solve(0, n, dp)

    def solve(self, i, n, dp):
        if i == n:
            return 1
        if i > n:
            return 0

        if dp[i] != -1:
            return dp[i]

        dp[i] = self.solve(i + 1, n, dp) + self.solve(i + 2, n, dp)

        return dp[i]



```
```javascript []
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = new Array(n + 1).fill(-1);
    return solve(0, n, dp);
};

var solve = function(i, n, dp) {
    if (i === n) return 1;
    if (i > n) return 0;

    if (dp[i] !== -1) return dp[i];

    dp[i] = solve(i + 1, n, dp) + solve(i + 2, n, dp);

    return dp[i];
};




```
---

#### *Approach 4(Space Optimized)*

1. **Initialization:** Initialize three variables `a`, `b`, and `c` to 0, 1, and 0 respectively. These variables represent the number of ways to climb the stairs at the current, previous, and two steps ago, respectively.

1. **Iterative Calculation:** Use a loop to iterate `n` times. In each iteration:

    - Update `c` to be the sum of `a` and `b`.
    - Update `a` to the previous value of `b`.
    - Update `b` to the current value of `c`.
1. **Final Result:** After the loop, the value of `b` represents the number of ways to climb the staircase with `n` steps.

1. **Return Result:** Return the final value of `b` as the result of the `climbStairs` function.




# Complexity
- Time complexity:
   $$O(n)$$
    

- Space complexity:
   $$O(1)$$
    


# Code
```C++ []
class Solution {
public:

    int climbStairs(int n) {
        
        int a =0;
        int b=1;
        int c=0;
        for(int i=0;i<n;i++){
            c = a+b;
            a=b;
            b=c;
        }
        return b;
    }
};

```
```Java []
public class Solution {
    public int climbStairs(int n) {
        int a = 0;
        int b = 1;
        int c = 0;
        
        for (int i = 0; i < n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        
        return b;
    }
}




```
```python3 []

class Solution:
    def climbStairs(self, n: int) -> int:
        a, b, c = 0, 1, 0
        
        for i in range(n):
            c = a + b
            a, b = b, c
        
        return b


```
```javascript []

class Solution {
    climbStairs(n) {
        let a = 0;
        let b = 1;
        let c = 0;

        for (let i = 0; i < n; i++) {
            c = a + b;
            a = b;
            b = c;
        }

        return b;
    }
}




```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---