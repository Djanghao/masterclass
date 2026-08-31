# 5 Different Approach 🚀 || Full explained💯 ➡️ [Java/C++/C/Python3/Rust/JavaScript]

**Author:** Shivansu_7
**Votes:** 188
**Link:** [https://leetcode.com/problems/fibonacci-number/solutions/4586217/](https://leetcode.com/problems/fibonacci-number/solutions/4586217/)

---

# Intuition
1. Basic OOPS concept and the knowledge of signed and Unsigned Integer.
<!-- Describe your first thoughts on how to solve this problem. -->

# 1. Fastest Approach
###### *Works for only 32 bit signed Integer, as Fibonacci sequence grows exponentially.*
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    int[] fib_nums = {
            0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181,
            6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040,
            1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986,
            102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903
    };

    public int fib(int n) {
        return fib_nums[n];
    }
}
```
```C++ []
class Solution {
public:
    int fib(int n) {
        int fib_nums[] = {
            0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181,
            6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040,
            1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986,
            102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903
        };

        return fib_nums[n];
    }
};
```
```Python []
class Solution:
    fib_nums = [
        0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181,
        6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040,
        1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986,
        102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903
    ]

    def fib(self, n):
        return self.fib_nums[n]
```
```Rust []

impl Solution {
    pub fn fib(n: i32) -> i32 {
        const FIB_NUMS: [i32; 47] = [
            0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181,
            6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040,
            1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986,
            102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903,
        ];

        FIB_NUMS[n as usize]
    }
}
```
```JavaScript []
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const fibNums = [
        0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181,
        6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040,
        1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986,
        102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903
    ];

    return fibNums[n];
};
```
```C# []
public class Solution {
    int[] fib_nums = {
        0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181,
        6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040,
        1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986,
        102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903
    };

    public int Fib(int n) {
        return fib_nums[n];
    }
}
```

---

# 2. Recursive Approach
1. We know that in Fibonacci series, nth number is sum of previous two number i.e (n-1)+(n-2).
2. We are calling the function again and again by (n-1) and (n-2).
3. Base case will be `n==0` means 0th number which is `0` and `n==1` will be 1.

#### ***Recursive Tree***
```
                          fib(5)   
                     /                \\
               fib(4)                fib(3)   
             /        \\              /       \\ 
         fib(3)      fib(2)         fib(2)   fib(1)
        /    \\       /    \\        /      \\
  fib(2)   fib(1)  fib(1) fib(0) fib(1) fib(0)
  /     \\
fib(1) fib(0)
```


# Complexity
- Time complexity: $$O(2^n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


```Java []
class Solution {
    public int fib(int n) {
        if(n<=1) return n;
        return fib(n-1) + fib(n-2);
    }
}
```
```C++ []
class Solution {
public:
    int fib(int n) {
        if (n <= 1) return n;
        return fib(n - 1) + fib(n - 2);
    }
};
```
```Python []
class Solution:
    def fib(self, n: int) -> int:
        if n <= 1:
            return n
        return self.fib(n - 1) + self.fib(n - 2)
```

---

# 3. Dynamic Programming Tabulation
We can avoid the repeated work done in Recursion solution by storing the Fibonacci numbers calculated so far. 

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
```Java []
class Solution {
   // Dynamic Programming
    public int fib(int n) {
        if(n<=1) return n;
        /* Declare an array to store Fibonacci numbers. */
        int f[] = new int[n + 1]; // 1 extra to handle case, n = 0

        /* 0th and 1st number of the series are 0 and 1*/
        f[0] = 1;
        f[1] = 1;

        for (int i = 2; i <= n; i++) {
            /* Add the previous 2 numbers in the series and store it */
            f[i] = f[i - 1] + f[i - 2];
        }

        return f[n-1];
    }
}
```
```C++ []
class Solution {
public:
    int fib(int n) {
        int f[n+1];
        if (n == 1 || n == 0) return n;
        f[0] = 0;
        f[1] = 1; 
        for (int i=2; i<=n; i++) {
            f[i] = f[i-1] + f[i-2];
        }
        return f[n];
    }
};
```
```Python []
class Solution:
    def fib(self, n: int) -> int:
        if n <= 1:
            return n

        # Declare a list to store Fibonacci numbers
        f = [0] * (n + 1)  # 1 extra to handle case, n = 0

        # 0th and 1st numbers of the series are 1
        f[0] = 1
        f[1] = 1

        for i in range(2, n + 1):
            # Add the previous 2 numbers in the series and store it
            f[i] = f[i - 1] + f[i - 2]

        return f[n]
```
```JavaScript []
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n <= 1) {
        return n;
    }

    // Declare an array to store Fibonacci numbers
    const f = new Array(n + 1); // 1 extra to handle case, n = 0

    // 0th and 1st numbers of the series are 1
    f[0] = 1;
    f[1] = 1;

    for (let i = 2; i <= n; i++) {
        // Add the previous 2 numbers in the series and store it
        f[i] = f[i - 1] + f[i - 2];
    }

    return f[n];
};
```

---

# 4. Dynamic Programming Memoization(Top-Down)
We can avoid the repeated work done in Approach 2 Recursion by storing the Fibonacci numbers calculated so far. We just need to store all the values in an array.


# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```Java []
class Solution {
    public static int[] dp = new int[31];
    static {
        Arrays.fill(dp, -1); 
    }

    public  int fib(int n) {
        if (n <= 1) {
            return n;
        }

        // Temporary variables to store values of fib(n-1) & fib(n-2)
        int first, second;

        if (dp[n - 1] != -1) {
            first = dp[n - 1];
        } else {
            first = fib(n - 1);
        }

        if (dp[n - 2] != -1) {
            second = dp[n - 2];
        } else {
            second = fib(n - 2);
        }

        // Memoization
        return dp[n] = first + second;
    }
}
```
```C++ []
class Solution {
public:
    static vector<int> dp;

    Solution() {
        if (dp.empty()) {
            dp.resize(31, -1);
        }
    }

    int fib(int n) {
        if (n <= 1) {
            return n;
        }

        // Temporary variables to store values of fib(n-1) & fib(n-2)
        int first, second;

        if (dp[n - 1] != -1) {
            first = dp[n - 1];
        } else {
            first = fib(n - 1);
        }

        if (dp[n - 2] != -1) {
            second = dp[n - 2];
        } else {
            second = fib(n - 2);
        }

        // Memoization
        return dp[n] = first + second;
    }
};
```
```Python3 []
class Solution:
    dp = [-1] * 31

    def fib(self, n: int) -> int:
        if n <= 1:
            return n

        # Temporary variables to store values of fib(n-1) & fib(n-2)
        first = self.dp[n - 1] if self.dp[n - 1] != -1 else self.fib(n - 1)
        second = self.dp[n - 2] if self.dp[n - 2] != -1 else self.fib(n - 2)

        # Memoization
        self.dp[n] = first + second
        return self.dp[n]
```

---

# 5. Best Approach Using Math Formula
1. Concept of Differential Equation has been used in this formula.
2. It's better to cram this formula, you can use this in competetive programming, but nor recommended to use in interview.

```Java []
class Solution {
    public int fib(int n) {
        double sqrt5 = Math.sqrt(5);
        double fibN = Math.pow((1 + sqrt5) / 2, n) - Math.pow((1 - sqrt5) / 2, n);
        return (int) Math.round(fibN / sqrt5);
    }
}
```
```C++ []
class Solution {
public:
    int fib(int n) {
        double sqrt5 = sqrt(5);
        double fibN = pow((1 + sqrt5) / 2, n) - pow((1 - sqrt5) / 2, n);
        return round(fibN / sqrt5);
    }
};
```
```Python3 []
class Solution:
    def fib(self, n: int) -> int:
        sqrt5 = 5 ** 0.5
        fibN = ((1 + sqrt5) / 2) ** n - ((1 - sqrt5) / 2) ** n
        return round(fibN / sqrt5)
```
```JavaScript []
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const sqrt5 = Math.sqrt(5);
    const fibN = Math.pow((1 + sqrt5) / 2, n) - Math.pow((1 - sqrt5) / 2, n);
    return Math.round(fibN / sqrt5);
};
```
```C []
int fib(int n) {
    double sqrt5 = sqrt(5);
    double fibN = pow((1 + sqrt5) / 2, n) - pow((1 - sqrt5) / 2, n);
    return (int)round(fibN / sqrt5);
}
```

---


---

![5c63d377-8ef4-4beb-b09d-0edb07e09a41_1702955205.6568592.png](./images/0.png)


