# ✅☑Beats 99% Users || [C++/Java/Python/JavaScript] || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 140
**Link:** [https://leetcode.com/problems/perfect-squares/solutions/4694883/](https://leetcode.com/problems/perfect-squares/solutions/4694883/)

---

# PLEASE UPVOTE IF IT HELPED

---
![Screenshot 2024-01-25 053401.png](./images/0.png)


---

# Approaches
(Also explained in the code)

1. **Dynamic Programming:** Utilizes dynamic programming to find the minimum number of perfect squares that sum up to the given number `n`.

1. **Initialization:** Initializes a vector `dp` of size `n + 1` where each element is initialized to `INT_MAX`, except `dp[0]` which is set to `0` since it doesn't require any perfect squares to represent.

1. `Iterative Calculation:` Iterates from `1` to `n` to calculate the minimum number of perfect squares required for each number.

1. `Inner Loop:` For each number `i`, iterates over all perfect squares less than or equal to `i` (from `1` to `sqrt(i)`) to find the minimum number of perfect squares required.

1. `Updating dp[i]:` Updates dp[i] with the minimum value found by comparing it with the current value of `dp[i - j * j] + 1`, where `j * j` represents the perfect square being considered.


# Complexity
- Time complexity:
   $$O(n * sqrt(n))$$
    

- Space complexity:
   $$O(n)$$
    


# Code
```C++ []

class Solution {
public:
    int numSquares(int n) {
        vector<int> dp(n + 1, INT_MAX);
        dp[0] = 0;
        for (int i = 1; i <= n; ++i) {
            for (int j = 1; j * j <= i; ++j){
            dp[i] = min(dp[i], dp[i - j * j] + 1);
            }
        }
        return dp[n];
    }
};




```
```Java []

class Solution {
    public int numSquares(int n) {
        int[] dp = new int[n + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0;
        for (int i = 1; i <= n; ++i) {
            int min_val = Integer.MAX_VALUE;
            for (int j = 1; j * j <= i; ++j) {
                min_val = Math.min(min_val, dp[i - j * j] + 1);
            }
            dp[i] = min_val;
        }
        return dp[n];
    }
}

```
```python3 []
class Solution:
    def numSquares(self, n: int) -> int:
        dp = [float('inf')] * (n + 1)
        dp[0] = 0
        for i in range(1, n + 1):
            min_val = float('inf')
            j = 1
            while j * j <= i:
                min_val = min(min_val, dp[i - j * j] + 1)
                j += 1
            dp[i] = min_val
        return dp[n]


```

```javascript []
var numSquares = function(n) {
    let dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= n; ++i) {
        let min_val = Infinity;
        for (let j = 1; j * j <= i; ++j) {
            min_val = Math.min(min_val, dp[i - j * j] + 1);
        }
        dp[i] = min_val;
    }
    return dp[n];
};


```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---