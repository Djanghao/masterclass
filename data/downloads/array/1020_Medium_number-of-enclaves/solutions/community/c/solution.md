# ✅ Fastest C++ | Python | Java Solution-Runtime:60ms,faster than 100%

**Author:** codermal7
**Votes:** 22
**Link:** [https://leetcode.com/problems/number-of-enclaves/solutions/3389277/](https://leetcode.com/problems/number-of-enclaves/solutions/3389277/)

---

**SOLUTION**

<iframe src="https://leetcode.com/playground/oQhriTW9/shared" frameBorder="0" width="800" height="700"></iframe>

**EXPLANATION**

* Defined a DFS function to traverse the land cells in the grid and marked them as visited.
* In the DFS function, ignore cells that are out of bounds, sea cells, or cells that have already been visited.
* Defined two for-loops to call the DFS function for all cells on the border of the grid.
* Count the remaining unvisited land cells in the grid after DFS traversal.
* Returned the count of unvisited land cells.

**Time complexity:**

**O(m*n)**, where m and n are the dimensions of the grid.

**Space complexity:**

**O(m*n)**, where m and n are the dimensions of the grid, due to the recursive stack space used by the DFS function.

**PLEASE UPVOTE \u2B06\uFE0F**
