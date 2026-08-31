# [Python3, Java, C++] Dfs + Memoization, Iterative O(n)

**Author:** tojuna
**Votes:** 135
**Link:** [https://leetcode.com/problems/solving-questions-with-brainpower/solutions/1692920/](https://leetcode.com/problems/solving-questions-with-brainpower/solutions/1692920/)

---

This is a typical dynamic programming problem. 
For each index `i` we have 2 options:
1. Take points<sub>i</sub>  and jump the next brainpower<sub>i</sub> indexes
2. Skip the current index(do not collect points<sub>i</sub>) and move to the next index

We need to find the maximum points we can collect given the above mentioned constraints

Note: `dp[i]` denotes the max points that can be collected for the subarray: `questions[i... questions.size() - 1]`. So we only need to compute it once for each `i`

**Dfs + Memoization**:
<iframe src="https://leetcode.com/playground/mLDWYTXM/shared" frameBorder="0" width="740" height="275"></iframe>

**Iterative**:
<iframe src="https://leetcode.com/playground/BhdoVtcf/shared" frameBorder="0" width="740" height="205"></iframe>

*Time Complextity: O(n)*
*Space Complexity: O(n)*