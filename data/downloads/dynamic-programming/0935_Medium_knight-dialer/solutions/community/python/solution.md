# O(n) time O(1) space DP solution + Google interview question writeup

**Author:** Twohu
**Votes:** 206
**Link:** [https://leetcode.com/problems/knight-dialer/solutions/189287/](https://leetcode.com/problems/knight-dialer/solutions/189287/)

---

This is former Google interview question. It was leaked over a year ago and was soon after blacklisted. Because of this, a former Google interviewer decided to write an excellent blog post breaking down how he asked this question and what he expected from candidates who attempt it. This blog post explains the background of this question, common pitfalls candidates encounter, four different ways to solve it, and how a Google interviewer will evaluate your solution. This article is a gold mine for anyone considering interviewing at Google.
https://medium.com/@alexgolec/google-interview-questions-deconstructed-the-knights-dialer-f780d516f029

According to the article, four possible solutions are (1) naive recursive number generation, (2) naive recursive counting, (3) recursion + memoization, and (4) dynamic programming. A candidate who coded either the memoization or DP solution is likely to receive a "strong hire" recommendation.

I encourage everyone to check out the article. If you're just here for the solution, below is an accepted leetcode solution based on the ideas from the article.
```
def knightDialer(self, N):
    # Neighbors maps K: starting_key -> V: list of possible destination_keys
    neighbors = {
        0:(4,6),
        1:(6,8),
        2:(7,9),
        3:(4,8),
        4:(0,3,9),
        5:(),
        6:(0,1,7),
        7:(2,6),
        8:(1,3),
        9:(2,4)
    }
    current_counts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    for _ in range(N-1):
        next_counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        for src_key in range(10):
            for dst_key in neighbors[src_key]:
                next_counts[dst_key] = (next_counts[dst_key] + current_counts[src_key]) % (10**9 + 7)
        current_counts = next_counts
    return sum(current_counts) % (10**9 + 7)
```