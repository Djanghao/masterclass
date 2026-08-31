# ✅Beats 100% - Explained with [ Video ] - Recursion - Memorization - Dynamic Programming

**Author:** lancertech6
**Votes:** 103
**Link:** [https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/4472516/](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/4472516/)

---

![Screenshot 2023-12-29 074428.png](./images/0.png)

# YouTube Video Explanation:

[https://youtu.be/a9UoxrMbjQk](https://youtu.be/a9UoxrMbjQk)
<!-- **If you want a video for this question please write in the comments** -->

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 1100 Subscribers*
*Current Subscribers: 1020*

---

# Intuition
<!-- Describe your approach to solving the problem. -->
We employ a recursive approach to explore various job scheduling options, taking into account job dependencies and minimizing the difficulty. The solution is memoized to optimize repeated computations.

# Approach
### Base Cases:
1. If the number of jobs is less than the number of days (len(jobDifficulty) < d), it's impossible to create a valid schedule. Return -1.
2. If the sum of job difficulties is zero `(sum(jobDifficulty) == 0)`, all jobs have zero difficulty, and the minimum difficulty is 0.


# Complexity
#### Without Memoization:
- **Time Complexity:** Exponential, `O(2^n)`, where n is the size of the problem.
- **Space Complexity:** `O(n)`, where n is the depth of the recursive call stack.

#### With Memoization:
- **Time Complexity:** Improved to `O(n * d)`, where n is the size of the problem and d is the depth of recursion.
- **Space Complexity:** `O(n * d)`, additional space for the memoization table.

# Recursive Solution TLE (Do not Run):
```Java []
class Solution {
    public int minDifficulty(int[] jobDifficulty, int d) {
        if (jobDifficulty.length < d) {
            return -1;
        }
        int len = jobDifficulty.length;
        int sum = 0;
        for (int i = 0; i < jobDifficulty.length; i++) {
            sum += jobDifficulty[i];
        }
        if (sum == 0) {
            return 0;
        }
        return helper(jobDifficulty, d, 0);
    }

    private int helper(int[] jd, int daysLeft, int idx) {
        int len = jd.length;
        if (daysLeft == 1) {
            int num = 0;
            for (int i = idx; i < len; i++) {
                num = Math.max(num, jd[i]);
            }
            return num;
        }

        int max = jd[idx];
        daysLeft--;
        int stop = len - idx - daysLeft + 1;

        int res = Integer.MAX_VALUE;
        for (int i = 1; i < stop; i++) {
            max = Math.max(max, jd[idx + i - 1]);
            int other = helper(jd, daysLeft, idx + i);
            res = Math.min(res, other + max);
        }
        return res;
    }
}
```
```C++ []
class Solution {
public:
    int minDifficulty(vector<int>& jobDifficulty, int d) {
        int len = jobDifficulty.size();
        if (len < d) {
            return -1;
        }
        int sum = accumulate(jobDifficulty.begin(), jobDifficulty.end(), 0);
        if (sum == 0) {
            return 0;
        }
        return helper(jobDifficulty, d, 0);
    }

private:
    int helper(vector<int>& jd, int daysLeft, int idx) {
        int len = jd.size();
        if (daysLeft == 1) {
            int num = 0;
            for (int i = idx; i < len; i++) {
                num = max(num, jd[i]);
            }
            return num;
        }

        int maxDifficulty = jd[idx];
        daysLeft--;
        int stop = len - idx - daysLeft + 1;

        int result = INT_MAX;
        for (int i = 1; i < stop; i++) {
            maxDifficulty = max(maxDifficulty, jd[idx + i - 1]);
            int other = helper(jd, daysLeft, idx + i);
            result = min(result, other + maxDifficulty);
        }
        return result;
    }
};
```
```Python []
class Solution:
    def minDifficulty(self, jobDifficulty, d):
        if len(jobDifficulty) < d:
            return -1
        total_sum = sum(jobDifficulty)
        if total_sum == 0:
            return 0
        return self.helper(jobDifficulty, d, 0)

    def helper(self, jd, daysLeft, idx):
        length = len(jd)
        if daysLeft == 1:
            return max(jd[idx:])
        
        max_difficulty = jd[idx]
        daysLeft -= 1
        stop = length - idx - daysLeft + 1

        result = float('inf')
        for i in range(1, stop):
            max_difficulty = max(max_difficulty, jd[idx + i - 1])
            other = self.helper(jd, daysLeft, idx + i)
            result = min(result, other + max_difficulty)
        return result
```
```Javascript []
/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
    if (jobDifficulty.length < d) {
        return -1;
    }
    const totalSum = jobDifficulty.reduce((acc, val) => acc + val, 0);
    if (totalSum === 0) {
        return 0;
    }
    return helper(jobDifficulty, d, 0);
};

function helper(jd, daysLeft, idx) {
    const length = jd.length;
    if (daysLeft === 1) {
        return Math.max(...jd.slice(idx));
    }

    let maxDifficulty = jd[idx];
    daysLeft--;
    const stop = length - idx - daysLeft + 1;

    let result = Infinity;
    for (let i = 1; i < stop; i++) {
        maxDifficulty = Math.max(maxDifficulty, jd[idx + i - 1]);
        const other = helper(jd, daysLeft, idx + i);
        result = Math.min(result, other + maxDifficulty);
    }
    return result;
}
```
# Memoized Solution
```java []
class Solution {
    public int minDifficulty(int[] jobDifficulty, int d) {
        if (jobDifficulty.length < d) {
            return -1;
        }
        int len = jobDifficulty.length;
        int sum = 0;
        for (int i = 0; i < jobDifficulty.length; i++) {
            sum += jobDifficulty[i];
        }
        if (sum == 0) {
            return 0;
        }
        int[][] memo = new int[d + 1][len];
        helper(jobDifficulty, d, 0, memo);
        
        return memo[d][0];
    }

    private void helper(int[] jd, int daysLeft, int idx, int[][] memo) {
        int len = jd.length;
        if (memo[daysLeft][idx] != 0) {
            return;
        }
        if (daysLeft == 1) {
            int num = 0;
            for (int i = idx; i < len; i++) {
                num = Math.max(num, jd[i]);
            }
            memo[daysLeft][idx] = num;
            return;
        }
        int max = jd[idx];
        daysLeft--;
        int stop = len - idx - daysLeft + 1;
    
        int res = Integer.MAX_VALUE;
        for (int i = 1; i < stop; i++) {
            max = Math.max(max, jd[idx + i - 1]);
            int other = memo[daysLeft][idx + i];
            if (other == 0) {
                helper(jd, daysLeft, idx + i, memo);
                other = memo[daysLeft][idx + i];
            }
            res = Math.min(res, other + max);   
        }
        memo[daysLeft + 1][idx] = res;
    }

}
```
```C++ []
class Solution {
public:
    int minDifficulty(vector<int>& jobDifficulty, int d) {
        int len = jobDifficulty.size();
        if (len < d) {
            return -1;
        }
        int sum = accumulate(jobDifficulty.begin(), jobDifficulty.end(), 0);
        if (sum == 0) {
            return 0;
        }
        vector<vector<int>> memo(d + 1, vector<int>(len, 0));
        helper(jobDifficulty, d, 0, memo);
        
        return memo[d][0];
    }

private:
    void helper(vector<int>& jd, int daysLeft, int idx, vector<vector<int>>& memo) {
        int len = jd.size();
        if (memo[daysLeft][idx] != 0) {
            return;
        }
        if (daysLeft == 1) {
            int num = 0;
            for (int i = idx; i < len; i++) {
                num = max(num, jd[i]);
            }
            memo[daysLeft][idx] = num;
            return;
        }
        int maxDifficulty = jd[idx];
        daysLeft--;
        int stop = len - idx - daysLeft + 1;

        int res = INT_MAX;
        for (int i = 1; i < stop; i++) {
            maxDifficulty = max(maxDifficulty, jd[idx + i - 1]);
            int other = memo[daysLeft][idx + i];
            if (other == 0) {
                helper(jd, daysLeft, idx + i, memo);
                other = memo[daysLeft][idx + i];
            }
            res = min(res, other + maxDifficulty);   
        }
        memo[daysLeft + 1][idx] = res;
    }
};
```
``` Python []
class Solution:
    def minDifficulty(self, jobDifficulty, d):
        if len(jobDifficulty) < d:
            return -1
        total_sum = sum(jobDifficulty)
        if total_sum == 0:
            return 0
        memo = [[0] * len(jobDifficulty) for _ in range(d + 1)]
        self.helper(jobDifficulty, d, 0, memo)
        
        return memo[d][0]

    def helper(self, jd, daysLeft, idx, memo):
        length = len(jd)
        if memo[daysLeft][idx] != 0:
            return
        if daysLeft == 1:
            num = max(jd[idx:])
            memo[daysLeft][idx] = num
            return
        max_difficulty = jd[idx]
        daysLeft -= 1
        stop = length - idx - daysLeft + 1
    
        res = float('inf')
        for i in range(1, stop):
            max_difficulty = max(max_difficulty, jd[idx + i - 1])
            other = memo[daysLeft][idx + i]
            if other == 0:
                self.helper(jd, daysLeft, idx + i, memo)
                other = memo[daysLeft][idx + i]
            res = min(res, other + max_difficulty)   
        memo[daysLeft + 1][idx] = res
```
```JavaScript []
/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
    if (jobDifficulty.length < d) {
        return -1;
    }
    const totalSum = jobDifficulty.reduce((acc, val) => acc + val, 0);
    if (totalSum === 0) {
        return 0;
    }
    const memo = Array.from({ length: d + 1 }, () => Array(jobDifficulty.length).fill(0));
    helper(jobDifficulty, d, 0, memo);
    
    return memo[d][0];
};

function helper(jd, daysLeft, idx, memo) {
    const length = jd.length;
    if (memo[daysLeft][idx] !== 0) {
        return;
    }
    if (daysLeft === 1) {
        const num = Math.max(...jd.slice(idx));
        memo[daysLeft][idx] = num;
        return;
    }
    let maxDifficulty = jd[idx];
    daysLeft--;
    const stop = length - idx - daysLeft + 1;

    let res = Infinity;
    for (let i = 1; i < stop; i++) {
        maxDifficulty = Math.max(maxDifficulty, jd[idx + i - 1]);
        let other = memo[daysLeft][idx + i];
        if (other === 0) {
            helper(jd, daysLeft, idx + i, memo);
            other = memo[daysLeft][idx + i];
        }
        res = Math.min(res, other + maxDifficulty);
    }
    memo[daysLeft + 1][idx] = res;
}
```

 


![upvote.png](./images/1.png)

