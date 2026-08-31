# ✅100% Beats | TypeScript | Easy to Read | Easy to Understand

**Author:** yaseenref
**Votes:** 4
**Link:** [https://leetcode.com/problems/solving-questions-with-brainpower/solutions/3514952/](https://leetcode.com/problems/solving-questions-with-brainpower/solutions/3514952/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
We can solve this problem using dynamic programming by iterating over the questions array in reverse order, and for each question, calculating the maximum points we can earn if we either solve or skip the question. We store these maximum points in an array called dp, and finally, the maximum points we can earn for the exam will be stored in dp[0]. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
# Code
```
function mostPoints(questions: number[][]): number {
    const dp = new Array(questions.length);
    for (let i = questions.length - 1; i >= 0; i--) {
      const q = questions[i];
      const n = dp[i + 1] ?? 0;
      const f = dp[i + q[1] + 1] ?? 0;
      dp[i] = Math.max(q[0] + f, n);
    }
    return dp[0];
};
```