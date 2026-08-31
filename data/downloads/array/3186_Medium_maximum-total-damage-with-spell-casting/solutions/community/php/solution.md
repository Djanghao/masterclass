# [Dynamic Programming + Tutorial] Maximum Total Damage With Spell Casting

**Author:** never_get_piped
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-total-damage-with-spell-casting/solutions/5319898/](https://leetcode.com/problems/maximum-total-damage-with-spell-casting/solutions/5319898/)

---

**Topic** :  Dynamic Programming
Dynamic Programming is a method used in mathematics and computer science to solve complex problems by breaking them down into simpler **subproblems**. By solving each subproblem only once and storing the results, it avoids redundant computations, leading to more efficient solutions for a wide range of problems. This article provides a detailed exploration of dynamic programming concepts, illustrated with examples. (GFG)

To solve dynamic programming problem, we need to answer 2 questions:
* How to represent each subproblem state.
* What is the transition from the subproblem to the current problem.
___

## Solution
Let's firsr rephrase the problem as follow:

```
Given an array, find the maximum sum of a subsequence such that the difference between every pair of distinct 
numbers within the sequence is more than 2.
```

We can first sort the array because the original order of numbers is irrelevant to our final answer.

***How to represent each subproblem stat:***
Let `dp[i]` denote the maximum sum of subsequences where the subsequence ends at `nums[i]`. Since we are focusing on distinct numbers, we can aggregate all occurrences of the same value. Therefore, for each unique number, `i` represents the last index of that number's occurrences in the array.

***What is the transition from the subproblem to the current problem.***
Since each distinct number must have a difference of more than 2 from any other number in the subsequence, and given that our array is already sorted, we can derive the following transition:
* `dp[i] = max(dp[j] + nums[i] * Count(nums[i]))` where `j < i` and `nums[i] - nums[j] > 2`.

***Optimization:***
With the transition described above, the time complexity end up at `O(n ^ 2)`. However, since the index `j` that we consider ranges from `0` to  `i - 1`, we can take the maximum of all these numbers and assign it to a variable named `preMax`. Note that the range of `j` should be constrained by the condition that `nums[j] + 2 < nums[i]`. This ensures that the difference between `nums[i]` and `nums[j]` is more than 2.


## Code
<iframe src="https://leetcode.com/playground/exXX9wU3/shared" frameBorder="0" width="800" height="300"></iframe>

**Complexity**:
* Time Complexity : `O(n log n)`
* Space Complexity : `O(n)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**