# Python 3 | DFS | Explanation

**Author:** idontknoooo
**Votes:** 6
**Link:** [https://leetcode.com/problems/bricks-falling-when-hit/solutions/950348/](https://leetcode.com/problems/bricks-falling-when-hit/solutions/950348/)

---

- We can do it on regular order, which will take `O(KMN)`, where `K = len(hits), M = len(grid), N = len(grid[0])`
- If we do it reversely of `hits`, it will take `O(MN) + O(K)` since we can utilize the known information (we know how many nodes is already connected), all points will be at most be visited twice (mark as unstable + mark as stable)
### Without comments
<iframe src="https://leetcode.com/playground/6bd6DPwf/shared" frameBorder="0" width="950" height="400"></iframe>  

### With comments
<iframe src="https://leetcode.com/playground/5kRDSxNZ/shared" frameBorder="0" width="950" height="500"></iframe>