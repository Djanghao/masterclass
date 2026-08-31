# Python.   ||   10 lines, linear algebra.   ||    T/S:   51% / 97%%

**Author:** Spaulding_
**Votes:** 20
**Link:** [https://leetcode.com/problems/spiral-matrix-iv/solutions/2252226/](https://leetcode.com/problems/spiral-matrix-iv/solutions/2252226/)

---

Here's the plan:
- We start at cell (0,0) and move in the direction of <0,1>. 
- At each step, we first peek whether we are still in the grid and whether the cell is unvisited (that is, still -1):

- If so, we mark the cell with `head.val`, move `head` to the next node, and then peek ahead in the same direction to another cell

 - If not, we turn right.

- We continue with this process until we hit the end of the linked list.

- Because we always turn right, we don't need a tuple of directions. From
linear algebra, we know that turning right from a current direction <*a,b*> gives the new direction <*b,-a*>.
```
class Solution:
    def spiralMatrix(self, m: int, n: int, 
                           head: ListNode) -> List[List[int]]:

        ans = [[-1] * n for _ in range(m)]
        ans[0][0], head = head.val, head.next
        r, c, dr, dc, R, C = 0, 0, 0, 1, range(m), range(n)

        while head:
            if r+dr in R and c+dc in C and ans[r+dr][c+dc] == -1:
                r+= dr ;  c+= dc 
                ans[r][c], head = head.val, head.next
            else:                               
                dr, dc = dc, -dr
                
        return ans
```
[
https://leetcode.com/problems/spiral-matrix-iv/submissions/1286695080/](
https://leetcode.com/problems/spiral-matrix-iv/submissions/1286695080/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `m*n`.

