# ✅ [Python/Rust/C++] weighted median + CONCISE PROOF (with detailed comments)

**Author:** iablokov
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/2735301/](https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/2735301/)

---

**\u2705 IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
****
This solution employs calculation of a weighted median. Time complexity is log-linear: **O(N\\*logN)**. Space complexity is linear: **O(N)**. 
****
**Comment.** The proof of the *weighted median* strategy is as follows. 
* First, let us consider all costs to be equal **1** and imagine 'nums' as points (with integer coordinates) on a line. Then our task is to find another point on this line with the following property: the sum of all distances to this point is minimal. We know (see, this [**problem**](https://leetcode.com/problems/best-meeting-point/) and my [**solution**](https://leetcode.com/problems/best-meeting-point/discuss/2733517/PythonRustC%2B%2B-fast-and-concise-using-median-%2B-PROOF-(with-detailed-comments))) that this point would be the median of sorted 'nums'. Why's that? Well, it has the following property: any shift from the median may only increase the total distance, because an equal number of points lies on each side of this point. If we move this point, e.g., one step to the left then any decrease of total distance for the points on the left will be compensated by at least the same amount due to the points on the right.
*  Now, consider weights being arbitrary positive integers. Making an operation (decrease or increase) on a number **N** with cost **C** is the same (in terms of cost) as doing the same operation, however, replicated for **C** numbers of value **N** with cost **1**.
*  The median of such replicated (and sorted) list is what we call a weighted median of the original list.

| Language | Runtime | Memory |
|---|---|---|
| [**Python**](https://leetcode.com/submissions/detail/828487569/) | **921 ms (100.00%)** | **38.4 MB  (84.62%)** |
| [**Rust**](https://leetcode.com/submissions/detail/828494941/) | **25 ms (100.00%)** | **3.8 MB (100.00%)** |
| [**C++**](https://leetcode.com/submissions/detail/828499259/) | **172 ms (100.00%)** | **85.1 MB  (23.08%)** |

<iframe src="https://leetcode.com/playground/fMzK7MnX/shared" frameBorder="0" width="800" height="600"></iframe>