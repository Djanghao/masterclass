# C++ Simple and Easy Fibonacci Solution, With Explanation

**Author:** YehudisK
**Votes:** 89
**Link:** [https://leetcode.com/problems/climbing-stairs/solutions/1504255/](https://leetcode.com/problems/climbing-stairs/solutions/1504255/)

---

**Idea - this is just simple fibonacci!**
The base cases are: 
* n = 0 -> 0
* n = 1 -> 1
* n = 2 -> 2

Then, for each step `i`, the number of ways to get to it is: either the last step was of 1 step, so we have `prev`, or it was a 2 step, and that's `prev2`, so all together the number of ways to get to our current step is `prev + prev2`.
If we check the first few, we can see clearly that it comes out a fibonacci sequence.

**Time Complexity:** O(n)
**Space Complexity:** O(1)
```
class Solution {
public:
    int climbStairs(int n) {
        if (n <= 2) return n;
        int prev = 2, prev2 = 1, res;
        for (int i = 3; i <= n; i++) {
            res = prev + prev2;
            prev2 = prev;
            prev = res;
        }
        return res;
    }
};
```
**Like it? please upvote!**