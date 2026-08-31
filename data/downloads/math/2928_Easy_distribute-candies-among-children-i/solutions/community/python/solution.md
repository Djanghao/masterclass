# ✅Beginner Friendly ✅Full Explanation 💡Recursion --> Memoisation

**Author:** LakshayBrejwal_1_0
**Votes:** 5
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-i/solutions/4276642/](https://leetcode.com/problems/distribute-candies-among-children-i/solutions/4276642/)

---

# \u2753Distributing Candies Problem\u2753
---
## \uD83D\uDCA1Approach 1: Recursive Approach

### \u2728Explanation
The recursive approach involves trying out all possible ways of distributing candies to children within the given limits. The function `waysToDistributeCandies` recursively explores the possibilities by considering different distributions for the current child.

### \uD83D\uDCDDDry Run
Consider `totalCandies = 5`, `candyDistributionLimit = 2`, and `remainingChildren = 3`:
- Possible distributions: `(2, 2, 1)`, `(2, 1, 2)`, `(1, 2, 2)`, `(1, 1, 3)`, and `(1, 3, 1)`.
- The total number of ways is the sum of ways for each distribution.

### \uD83D\uDD0DEdge Cases
Handled cases where there are no candies left or no children left.

### \uD83D\uDD78\uFE0FComplexity Analysis
- Time Complexity: Exponential
- Space Complexity: O(1) (excluding the function call stack)

### \uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDCBBCode


```cpp []
class Solution {
public:
    int waysToDistributeCandies(int remainingCandies, int candyLimit, int remainingChildren) {
        // Base case: If there are no candies left, return 1 way (valid distribution)
        if (remainingCandies == 0) {
            return 1;
        }

        // Base case: If there are no children left or the limit is exceeded, return 0 ways
        if (remainingChildren == 0 || candyLimit == 0) {
            return 0;
        }

        int ways = 0;

        // Try distributing candies to the current child within the limit
        for (int i = 0; i <= min(candyLimit, remainingCandies); ++i) {
            ways += waysToDistributeCandies(remainingCandies - i, candyLimit, remainingChildren - 1);
        }

        return ways;
    }

    int distributeCandies(int totalCandies, int candyDistributionLimit) {
        return waysToDistributeCandies(totalCandies, candyDistributionLimit, 3);
    }
};
```

```java []
class Solution {
    public int waysToDistributeCandies(int remainingCandies, int candyLimit, int remainingChildren) {
        // Base case: If there are no candies left, return 1 way (valid distribution)
        if (remainingCandies == 0) {
            return 1;
        }

        // Base case: If there are no children left or the limit is exceeded, return 0 ways
        if (remainingChildren == 0 || candyLimit == 0) {
            return 0;
        }

        int ways = 0;

        // Try distributing candies to the current child within the limit
        for (int i = 0; i <= Math.min(candyLimit, remainingCandies); ++i) {
            ways += waysToDistributeCandies(remainingCandies - i, candyLimit, remainingChildren - 1);
        }

        return ways;
    }

    public int distributeCandies(int totalCandies, int candyDistributionLimit) {
        return waysToDistributeCandies(totalCandies, candyDistributionLimit, 3);
    }
}
```


```python []
class Solution:
    def waysToDistributeCandies(self, remainingCandies, candyLimit, remainingChildren):
        # Base case: If there are no candies left, return 1 way (valid distribution)
        if remainingCandies == 0:
            return 1

        # Base case: If there are no children left or the limit is exceeded, return 0 ways
        if remainingChildren == 0 or candyLimit == 0:
            return 0

        ways = 0

        # Try distributing candies to the current child within the limit
        for i in range(min(candyLimit, remainingCandies) + 1):
            ways += self.waysToDistributeCandies(remainingCandies - i, candyLimit, remainingChildren - 1)

        return ways

    def distributeCandies(self, totalCandies, candyDistributionLimit):
        return self.waysToDistributeCandies(totalCandies, candyDistributionLimit, 3)
```

---

## \uD83D\uDCA1Approach 2: Optimized Approach

### \u2728Explanation
The optimized approach involves using dynamic programming to avoid redundant calculations. We can create a memoization array to store the results of previously computed subproblems.

### \uD83D\uDCDDDry Run
Consider the same example:
- The dynamic programming approach stores and reuses intermediate results, reducing the overall number of recursive calls.

### \uD83D\uDD0DEdge Cases
Handled

 cases where there are no candies left or no children left.

### \uD83D\uDD78\uFE0FComplexity Analysis
- Time Complexity: O(totalCandies * candyDistributionLimit * remainingChildren)
- Space Complexity: O(totalCandies * candyDistributionLimit * remainingChildren)

### \uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDCBBCode



```cpp []
class Solution {
public:
    int waysToDistributeCandies(int remainingCandies, int candyLimit, int remainingChildren, vector<vector<vector<int>>>& memo) {
        // Base case: If there are no candies left, return 1 way (valid distribution)
        if (remainingCandies == 0) {
            return 1;
        }

        // Base case: If there are no children left or the limit is exceeded, return 0 ways
        if (remainingChildren == 0 || candyLimit == 0) {
            return 0;
        }

        // Check if the result is already memoized
        if (memo[remainingCandies][candyLimit][remainingChildren] != -1) {
            return memo[remainingCandies][candyLimit][remainingChildren];
        }

        int ways = 0;

        // Try distributing candies to the current child within the limit
        for (int i = 0; i <= min(candyLimit, remainingCandies); ++i) {
            ways += waysToDistributeCandies(remainingCandies - i, candyLimit, remainingChildren - 1, memo);
        }

        // Memoize the result
        memo[remainingCandies][candyLimit][remainingChildren] = ways;

        return ways;
    }

    int distributeCandies(int totalCandies, int candyDistributionLimit) {
        // Initialize memoization array with -1
        vector<vector<vector<int>>> memo(totalCandies + 1, vector<vector<int>>(candyDistributionLimit + 1, vector<int>(4, -1)));

        return waysToDistributeCandies(totalCandies, candyDistributionLimit, 3, memo);
    }
};
```


```java []
class Solution {
    public int waysToDistributeCandies(int remainingCandies, int candyLimit, int remainingChildren, int[][][] memo) {
        // Base case: If there are no candies left, return 1 way (valid distribution)
        if (remainingCandies == 0) {
            return 1;
        }

        // Base case: If there are no children left or the limit is exceeded, return 0 ways
        if (remainingChildren == 0 || candyLimit == 0) {
            return 0;
        }

        // Check if the result is already memoized
        if (memo[remainingCandies][candyLimit][remainingChildren] != -1) {
            return memo[remainingCandies][candyLimit][remainingChildren];
        }

        int ways = 0;

        // Try distributing candies to the current child within the limit
        for (int i = 0; i <= Math.min(candyLimit, remainingCandies); ++i) {
            ways += waysToDistributeCandies(remainingCandies - i, candyLimit, remainingChildren - 1, memo);
        }

        // Memoize the result
        memo[remainingCandies][candyLimit][remainingChildren] = ways;

        return ways;
    }

    public int distributeCandies(int totalCandies, int candyDistributionLimit) {
        // Initialize memoization array with -1
        int[][][] memo = new int[totalCandies + 1][candyDistributionLimit + 1][4];
        for (int i = 0; i <= totalCandies; ++i) {
            for (int j = 0; j <= candyDistributionLimit; ++j) {
                Arrays.fill(memo[i][j], -1);
            }
        }

        return waysToDistributeCandies(totalCandies, candyDistributionLimit, 3, memo);
    }
}
```
```python []
class Solution:
    def waysToDistributeCandies(self, remainingCandies, candyLimit, remainingChildren, memo):
        # Base case: If there are no candies left, return 1 way (valid distribution)
        if remainingCandies == 0:
            return 1

        # Base case: If there are no children left or the limit is exceeded, return 0 ways
        if remainingChildren == 0 or candyLimit == 0:
            return 0

        # Check if the result is already memoized
        if memo[remainingCandies][candyLimit][remainingChildren] != -1:
            return memo[remainingCandies][candyLimit][remainingChildren]

        ways = 0

        # Try distributing candies to the current child within the limit
        for i in range(min(candyLimit, remainingCandies) + 1):
            ways += self.waysToDistributeCandies(remainingCandies - i, candyLimit, remainingChildren - 1, memo)

        # Memoize the result
        memo[remainingCandies][candyLimit][remainingChildren] = ways

        return ways

    def distributeCandies(self, totalCandies, candyDistributionLimit):
        # Initialize memoization array with -1
        memo = [[[-1] * 4 for _ in range(candyDistributionLimit + 1)] for _ in range(totalCandies + 1)]

        return self.waysToDistributeCandies(totalCandies, candyDistributionLimit, 3, memo)
```


---
# Consider UPVOTING\u2B06\uFE0F

![image.png](./images/0.png)


# DROP YOUR SUGGESTIONS IN THE COMMENT

## Keep Coding\uD83E\uDDD1\u200D\uD83D\uDCBB

 -- *MR.ROBOT SIGNING OFF*
