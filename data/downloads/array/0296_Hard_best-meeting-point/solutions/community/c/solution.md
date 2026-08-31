# ✅ [Python/Rust/C++] fast & concise using median + PROOF (with detailed comments)

**Author:** iablokov
**Votes:** 8
**Link:** [https://leetcode.com/problems/best-meeting-point/solutions/2733517/](https://leetcode.com/problems/best-meeting-point/solutions/2733517/)

---

**\u2705 IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
****
This solution employs calculation of median of indices for each dimension. Time complexity is linear (in each dimension): **O(n\\*m)**. Space complexity is linear: **O(n+m)**. 
****
**Comment.** To prove the validity of the approach, let's first consider a one-dimensional problem, namely, a collection of houses on a line. Median point has the following property: any shift from this point may only increase the total travel distance, because an equal number of houses lies on each side of this point. If we move this point, e.g., one step to the left then any decrease of travel distance for the houses on the left will be compensated by at least the same amount due to the houses on the right. For multi-dimensional case, Manhattan distance has a nice property, namely, it decomposes into a sum of Manhattan distances in each of dimensions, thus, we can compute median values independently for each dimension.

| Language | Runtime | Memory |
|---|---|---|
| [**Python**](https://leetcode.com/submissions/detail/828125374/) | **108 ms (99.21%)** | **15.5 MB  (73.23%)** |
| [**Rust**](https://leetcode.com/submissions/detail/828124201/) | **0 ms (100.00%)** | **2.7 MB (100.00%)** |
| [**C++**](https://leetcode.com/submissions/detail/828122269/) | **7 ms (100.00%)** | **11.8 MB  (41.88%)** |

<iframe src="https://leetcode.com/playground/4hWXfJhT/shared" frameBorder="0" width="800" height="500"></iframe>