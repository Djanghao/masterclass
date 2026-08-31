# [Python] Digit DP - Clean & Concise

**Author:** hiepit
**Votes:** 28
**Link:** [https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3836255/](https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3836255/)

---

# Intuition
- Using Digit DP to count stepping numbers from `[0...n]`
- Then the result is `count(high) - count(low-1)`

# Complexity
- Time: `O(|n| * 2 * 10 * 2 * 10)`, where `|n| <= 100` is length of string `n`, it's the number of dp states * a loop in side the dp function.
- Space: `O(|n| * 2 * 10 * 2)`


<iframe src="https://leetcode.com/playground/WrAvXmyT/shared" frameBorder="0" width="100%" height="650"></iframe>

# Similar Digit DP problems
- [2376. Count Special Integers](https://leetcode.com/problems/count-special-integers/solutions/3777971/python-dp-digit-clean-concise/)