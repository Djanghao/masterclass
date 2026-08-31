# JS, Python, Java, C++ | Easy DP Solutions (T/D & B/U) w/ Explanation

**Author:** sgallivan
**Votes:** 103
**Link:** [https://leetcode.com/problems/combination-sum-iv/solutions/1166231/](https://leetcode.com/problems/combination-sum-iv/solutions/1166231/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

With this problem, we can easily imagine breaking up the solution into smaller pieces that we can use as stepping stones towards the overall answer. For example, if we're searching for a way to get from **0** to our target number (**T**), and if **0 < x < y < T**, then we can see that finding out how many ways we can get from **y** to **T** will help us figure out how many ways we can get from **x** to **T**, all the way down to **0** to **T**. This is a classic example of a **top-down** (**memoization**) **dyanamic programming** (DP) solution.

Of course, the reverse is also true, and we could instead choose to use a **bottom-up** (**tabulation**) DP solution with the same result.

***Top-Down DP Approach***: Our DP array (**dp**) will contain cells (**dp[i]**) where **i** will represent the remaining space left before **T** and **dp[i]** will represent the number of ways the solution (**dp[T]**) can be reached from **i**.

At each value of **i** as we build out **dp** we'll iterate through the different **num**s in our number array (**N**) and consider the cell that can be reached with each **num** (**dp[i-num]**). The value of **dp[i]** will therefore be the sum of the results of each of those possible moves.

We'll need to seed **dp[0]** with a value of **1** to represent the value of the completed combination, then once the iteration is complete, we can **return dp[T]** as our final answer.

***Bottom-Up DP Approach***: Our DP array (**dp**) will contain cells (**dp[i]**) where **i** will represent the current count as we head towards **T** and **dp[i]** will represent the number of ways we can reach **i** from the starting point (**dp[0]**). This means that **dp[T]** will represent our final solution.

At each value of **i** as we build out **dp** we'll iterate through the different **num**s in our number array (**N**) and update the value of the cell that can be reached with each num (**dp[i+num]**) by adding the result of the current cell (**dp[i]**). If the current cell has no value, then we can **continue** without needing to iterate through **N**.

We'll need to seed **dp[0]** with a value of **1** to represent the value of the common starting point, then once the iteration is complete, we can **return dp[T]** as our final answer.

In both the top-down and bottom-up DP solutions, the **time complexity** is **O(N * T)** and the **space complexity** is **O(T)**.

---

#### ***Implementation:***

For C++ we'll have to make sure to use unsigned ints in our **dp** vector, otherwise we'll get int overflow errors.

---

#### ***Javascript Code:***

##### ***w/ Top-Down DP:***
```javascript
var combinationSum4 = function(N, T) {
    let dp = new Uint32Array(T+1)
    dp[0] = 1
    for (let i = 1; i <= T; i++)
        for (let num of N)
            if (num <= i) dp[i] += dp[i-num]
    return dp[T]
};
```

##### ***w/ Bottom-Up DP:***
```javascript
var combinationSum4 = function(N, T) {
    let dp = new Uint32Array(T+1)
    dp[0] = 1
    for (let i = 0; i < T; i++) {
        if (!dp[i]) continue
        for (let num of N)
            if (num + i <= T) dp[i+num] += dp[i]
    }
    return dp[T]
};
```

---

#### ***Python Code:***

##### ***w/ Top-Down DP:***
```python
class Solution:
    def combinationSum4(self, N: List[int], T: int) -> int:
        dp = [0] * (T + 1)
        dp[0] = 1
        for i in range(1, T+1):
            for num in N:
                if num <= i: dp[i] += dp[i-num]
        return dp[T]
```

##### ***w/ Bottom-Up DP:***
```python
class Solution:
    def combinationSum4(self, N: List[int], T: int) -> int:
        dp = [0] * (T + 1)
        dp[0] = 1
        for i in range(T):
            if not dp[i]: continue
            for num in N:
                if num + i <= T: dp[i+num] += dp[i]
        return dp[T]
```

---

#### ***Java Code:***

##### ***w/ Top-Down DP:***
```java
class Solution {
    public int combinationSum4(int[] N, int T) {
        int[] dp = new int[T+1];
        dp[0] = 1;
        for (int i = 1; i <= T; i++)
            for (int num : N)
                if (num <= i) dp[i] += dp[i-num];
        return dp[T];
    }
}
```

##### ***w/ Bottom-Up DP:***
```java
class Solution {
    public int combinationSum4(int[] N, int T) {
        int[] dp = new int[T+1];
        dp[0] = 1;
        for (int i = 0; i < T; i++) {
            if (dp[i] == 0) continue;
            for (int num : N)
                if (num + i <= T) dp[i+num] += dp[i];
        }
        return dp[T];
    }
}
```

---

#### ***C++ Code:***

##### ***w/ Top-Down DP:***
```c++
class Solution {
public:
    int combinationSum4(vector<int>& N, int T) {
        vector<unsigned int> dp(T+1, 0);
        dp[0] = 1;
        for (int i = 1; i <= T; i++)
            for (int num : N)
                if (num <= i) dp[i] += dp[i-num];
        return dp[T];
    }
};
```

##### ***w/ Bottom-Up DP:***
```c++
class Solution {
public:
    int combinationSum4(vector<int>& N, int T) {
        vector<unsigned int> dp(T+1, 0);
        dp[0] = 1;
        for (int i = 0; i < T; i++) {
            if (!dp[i]) continue;
            for (int num : N)
                if (num + i <= T) dp[i+num] += dp[i];
        }
        return dp[T];
    }
};
```