# [Brute Force + Tutorial] Count Pairs That Form a Complete Day I

**Author:** never_get_piped
**Votes:** 7
**Link:** [https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/solutions/5319866/](https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/solutions/5319866/)

---

**Topic** :  Brute Force
This post focuses on optimizing the solution for finding pairs of hours that sum to a multiple of 24.

For optimized version, please refer to :
[Count Pairs That Form a Complete Day II](https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii/discuss/5319811/hash-table-count-pairs-that-form-a-complete-day-ii)
___

## Solution
We count all pairs `(i, j)` where `hours[i] + hours[j]` modulo 24 equals zero. We achieve this through nested iterations: the outer loop iterates over index `i`, and the inner loop iterates over index `j`.

## Code
<iframe src="https://leetcode.com/playground/KgXzrwmu/shared" frameBorder="0" width="800" height="300"></iframe>

**Complexity**:
* Time Complexity : `O(n ^ 2)`
* Space Complexity : `O(1)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**