# Python3 ||| analytic geometry  || T/S: 99% / 55%

**Author:** Spaulding_
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-total-area-occupied-by-pistons/solutions/5738662/](https://leetcode.com/problems/maximum-total-area-occupied-by-pistons/solutions/5738662/)

---

Here's the intuition:

- Each piston's height is a function of the time units. Futhermore, this function values are bounded in the closed interval [0, *height*] and is periodic with period 2 * *height*.

- The solution to the problem is the maximum value of the sum-function of all pistons, or equivalently, the greatest *y* value on sum-function graph.
- The sum-function graph is a continuous union of line segments, and because it's bounded on a closed interval, a maximum must exist, and that maximum must occur at a "peak" vertex of the graph.
- The reader is invited to fill in the details.
______
Here's the code:
```python3 []
class Solution:
    def maxArea(self, height: int, positions: List[int], 
                      directions: str) -> int:

        n, u = len(directions), directions.count('U')
        ans = mx = sum(positions)
        vertices = defaultdict(int, {0:0})

        for dir, pos in zip(directions, positions):
            if dir == "U":
                vertices[height - pos]-= 1
                vertices[2*height - pos]+= 1
            else: #dir == "D":
                vertices[height + pos]-= 1
                vertices[pos]+= 1
                
        for left, rght in pairwise(sorted(vertices)):

            mx+= (rght - left) * (2*u-n)
            if mx > ans: ans = mx
            u+= vertices[rght]

        return ans
```
[https://leetcode.com/problems/maximum-total-area-occupied-by-pistons/submissions/1379348972/](https://leetcode.com/problems/maximum-total-area-occupied-by-pistons/submissions/1379348972/)

I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(*N*), in which *N* ~ `len(directions)`.