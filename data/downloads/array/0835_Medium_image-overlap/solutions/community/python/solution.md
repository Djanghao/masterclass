# [Python] Linear Transformation | Simple | Explained

**Author:** sameerkhurd
**Votes:** 30
**Link:** [https://leetcode.com/problems/image-overlap/solutions/832147/](https://leetcode.com/problems/image-overlap/solutions/832147/)

---

**Brute Force Approach :**
* We slide matrix in left, right, up, and down directions and count number of overlap ones. And while sliding keep track of maximum count.
* For every direction there are total N possibilities i.e. we can slide in left direction for N times, similarly for every other direction, and whenever we slide we count number of overlapping ones. 
* To count overlapping ones we require N^2 computations  and we have N+N horizontal sliding  possibilities and N+N vertical sliding possibilities. 
* So time complexity of this algorithm becomes O(N^4) and with space of O(1)

**Linear Transformation Approach :**
*Major drawback with above algorithm is that when the matrix is a sparse matrix, we end up scanning all the possibilities and waste out time.* 
In this approach,
1. First, we filter points having 1 for each matrix respectively.
2. Now, for every point in filtered A, we calculate the linear transformation vector V = [(r_B - r_A), (c_B - c_A)] with all points of filtered B. Then, we count the number of the pairs that have the same transformation vector.
```
class Solution:
    def largestOverlap(self, A: List[List[int]], B: List[List[int]]) -> int:
        A_points, B_points, d = [], [], collections.defaultdict(int)

        # Filter points having 1 for each matrix respectively.
        for r in range(len(A)):
            for c in range(len(A[0])):
                if A[r][c]:
                    A_points.append((r, c))

                if B[r][c]:
                    B_points.append((r, c))
 
        # For every point in filtered A, calculate the
        # linear transformation vector with all points of filtered B
        # count the number of the pairs that have the same transformation vector
        for r_a, c_a in A_points:
            for r_b, c_b in B_points:
                d[(r_b - r_a, c_b - c_a)] += 1

        return max(d.values() or [0])
```